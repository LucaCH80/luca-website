export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "80px 20px",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Luca Chiesa
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Sales • Leadership • DISC • Mindfulness
      </p>

      <a
        href="mailto:contact@lucachiesa.net?subject=Consulta%20desde%20la%20web&body=Hola%20Luca,"
        style={{
          display: "inline-block",
          backgroundColor: "#E6B800",
          color: "black",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
      >
        Escríbele a contact@lucachiesa.net
      </a>

      <footer
        style={{
          marginTop: "60px",
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <p>© {new Date().getFullYear()} Luca Chiesa</p>
        <p>
          <a
            href="https://www.linkedin.com/in/lucachiesa"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0A66C2", textDecoration: "none" }}
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="mailto:contact@lucachiesa.net"
            style={{ color: "#0A66C2", textDecoration: "none" }}
          >
            Email
          </a>
        </p>
      </footer>
    </main>
  );
}
