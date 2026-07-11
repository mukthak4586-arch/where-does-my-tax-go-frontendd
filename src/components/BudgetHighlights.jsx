function BudgetHighlights() {
  const highlights = [
    {
      title: "Infrastructure",
      amount: "₹11.11 Lakh Crore",
      desc: "Roads, highways, airports, ports and smart cities."
    },
    {
      title: "Defence",
      amount: "₹5.94 Lakh Crore",
      desc: "Modernization of armed forces and border security."
    },
    {
      title: "Education",
      amount: "₹1.28 Lakh Crore",
      desc: "Schools, higher education and digital learning."
    },
    {
      title: "Healthcare",
      amount: "₹98,000 Crore",
      desc: "Hospitals, vaccination and public healthcare."
    },
    {
      title: "Railways",
      amount: "₹2.62 Lakh Crore",
      desc: "Railway modernization and electrification."
    },
    {
      title: "Digital India",
      amount: "₹21,000 Crore",
      desc: "AI, cybersecurity and digital governance."
    }
  ];

  return (
    <div style={{ marginTop: 60 }}>
      <h2
        style={{
          textAlign: "center",
          color: "#0d6efd",
          marginBottom: 30
        }}
      >
        📢 Budget Highlights
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20
        }}
      >
        {highlights.map((item) => (
          <div
            key={item.title}
            style={{
              background: "white",
              padding: 20,
              borderRadius: 15,
              boxShadow: "0 5px 15px rgba(0,0,0,.1)"
            }}
          >
            <h3>{item.title}</h3>

            <h2 style={{ color: "#0d6efd" }}>
              {item.amount}
            </h2>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetHighlights;