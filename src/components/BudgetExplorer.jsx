import budgetData from "../data/budgetData";

function BudgetExplorer({ onSelect }) {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#0d6efd",
        }}
      >
        🏛 Budget Explorer
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {budgetData.map((item) => (
          <div
            key={item.name}
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "0.3s",
            }}
          >
            <h3
              style={{
                color: "#0d6efd",
              }}
            >
              {item.name}
            </h3>

            <h2>
              ₹{item.amount.toLocaleString()} Cr
            </h2>

            <p
              style={{
                color: "#666",
                minHeight: "70px",
              }}
            >
              {item.description.substring(0, 90)}...
            </p>

            <button
              onClick={() => onSelect(item)}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                background: "#0d6efd",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetExplorer;