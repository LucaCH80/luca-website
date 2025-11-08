export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        padding: "100px 20px",
        backgroundColor: "#f4f7fb", // fondo azul muy suave
        color: "#1a1a1a",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        Luca Chiesa
      </h1>

      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "40px" }}>
        Sales • Leadership • DISC
      </p>

      <a
        href="mailto:contact@lucachiesa.net?subject=Consulta%20desde%20la%20web"
        style={{
          backgroundColor: "#2F67B2",
          color: "#fff",
          padding: "14px 36px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1rem",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#3E78C4")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2F67B2")}
      >
        Contacta con Luca
      </a>

      <footer
        style={{
          marginTop: "100px",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        <p>© 2025 Luca Chiesa</p>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a
            href="mailto:contact@lucachiesa.net"
            style={{
              color: "#2F67B2",
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
          >
            ✉️
          </a>
          <a
            href="https://www.linkedin.com/in/chiesaluca/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2F67B2",
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
          >
            in
          </a>
        </div>
      </footer>
    </div>
  );
}
