function DashboardCards() {
  const cards = [
    {
      title: "Total Budget",
      value: "₹50.65 Lakh Cr",
      icon: "💰",
      color: "#2563eb",
    },
    {
      title: "Top Ministry",
      value: "Infrastructure",
      icon: "🏗",
      color: "#16a34a",
    },
    {
      title: "Largest Allocation",
      value: "₹11.11 Lakh Cr",
      icon: "📈",
      color: "#dc2626",
    },
    {
      title: "Departments",
      value: "10",
      icon: "🏛",
      color: "#9333ea",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <h1>{card.icon}</h1>

          <h3>{card.title}</h3>

          <h2
            style={{
              color: card.color,
            }}
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;