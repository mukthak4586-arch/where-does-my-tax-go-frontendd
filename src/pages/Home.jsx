import { useState } from "react";
import budgetData from "../data/budgetData";
import { askMesh } from "../services/meshApi";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import BudgetChart from "../components/BudgetChart";
import TaxCalculator from "../components/TaxCalculator";
import TaxBreakdown from "../components/TaxBreakdown";
import BudgetExplorer from "../components/BudgetExplorer";
import BudgetHighlights from "../components/BudgetHighlights";
import BudgetInsights from "../components/BudgetInsights";

function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [selectedData, setSelectedData] = useState(budgetData);

  const showDepartment = (item) => {
    setSelectedData([item]);

    setAnswer(
      `${item.description}

💰 Budget Allocation: ₹${item.amount.toLocaleString()} Crore`
    );
  };

const handleAsk = async () => {
  if (!question.trim()) return;

  setAnswer("🤖 Thinking...");

  try {
    const aiAnswer = await askMesh(question);

    setAnswer(aiAnswer);

    const result = budgetData.find((item) =>
      question.toLowerCase().includes(item.name.toLowerCase())
    );

    if (result) {
      setSelectedData([result]);
    } else {
      setSelectedData(budgetData);
    }
  } catch (error) {
    console.error(error);

    setAnswer("Unable to connect to AI server.");
  }
};

  return (
    <>
      <Navbar />

      <div
        id="home"
        style={{
          background: "#eef4fb",
          minHeight: "100vh",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* HERO SECTION */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#0d6efd,#2563eb,#60a5fa)",
            color: "white",
            borderRadius: "25px",
            padding: "70px 30px",
            textAlign: "center",
            marginBottom: "45px",
            boxShadow: "0 12px 30px rgba(0,0,0,.15)",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "10px",
            }}
          >
            🇮🇳 TaxAI
          </h1>

          <h2
            style={{
              fontWeight: "400",
            }}
          >
            Government Budget Transparency Platform
          </h2>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "850px",
              margin: "25px auto",
              lineHeight: "34px",
            }}
          >
            Understand exactly where your tax money goes through
            AI-powered explanations, interactive charts and
            real budget allocations.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("explorer")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "16px 35px",
              background: "white",
              color: "#0d6efd",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              marginRight: "15px",
            }}
          >
            🚀 Explore Budget
          </button>

          <button
            onClick={() =>
              document
                .getElementById("calculator")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "16px 35px",
              background: "transparent",
              border: "2px solid white",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            💰 Tax Calculator
          </button>
        </div>

        <DashboardCards />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "45px",
          }}
        >
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about Defence, Health, Education..."
            style={{
              width: "550px",
              padding: "16px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleAsk}
            style={{
              marginLeft: "10px",
              padding: "16px 30px",
              border: "none",
              borderRadius: "10px",
              background: "#0d6efd",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🤖 Ask AI
          </button>
        </div>

        {answer && (
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "35px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>🤖 AI Response</h2>

            <p style={{ whiteSpace: "pre-line" }}>{answer}</p>
          </div>
        )}

        <div style={{ marginTop: "50px" }}>
          <BudgetChart data={selectedData} />
        </div>

        <div style={{ marginTop: "40px" }}>
          <BudgetInsights data={selectedData} />
        </div>

        <div id="calculator" style={{ marginTop: "50px" }}>
          <TaxCalculator />
        </div>

        <div style={{ marginTop: "40px" }}>
          <TaxBreakdown />
        </div>

        <div id="explorer" style={{ marginTop: "50px" }}>
          <BudgetExplorer onSelect={showDepartment} />
        </div>

        <div id="highlights" style={{ marginTop: "50px" }}>
          <BudgetHighlights />
        </div>

        <footer
          id="about"
          style={{
            marginTop: "70px",
            textAlign: "center",
            color: "#666",
          }}
        >
          <hr />

          <h2>🇮🇳 TaxAI Dashboard</h2>

          <p>AI Powered Budget Transparency Platform</p>

          <p>React • Express • Chart.js • Mesh AI • Vercel</p>

          <p>Built for Hackathon 2026</p>
        </footer>
      </div>
    </>
  );
}

export default Home;