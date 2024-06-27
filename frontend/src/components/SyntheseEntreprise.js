import * as React from "react";
import EntrepriseForm from "./EntrepriseForm";
import "../App.css";

function SyntheseEntreprise({ entreprises }) {
  return (
    <div
      className="axe entreprise shadow-xl rounded-2xl w-[80vw] px-14 pb-6 mt-28  absolute min-w-[600px] max-w-screen"
      id="entreprise"
    >
      <h1 className="mt-4 font-bold text-4xl left-0">
        {entreprises ? entreprises["entreprise"]["entreprise_nom"] : ""}
      </h1>
      <div className="flex flex-col gap-4 mt-4 text-black w-11/12 max-w-3xl">
        {entreprises ? (
          <div>
            <EntrepriseForm
              question={" Quelle est le nom de l'entreprise "}
              synthese={entreprises["entreprise"]["entreprise_nom"]}
              row={1}
            />
            <EntrepriseForm
              question={" Dans quel secteur l'entreprise opère-t-elle ? "}
              synthese={entreprises["entreprise"]["secteur"]}
              row={1}
            />
            <EntrepriseForm
              question={" Combien d'employés compte l'entreprise ? "}
              synthese={entreprises["entreprise"]["ent_nbr_salarie"]}
              row={1}
            />
            <EntrepriseForm
              question={" Où est situé le siège social de l'entreprise ? "}
              synthese={entreprises["entreprise"]["lieu"]}
              row={1}
            />
            <EntrepriseForm
              question={" Quel type de gouvernance l'entreprise a-t-elle ? "}
              synthese={entreprises["entreprise"]["gouvernance"]}
              row={1}
            />
            <EntrepriseForm
              question={
                " L'entreprise est-elle centralisée ou décentralisée ? "
              }
              synthese={entreprises["entreprise"]["centralise"]}
              row={1}
            />
            <EntrepriseForm
              question={" Quel type de clientèle l'entreprise cible-t-elle ? "}
              synthese={entreprises["entreprise"]["clientel"]}
              row={1}
            />
            <EntrepriseForm
              question={
                "Quels sont les projets principaux de l'entreprise actuellement ?"
              }
              synthese={entreprises["entreprise"]["projet"]}
              row={1}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {entreprises
        ? console.log(entreprises["categorie"]["Compétence"]["reponses"])
        : ""}
    </div>
  );
}

export default SyntheseEntreprise;
