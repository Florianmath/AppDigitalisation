package main

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	_ "github.com/lib/pq"

	"fmt"

	"github.com/labstack/echo/v4"
)

func getJSON(idEntreprise int, db *sql.DB) (string, error) {
	// TODO: dupliquer cette shit pour reponse et entreprise
	rows, err := db.Query("SELECT e.ent_pk_id, r.rep_date, r.rep_choix, r.rep_commentaire, c.cat_nom, ch.cho_nom, ch.cho_valeur FROM reponse r JOIN entreprise e ON r.rep_fk_entreprise = e.ent_pk_id JOIN question q ON r.rep_fk_question = q.que_pk_id JOIN categorie c ON q.que_fk_categorie = c.cat_pk_id LEFT JOIN choix_possible ch ON r.rep_choix = ch.cho_pk_id WHERE e.ent_pk_id = $1 ;", idEntreprise)
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
	fmt.Println(string(jsonData))
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
		fmt.Println(ent_pk_id, entreprise)
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
		fmt.Printf("test")
		if err != nil {
			e.Logger.Fatal(err)
		}
		// return c.String(http.StatusOK, strconv.Itoa(idEntreprise)+" Hello, World!")
		return getEntreprise(c, idEntreprise, db)
	})

	defer db.Close()

	e.Logger.Fatal(e.Start(":8080"))

	if err != nil {
		e.Logger.Fatal(err)
	}
}
