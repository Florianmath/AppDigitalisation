import * as React from "react";
import "../App.css";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

function MyRadar({ notes }) {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  );

  const data = {
    labels: ["Axe Numerique", "Axe Competence", "Axe Reactivite"],
    datasets: [
      {
        label: "Notes Moyenne",
        data: notes,
        backgroundColor: "#1EFF2A32",
        borderColor: "#64D684FF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0, // Set the minimum value
        max: 2, // Set the maximum value
        ticks: {
          stepSize: 0.5, // Set the step size
        },
      },
    },
  };
  return <Radar data={data} options={options} />;
}

export default MyRadar;
