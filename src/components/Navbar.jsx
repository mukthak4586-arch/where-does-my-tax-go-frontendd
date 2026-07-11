function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#0d6efd",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,.2)",
      }}
    >
      <h2 style={{ margin: 0 }}>
        🇮🇳 TaxAI
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        <span onClick={() => scrollTo("home")}>Home</span>

        <span onClick={() => scrollTo("explorer")}>Explorer</span>

        <span onClick={() => scrollTo("calculator")}>Calculator</span>

        <span onClick={() => scrollTo("highlights")}>Highlights</span>

        <span onClick={() => scrollTo("about")}>About</span>
      </div>
    </nav>
  );
}

export default Navbar;