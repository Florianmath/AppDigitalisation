import * as React from "react";
import { Pagination } from "@nextui-org/react";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import SyntheseEntreprise from "./SyntheseEntreprise";
import AxeCompetenceSynthese from "./AxeCompetenceSynthese";
import AxeNumeriqueSynthese from "./AxeNumeriqueSynthese";
import AxeReactiviteSynthese from "./AxeReactiviteSynthese";
import MyNavBar from "./MyNavBar";
import Chart from "chart.js/auto";
import MyRadar from "./MyRadar";

function Synthese() {
  const [entreprises, setEntreprises] = React.useState();
  const [moyenneComp, setMoyenneComp] = React.useState(0);
  const [moyenneReac, setMoyenneReac] = React.useState(0);
  const [moyenneNum, setMoyenneNum] = React.useState(0);
  const params = useParams();
  const navigate = useNavigate();

  function calculateAverageChoixValeur(data) {
    const result = {};

    for (const category in data) {
      const responses = data[category].reponses;
      const totalResponses = responses.length;

      if (totalResponses > 0) {
        const totalChoixValeur = responses.reduce(
          (sum, response) => sum + response.choix_valeur,
          0,
        );
        const averageChoixValeur = totalChoixValeur / totalResponses;
        result[category] = averageChoixValeur;
      } else {
        result[category] = 0; // If no responses, set average to 0
      }
    }

    return result;
  }

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

    // console.log(calculateAverageChoixValeur(JSON.parse(response)["categorie"]));
    setMoyenneComp(
      calculateAverageChoixValeur(JSON.parse(response)["categorie"])[
        "Compétence"
      ],
    );
    setMoyenneReac(
      calculateAverageChoixValeur(JSON.parse(response)["categorie"])[
        "Réactivité"
      ],
    );
    setMoyenneNum,
      calculateAverageChoixValeur(JSON.parse(response)["categorie"])[
        "Numérique"
      ];
  }

  function check(number) {
    // console.log("test", number);
    const pages = [
      "entreprise",
      "competence",
      "reactivite",
      "numerique",
      "graph",
    ];

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
      <MyNavBar />
      <SyntheseEntreprise entreprises={entreprises} />
      <AxeCompetenceSynthese entreprises={entreprises} />
      <AxeNumeriqueSynthese entreprises={entreprises} />
      <AxeReactiviteSynthese entreprises={entreprises} />

      <div
        className="axe w-[80vw] max-h-[800px] h-sceen mt-20 flex justify-center entreprise"
        id="graph"
      >
        <MyRadar notes={[moyenneComp, moyenneReac, moyenneNum]} />
      </div>

      <div className="mb-2 bottom-0 fixed">
        <Pagination
          loop
          showControls
          color="success"
          total={5}
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
