-- Define the custom type 'axe' if necessary
-- CREATE TYPE axe AS ENUM ('value1', 'value2', ...);

CREATE TABLE entreprise (
    ent_pk_id SERIAL PRIMARY KEY,
    ent_nom VARCHAR(50),
    secteur VARCHAR(50),
    ent_nbr_salarie INTEGER,
    lieu VARCHAR(50),
    gouvernance VARCHAR(50),
    centralise VARCHAR(50),
    clientel VARCHAR(50),
    projet VARCHAR(100)
);

CREATE TABLE categorie (
    cat_pk_id SERIAL PRIMARY KEY,
    cat_nom VARCHAR(50),
    cat_description TEXT
);

CREATE TABLE question (
    que_pk_id SERIAL PRIMARY KEY,
    que_enonce TEXT,
    que_fk_categorie INTEGER NOT NULL,
    CONSTRAINT fk_question_categorie FOREIGN KEY (que_fk_categorie) REFERENCES categorie(cat_pk_id)
);

CREATE TABLE choix_possible (
    cho_pk_id SERIAL PRIMARY KEY,
    cho_nom TEXT,
    cho_valeur INTEGER,
    cho_fk_question INTEGER,
    CONSTRAINT fk_choix_possible_question FOREIGN KEY (cho_fk_question) REFERENCES question(que_pk_id)
);

CREATE TABLE reponse (
    rep_fk_entreprise INTEGER,
    rep_fk_question INTEGER,
    rep_fk_choix INTEGER,
    rep_date TIMESTAMP,
    CONSTRAINT fk_reponse_question FOREIGN KEY (rep_fk_question) REFERENCES question(que_pk_id),
    CONSTRAINT fk_reponse_choix FOREIGN KEY (rep_fk_choix) REFERENCES choix_possible(cho_pk_id),
    CONSTRAINT fk_reponse_entreprise FOREIGN KEY (rep_fk_entreprise) REFERENCES entreprise(ent_pk_id)
);
