import * as React from "react";
import "./App.css";
import { NextUIProvider, Input, Pagination } from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/radio";

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageTitles = [
    "Entreprise",
    "Axe compétence",
    "Axe réactivité",
    "Axe numérique",
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderRadioGroup = (category, question, options) => (
    <RadioGroup>
      {options.map((option) => (
        <Radio key={option} value={option}>{option}</Radio>
      ))}
    </RadioGroup>
  );

  return (
    <NextUIProvider>
      <div className="flex flex-col items-center mx-4">
        <h1 className="mt-4 font-bold text-3xl left-0">
          {pageTitles[currentPage - 1]}
        </h1>
        {currentPage === 1 && (
          <div className="flex flex-col gap-4 mt-4 text-black w-7/12">
            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Dans quel secteur l'entreprise opère-t-elle ?
              </h3>
              <div className="flex max-w-xl flex-wrap items-end md:flex-nowrap mb-4 md:mb-0 gap-4">
                <Input type="text" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Combien d'employés compte l'entreprise ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="text" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Où est situé le siège social de l'entreprise ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="text" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Quel type de gouvernance l'entreprise a-t-elle ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="text" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                L'entreprise est-elle centralisée ou décentralisée ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="text" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Quel type de clientèle l'entreprise cible-t-elle ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="text" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Quels sont les projets principaux de l'entreprise actuellement ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="text" label="Réponse" labelPlacement="inside" />
              </div>
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div className="flex flex-col gap-4 mt-4 text-black w-7/12">
            <h2>Excellence Technique/Communauté de pratiques</h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                L'entreprise favorise-t-elle l'excellence technique ? (Principe
                9 du Manifeste Agile)
              </h3>
              <div className="flex flex-row gap-4">
            <div className="w-2/3">
              {renderRadioGroup("competence", "excellenceTechnique", [
                "Oui",
                "Oui un peu",
                "Pas du tout",
              ])}
            </div>
            <div className="w-1/3">
              <Input type="text" placeholder="Commentaire" />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-2/3">
              <h3 className="text-default-500 text-small">
                Votre entreprise promeut-elle un "état d'esprit agile" ?
              </h3>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="w-2/3">
              {renderRadioGroup("faireAgile", "espritAgile", [
                "Oui",
                "Non",
                "Noui",
              ])}
            </div>
            <div className="w-1/3">
              <Input type="text" placeholder="Commentaire" />
            </div>
          </div>
        </div>
        </div>
        )}
        {currentPage > 2 && (
          <div className="flex flex-col gap-4 mt-4 text-black w-7/12">
            <h2>Contenu pour {pageTitles[currentPage - 1]}</h2>
          </div>
        )}
        <div className="pagination-container">
          <Pagination
            loop
            showControls
            color="success"
            total={pageTitles.length}
            initialPage={currentPage}
            onChange={(page) => handlePageChange(page)}
            className="custom-pagination"
          />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
