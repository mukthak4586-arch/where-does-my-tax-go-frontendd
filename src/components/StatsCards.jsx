function StatsCards() {
  const cards = [
    {
      title: "Total Budget",
      value: "₹50.65 Lakh Cr",
      color: "#2563eb",
    },
    {
      title: "Defence",
      value: "₹5.94 Lakh Cr",
      color: "#dc2626",
    },
    {
      title: "Education",
      value: "₹1.28 Lakh Cr",
      color: "#16a34a",
    },
    {
      title: "Health",
      value: "₹98,000 Cr",
      color: "#0891b2",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        margin: "35px 0",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
            borderTop: `6px solid ${card.color}`,
          }}
        >
          <h3>{card.title}</h3>

          <h2 style={{ color: card.color }}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;