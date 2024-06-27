import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SyntheseChoice from "./components/SyntheseChoice";
import Synthese from "./components/Synthese";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/synthese" element={<SyntheseChoice />} />
          <Route path="/synthese/:idEntreprise" element={<Synthese />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
