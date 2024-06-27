import * as React from "react";
import EntrepriseForm from "./EntrepriseForm";

function Entreprise() {
  return (
    <div
      className="axe entreprise shadow-xl rounded-2xl w-[50vw] px-14 pb-6 mt-6 min-w-[600px] max-w-screen-sm"
      id="entreprise"
    >
      <h1 className="mt-4 font-bold text-3xl left-0"> Entreprise </h1>
      <div className="flex flex-col gap-4 mt-4 text-black w-11/12 max-w-3xl">
        <EntrepriseForm
          question={" Quelle est le nom de l'entreprise "}
          // synthese={"test"}
        />

        <EntrepriseForm
          question={" Dans quel secteur l'entreprise opère-t-elle ? "}
        />

        <EntrepriseForm
          question={" Combien d'employés compte l'entreprise ? "}
        />

        <EntrepriseForm
          question={" Où est situé le siège social de l'entreprise ? "}
        />

        <EntrepriseForm
          question={" Quel type de gouvernance l'entreprise a-t-elle ? "}
        />

        <EntrepriseForm
          question={" L'entreprise est-elle centralisée ou décentralisée ? "}
        />

        <EntrepriseForm
          question={" Quel type de clientèle l'entreprise cible-t-elle ? "}
        />

        <EntrepriseForm
          question={
            "Quels sont les projets principaux de l'entreprise actuellement ?"
          }
        />
      </div>
    </div>
  );
}

export default Entreprise;
