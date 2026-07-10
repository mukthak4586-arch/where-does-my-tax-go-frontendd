import { useState } from "react";
import BudgetChart from "../components/BudgetChart";

function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;

    setLoading(true);

    setTimeout(() => {
      if (question.toLowerCase().includes("gst")) {
        setAnswer(
          "GST revenue is shared between the Central and State Governments. It funds Education, Healthcare, Infrastructure, Defence and Welfare schemes according to the Union Budget."
        );
      } else if (question.toLowerCase().includes("income")) {
        setAnswer(
          "Income Tax revenue supports Defence, Roads, Railways, Healthcare, Education, Digital India and other public welfare initiatives."
        );
      } else if (question.toLowerCase().includes("defence")) {
        setAnswer(
          "The Defence sector receives one of the largest allocations in the Union Budget for national security, armed forces and modernization."
        );
      } else {
        setAnswer(
          "According to the Union Budget, tax revenue is distributed across Education, Healthcare, Defence, Infrastructure, Agriculture and Welfare programmes."
        );
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#0d6efd" }}>
        🇮🇳 Where Does My Tax Go?
      </h1>

      <h3>AI Powered Budget Transparency Platform</h3>

      <p>
        Understand how the Government of India spends your tax money using AI.
      </p>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about GST, Income Tax, Defence..."
        style={{
          width: "500px",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleAsk}
        style={{
          marginLeft: "10px",
          padding: "12px 20px",
          background: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setQuestion("Where does GST go?")}
          style={{ padding: "10px 16px", marginRight: "10px" }}
        >
          GST
        </button>

        <button
          onClick={() => setQuestion("Where does Income Tax go?")}
          style={{ padding: "10px 16px", marginRight: "10px" }}
        >
          Income Tax
        </button>

        <button
          onClick={() => setQuestion("How much is spent on Defence?")}
          style={{ padding: "10px 16px" }}
        >
          Defence
        </button>
      </div>

      <hr style={{ margin: "40px 0" }} />

      <BudgetChart />

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>📊 Budget Breakdown</h2>

        <ul style={{ lineHeight: "2", fontSize: "17px" }}>
          <li>🛡️ Defence – 35%</li>
          <li>🎓 Education – 20%</li>
          <li>🏥 Healthcare – 15%</li>
          <li>🛣️ Infrastructure – 20%</li>
          <li>🌾 Agriculture – 10%</li>
        </ul>
      </div>

      {answer && (
        <div
          style={{
            marginTop: "30px",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>🤖 AI Response</h2>
          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;