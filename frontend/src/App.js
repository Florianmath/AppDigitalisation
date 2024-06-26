import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Synthese from "./components/Synthese";
import SyntheseEntreprise from "./components/SyntheseEntreprise";

function App() {
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
