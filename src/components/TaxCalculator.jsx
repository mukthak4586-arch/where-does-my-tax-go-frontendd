import { useState } from "react";
import budgetData from "../data/budgetData";

function TaxCalculator() {
  const [tax, setTax] = useState("");
  const [result, setResult] = useState([]);

  const handleCalculate = () => {
    if (!tax || tax <= 0) return;

    const totalBudget = budgetData.reduce(
      (sum, item) => sum + item.amount,
      0
    );

    const distribution = budgetData.map((item) => ({
      name: item.name,
      value: ((item.amount / totalBudget) * Number(tax)).toFixed(2),
    }));

    setResult(distribution);
  };

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "40px",
      }}
    >
      <h2>💰 Where Did My Tax Go?</h2>

      <input
        type="number"
        placeholder="Enter Tax Amount (₹)"
        value={tax}
        onChange={(e) => setTax(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <button
        onClick={handleCalculate}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
        }}
      >
        Calculate
      </button>

      <div style={{ marginTop: "20px" }}>
        {result.map((item) => (
          <p key={item.name}>
            <strong>{item.name}</strong> : ₹{item.value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TaxCalculator;