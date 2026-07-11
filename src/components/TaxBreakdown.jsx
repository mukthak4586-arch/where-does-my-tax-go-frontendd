import { useState } from "react";
import budgetData from "../data/budgetData";

function TaxBreakdown() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState([]);

  const calculate = () => {
    if (!amount) return;

    const total = budgetData.reduce((sum, item) => sum + item.amount, 0);

    const data = budgetData.map((item) => ({
      ...item,
      value: ((item.amount / total) * Number(amount)).toFixed(2),
      percent: ((item.amount / total) * 100).toFixed(1),
    }));

    setResult(data);
  };

  return (
    <div
      style={{
        background: "white",
        padding: 25,
        borderRadius: 15,
        marginTop: 40,
      }}
    >
      <h2>💰 Tax Breakdown Calculator</h2>

      <input
        type="number"
        placeholder="Enter Tax Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
          padding: 10,
          width: 250,
          marginRight: 10,
        }}
      />

      <button onClick={calculate}>
        Calculate
      </button>

      {result.map((item) => (
        <div key={item.name} style={{ marginTop: 20 }}>
          <strong>{item.name}</strong>

          <div
            style={{
              background: "#ddd",
              borderRadius: 10,
              overflow: "hidden",
              height: 20,
            }}
          >
            <div
              style={{
                width: `${item.percent}%`,
                background: item.color,
                height: "100%",
              }}
            />
          </div>

          <p>
            ₹{item.value} ({item.percent}%)
          </p>
        </div>
      ))}
    </div>
  );
}

export default TaxBreakdown;