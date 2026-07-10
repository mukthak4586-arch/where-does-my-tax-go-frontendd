import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "Education",
    "Healthcare",
    "Defence",
    "Infrastructure",
    "Agriculture",
  ],
  datasets: [
    {
      data: [20, 15, 35, 20, 10],
      backgroundColor: [
        "#4CAF50",
        "#2196F3",
        "#F44336",
        "#FFC107",
        "#9C27B0",
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export default function BudgetChart() {
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h2>Budget Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
}