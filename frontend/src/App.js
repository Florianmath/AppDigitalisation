import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import CustomPagination from "./customPagination";

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
                <Input type="email" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Combien d'employés compte l'entreprise ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="email" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Où est situé le siège social de l'entreprise ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="email" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Quel type de gouvernance l'entreprise a-t-elle ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="email" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                L'entreprise est-elle centralisée ou décentralisée ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="email" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Quel type de clientèle l'entreprise cible-t-elle ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="email" label="Réponse" labelPlacement="inside" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-default-500 text-small">
                Quels sont les projets principaux de l'entreprise actuellement ?
              </h3>
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Input type="email" label="Réponse" labelPlacement="inside" />
              </div>
            </div>
          </div>
        )}
        {currentPage > 1 && (
          <div className="flex flex-col gap-4 mt-4 text-black w-7/12">
            <h2>Contenu pour {pageTitles[currentPage - 1]}</h2>
          </div>
        )}
        <div className="pagination-container">
          <CustomPagination
            currentPage={currentPage}
            totalPages={4}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
