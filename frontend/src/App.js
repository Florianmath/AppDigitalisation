import * as React from "react";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Entreprise from "./components/Entreprise";
import { Pagination } from "@nextui-org/react";
import AxeCompetence from "./components/AxeCompetence";
import AxeReactivite from "./components/AxeReactivite";
import AxeNumerique from "./components/AxeNumerique";

function App() {
  function check(number) {
    console.log("test", number);
    const pages = ["entreprise", "competence", "reactivite", "numerique"];

    let divs = document.getElementsByClassName("axe");
    Array.from(divs).forEach((div) => {
      Array.from(pages).forEach((page) => {
        div.classList.remove(page);
      });
      div.classList.add(pages[number - 1]);
    });
  }
  return (
    <NextUIProvider>
      <div className="flex flex-col items-center mx-4">
        <Entreprise />
        <AxeCompetence />
        <AxeReactivite />
        <AxeNumerique />
        <div className="mb-2 bottom-0 fixed">
          <Pagination
            loop
            showControls
            color="success"
            total={4}
            initialPage={1}
            isCompact
            size="lg"
            showShadow
            onChange={(number) => check(number)}
          />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
