import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Synthese from "./components/Synthese";
import SyntheseEntreprise from "./components/SyntheseEntreprise";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/synthese" element={<Synthese />} />
          <Route
            path="/synthese/:nomEntreprise"
            element={<SyntheseEntreprise />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
