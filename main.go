package main

import (
	"database/sql"
	"net/http"
	"strconv"

	_ "github.com/lib/pq"

	"fmt"

	"github.com/labstack/echo/v4"
)

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
	var ent_pk_id int
	var entreprise string
	var entreprises []string

	// return c.JSON(http.StatusOK, db)
	rows, err := db.Query("SELECT ent_pk_id, ent_nom FROM entreprise WHERE ent_pk_id=$1", idEntreprise)
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

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	e.Logger.Fatal(e.Start(":8080"))

	if err != nil {
		e.Logger.Fatal(err)
	}
}
