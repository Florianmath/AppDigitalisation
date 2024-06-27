import * as React from "react";
import { Pagination } from "@nextui-org/react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import SyntheseEntreprise from "./SyntheseEntreprise";
import AxeCompetenceSynthese from "./AxeCompetenceSynthese";
import AxeNumeriqueSynthese from "./AxeNumeriqueSynthese";
import AxeReactiviteSynthese from "./AxeReactiviteSynthese";

function Synthese() {
  const [entreprises, setEntreprises] = React.useState();
  const params = useParams();
  const navigate = useNavigate();

  async function getEntreprise() {
    let response = await fetch("/api/entreprise/" + params.idEntreprise, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.log(error);
    });
    response = await response.json();

    if (Object.keys(JSON.parse(response)["categorie"]).length == 0) {
      navigate("/");
    }
    console.log(JSON.parse(response));
    // console.log(Object.keys(JSON.parse(response)["categorie"]).length == 0);
    setEntreprises(JSON.parse(response));
  }

  function check(number) {
    // console.log("test", number);
    const pages = ["entreprise", "competence", "reactivite", "numerique"];

    let divs = document.getElementsByClassName("axe");
    Array.from(divs).forEach((div) => {
      Array.from(pages).forEach((page) => {
        div.classList.remove(page);
      });
      div.classList.add(pages[number - 1]);
    });
  }

  React.useEffect(() => {
    getEntreprise();
  }, []);
  return (
    <div className="flex flex-col items-center mx-4">
      <SyntheseEntreprise entreprises={entreprises} />
      <AxeCompetenceSynthese entreprises={entreprises} />
      <AxeNumeriqueSynthese entreprises={entreprises} />
      <AxeReactiviteSynthese entreprises={entreprises} />

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
  );
}

export default Synthese;
