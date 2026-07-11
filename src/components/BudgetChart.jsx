import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function BudgetChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.name),

    datasets: [
      {
        data: data.map((item) => item.amount),

        backgroundColor: data.map((item) => item.color),
      },
    ],
  };

  return (
    <div style={{ width: "500px" }}>
      <h2>Budget Distribution</h2>

      <Pie data={chartData} />
    </div>
  );
}

export default BudgetChart;