package main

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	_ "github.com/lib/pq"

	"fmt"

	"github.com/labstack/echo/v4"
)

func test(c echo.Context, idEntreprise int, db *sql.DB) error {
	// Define structures to hold the database query result
	type Response struct {
		QuestionEnonce     string     `json:"question_enonce"`
		ReponseDate        *time.Time `json:"reponse_date,omitempty"`
		ReponseCommentaire string     `json:"reponse_commentaire"`
		ChoixValeur        int        `json:"choix_valeur"`
		// ChoixNom           string     `json:"choix_nom"`
	}

	type Entreprise struct {
		EntrepriseNom string `json:"entreprise_nom"`
		Secteur       string `json:"secteur"`
		Nbr_salarie   int    `json:"ent_nbr_salarie"`
		Lieu          string `json:"lieu"`
		Gouvernance   string `json:"gouvernance"`
		Centralise    string `json:"centralise"`
		Clientel      string `json:"clientel"`
		Projet        string `json:"projet"`
	}

	type Categorie struct {
		Reponses []Response `json:"reponses"`
	}

	type Output struct {
		Entreprise Entreprise           `json:"entreprise"`
		Categorie  map[string]Categorie `json:"categorie"`
	}
	// Database connection parameters

	// SQL query
	query := `
SELECT 
    e.ent_pk_id AS entreprise_id,
    e.ent_nom AS entreprise_nom,
    e.secteur AS secteur,
    e.ent_nbr_salarie AS ent_nbr_salarie,
    e.lieu AS lieu,
    e.gouvernance AS gouvernance,
    e.centralise AS centralise,
    e.clientel AS clientel,
    e.projet AS projet,

    c.cat_nom AS categorie_nom,
    q.que_enonce AS question_enonce,
    r.rep_date AS reponse_date,
    r.rep_commentaire AS reponse_commentaire,
    ch.cho_valeur AS choix_valeur
FROM 
    reponse r
JOIN 
    entreprise e ON r.rep_fk_entreprise = e.ent_pk_id
JOIN 
    question q ON r.rep_fk_question = q.que_pk_id
JOIN 
    categorie c ON q.que_fk_categorie = c.cat_pk_id
LEFT JOIN 
    choix_possible ch ON r.rep_choix = ch.cho_pk_id
WHERE 
    e.ent_pk_id = $1;
`

	// Execute the query
	rows, err := db.Query(query, idEntreprise)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	// Process the query results
	output := Output{Categorie: make(map[string]Categorie)}

	var tempEntrepriseNom string
	var tempSecteur string
	var tempNbrSalarie int
	var tempLieu string
	var tempGouvernance string
	var tempCentralise string
	var tempClientel string
	var tempProjet string

	for rows.Next() {
		var (
			entrepriseID       int
			entrepriseNom      string
			secteur            string
			nbrSalarie         int
			lieu               string
			gouvernance        string
			centralise         string
			clientel           string
			projet             string
			categorieNom       string
			questionEnonce     string
			reponseDate        sql.NullTime
			reponseCommentaire string
			// choixNom           sql.NullString
			choixValeur sql.NullInt64
		)
		err := rows.Scan(&entrepriseID, &entrepriseNom, &secteur, &nbrSalarie, &lieu, &gouvernance, &centralise, &clientel, &projet, &categorieNom, &questionEnonce, &reponseDate, &reponseCommentaire, &choixValeur)
		if err != nil {
			panic(err)
		}
		if tempEntrepriseNom == "" {
			tempEntrepriseNom = entrepriseNom
			tempSecteur = secteur
			tempNbrSalarie = nbrSalarie
			tempLieu = lieu
			tempGouvernance = gouvernance
			tempCentralise = centralise
			tempClientel = clientel
			tempProjet = projet
		}

		response := Response{
			QuestionEnonce:     questionEnonce,
			ReponseDate:        nil,
			ReponseCommentaire: reponseCommentaire,
			// ChoixNom:           choixNom.String,
			ChoixValeur: int(choixValeur.Int64),
		}
		if reponseDate.Valid {
			response.ReponseDate = &reponseDate.Time
		}

		if categorie, ok := output.Categorie[categorieNom]; ok {
			categorie.Reponses = append(categorie.Reponses, response)
			output.Categorie[categorieNom] = categorie
		} else {
			output.Categorie[categorieNom] = Categorie{
				Reponses: []Response{response},
			}
		}
	}

	if err := rows.Err(); err != nil {
		panic(err)
	}

	entreprise := Entreprise{
		EntrepriseNom: tempEntrepriseNom,
		Secteur:       tempSecteur,
		Nbr_salarie:   tempNbrSalarie,
		Lieu:          tempLieu,
		Gouvernance:   tempGouvernance,
		Centralise:    tempCentralise,
		Clientel:      tempClientel,
		Projet:        tempProjet,
	}
	output.Entreprise = entreprise

	// Print the JSON output
	jsonOutput, err := json.MarshalIndent(output, "", "    ")
	if err != nil {
		// handle this error
		panic(err)
	}
	// fmt.Println(string(jsonOutput))
	return c.JSON(http.StatusOK, string(jsonOutput))
}

func getJSON(idEntreprise int, db *sql.DB) (string, error) {

	rows, err := db.Query("SELECT e.ent_pk_id, r.rep_date, r.rep_choix, r.rep_commentaire, c.cat_nom, ch.cho_nom, ch.cho_valeur FROM reponse r JOIN entreprise e ON r.rep_fk_entreprise = e.ent_pk_id JOIN question q ON r.rep_fk_question = q.que_pk_id JOIN categorie c ON q.que_fk_categorie = c.cat_pk_id LEFT JOIN choix_possible ch ON r.rep_choix = ch.cho_pk_id WHERE e.ent_pk_id = $1 ;", idEntreprise)
	// rows, err := db.Query("SELECT * FROM categorie JOIN question ON categorie.cat_pk_id = question.que_fk_categorie LEFT JOIN ( SELECT * FROM reponse WHERE rep_fk_entreprise = $1) AS entreprise_reponses ON question.que_pk_id = entreprise_reponses.rep_fk_question LEFT JOIN choix_possible ON question.que_pk_id = choix_possible.cho_fk_question AND entreprise_reponses.rep_choix = choix_possible.cho_valeur GROUP BY categorie.cat_nom;", idEntreprise)
	if err != nil {
		return "", err
	}
	defer rows.Close()
	columns, err := rows.Columns()
	if err != nil {
		return "", err
	}
	count := len(columns)
	tableData := make([]map[string]interface{}, 0)
	values := make([]interface{}, count)
	valuePtrs := make([]interface{}, count)
	for rows.Next() {
		for i := 0; i < count; i++ {
			valuePtrs[i] = &values[i]
		}
		rows.Scan(valuePtrs...)
		entry := make(map[string]interface{})
		for i, col := range columns {
			var v interface{}
			val := values[i]
			b, ok := val.([]byte)
			if ok {
				v = string(b)
			} else {
				v = val
			}
			entry[col] = v
		}
		tableData = append(tableData, entry)
	}
	jsonData, err := json.Marshal(tableData)
	if err != nil {
		return "", err
	}
	// fmt.Println(string(jsonData))
	return string(jsonData), nil
}

func getEntreprises(c echo.Context, db *sql.DB) error {
	var ent_pk_id int
	var entreprise string
	var entreprises []string

	// return c.JSON(http.StatusOK, db)
	rows, err := db.Query("SELECT ent_pk_id, ent_nom FROM entreprise")
	defer rows.Close()
	for rows.Next() {
		err = rows.Scan(&ent_pk_id, &entreprise)
		if err != nil {
			// handle this error
			panic(err)
		}
		// fmt.Println(ent_pk_id, entreprise)
		entreprises = append(entreprises, entreprise)
	}
	return c.JSON(http.StatusOK, entreprises)
}

func getEntreprise(c echo.Context, idEntreprise int, db *sql.DB) error {
	entreprise, _ := getJSON(idEntreprise, db)
	return c.JSON(http.StatusOK, entreprise)
}

const (
	host     = "db"
	port     = 5432
	user     = "app"
	password = "c1hg6jt6"
	dbname   = "AppDigitalisation"
)

func main() {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+"password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	// Connect to database
	db, err := sql.Open("postgres", psqlInfo)

	e := echo.New()

	e.GET("/api", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})

	e.GET("/api/entreprise", func(c echo.Context) error {
		// return c.String(http.StatusOK, "Hello, World!")
		return getEntreprises(c, db)
	})

	e.GET("/api/entreprise/:id", func(c echo.Context) error {
		idEntreprise, err := strconv.Atoi(c.Param("id"))
		// fmt.Printf("test")
		if err != nil {
			e.Logger.Fatal(err)
		}
		// return c.String(http.StatusOK, strconv.Itoa(idEntreprise)+" Hello, World!")
		// return getEntreprise(c, idEntreprise, db)
		return test(c, idEntreprise, db)
	})

	defer db.Close()

	e.Logger.Fatal(e.Start(":8080"))

	if err != nil {
		e.Logger.Fatal(err)
	}
}
