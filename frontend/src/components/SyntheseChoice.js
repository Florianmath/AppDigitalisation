import * as React from "react";
import { Link } from "@nextui-org/link";
import "../App.css";
import MyNavBar from "./MyNavBar";

function SyntheseChoice() {
  const [entreprises, setEntreprises] = React.useState([]);

  async function getEntreprise() {
    let response = await fetch("/api/entreprise", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.log(error);
    });

    // console.log(await response.json());
    setEntreprises(await response.json());
  }

  React.useEffect(() => {
    getEntreprise();
  }, []);
  return (
    <div className="flex flex-col items-center mx-4">
      <MyNavBar />
      <div className="axe entreprise shadow-xl rounded-2xl w-[80vw] px-14 pb-6 mt-28  absolute min-w-[600px] max-w-screen">
        <h1 className="mt-4 font-bold text-4xl left-0">
          Synthese des reponses des entreprises
        </h1>
        <div className="mt-14 flex flex-col justify-between">
          {entreprises.map((entreprise, i) => (
            <Link
              href={"/synthese/" + (parseInt(i) + 1)}
              color="success"
              size="lg"
            >
              {entreprise}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SyntheseChoice;
