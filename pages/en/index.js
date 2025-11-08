export default function HomeEN() {
  const bg = "#F5F6F8";
  const accent = "#2F67B2";
  const pillBase = {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "0.9rem",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all .2s ease",
    border: "1px solid transparent",
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        textAlign: "center",
        padding: "4rem 1.5rem",
        backgroundColor: bg,
        color: "#111",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Header with language switcher */}
      <header
        style={{
          position: "absolute",
          top: "1.2rem",
          right: "1.5rem",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {/* EN active */}
        <span
          style={{
            ...pillBase,
            background: "#111",
            color: "#fff",
          }}
        >
          EN
        </span>
        {/* ES inactive (link) */}
        <a
          href="/"
          style={{
            ...pillBase,
            color: accent,
            background: "#fff",
            borderColor: "#e5e7eb",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#eef3fb";
            e.currentTarget.style.borderColor = "#d7e3f8";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.borderColor = "#e5e7eb";
          }}
          aria-label="Cambiar a Español"
        >
          ES
        </a>
      </header>

      {/* Main content */}
      <h1 style={{ fontSize: "3rem", fontWeight: 700, marginTop: "2.5rem" }}>
        Luca Chiesa
      </h1>
      <p style={{ fontSize: "1.15rem", color: "#444", marginBottom: "2rem" }}>
        Sales • Leadership • DISC
      </p>

      <a
        href="mailto:contact@lucachiesa.net"
        style={{
          backgroundColor: accent,
          color: "#fff",
          padding: "1rem 2rem",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: 600,
          boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
          transition: "all .2s ease",
          display: "inline-block",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3E78C4")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = accent)}
      >
        Contact Luca
      </a>

      {/* Footer */}
      <footer style={{ marginTop: "3rem", color: "#555" }}>
        <p>© {new Date().getFullYear()} Luca Chiesa</p>
        <div style={{ marginTop: "0.75rem" }}>
          <a
            href="mailto:contact@lucachiesa.net"
            style={{ marginRight: "1rem" }}
            aria-label="Email"
          >
            ✉️
          </a>
          <a
            href="https://www.linkedin.com/in/chiesaluca/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            💼
          </a>
        </div>
      </footer>
    </div>
  );
}
