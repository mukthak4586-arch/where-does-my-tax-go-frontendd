function BudgetInsights({ data }) {
  if (!data || data.length === 0) return null;

  const item = data[0];

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "40px",
        boxShadow: "0 5px 15px rgba(0,0,0,.1)"
      }}
    >
      <h2>📊 Budget Insights</h2>

      <p><strong>Department:</strong> {item.name}</p>

      <p><strong>Allocation:</strong> ₹{item.amount.toLocaleString()} Crore</p>

      <p>{item.description}</p>

      <hr />

      <h3>Why is this important?</h3>

      <p>
        This sector directly contributes to India's long-term economic and
        social development. Budget allocation helps improve public services,
        infrastructure, employment and national growth.
      </p>
    </div>
  );
}

export default BudgetInsights;