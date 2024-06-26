        CREATE TABLE entreprise(
           ent_pk_id SERIAL,
           ent_nom VARCHAR(50),
           secteur VARCHAR(50),
           ent_nbr_salarie INTEGER,
           lieu VARCHAR(50),
           gouvernance VARCHAR(50),
           centralise VARCHAR(50),
           clientel VARCHAR(50),
           projet VARCHAR(100),
           constraint pk_entreprise primary key(ent_pk_id) 
        );

        CREATE TABLE question(
           que_pk_id SERIAL,
           que_enonce TEXT,
           que_fk_categorie INTEGER NOT NULL,
           constraint pk_question primary key(que_pk_id),
        );

        CREATE TABLE reponse(
           rep_fk_entreprise INTEGER,
           rep_fk_question INTEGER,
           rep_date TIMESTAMP,
           rep_commentaire TEXT,
           CONSTRAINT FK_reponse_question FOREIGN KEY(rep_fk_question) REFERENCES question(que_pk_id),
           CONSTRAINT FK_reponse_entreprise FOREIGN KEY(rep_fk_entreprise) REFERENCES question(que_pk_id)
        );

        CREATE TABLE choix_possible(
           cho_pk_id SERIAL,
           cho_nom TEXT,
           cho_valeur INTEGER,
           cho_fk_question INTEGER,
           constraint pk_choix_possible primary key(cho_pk_id),
           CONSTRAINT fk_choix_possible_question FOREIGN KEY(cho_fk_question) REFERENCES question(que_pk_id)
        );
