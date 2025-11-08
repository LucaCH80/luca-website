export default function Home() {
  const saffron = "#E6B800";   // color de acento (a juego con el favicon)
  const linkedin = "#0A66C2";  // azul oficial de LinkedIn

  const iconBtn = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "white",
    color: "#222",
    border: "1px solid #e5e5e5",
    boxShadow: "0 1px 2px rgba(0,0,0,.06)",
    textDecoration: "none",
    transition: "all .2s ease",
  };

  const iconBtnHover = {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 14px rgba(0,0,0,.12)",
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "80px 20px",
        lineHeight: 1.6,
        background: "#fff",
        color: "#111",
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>Luca Chiesa</h1>
      <p style={{ fontSize: 18, marginBottom: 36, color: "#555" }}>
        Sales • Leadership • DISC
      </p>

      {/* CTA principal: email */}
      <a
        href="mailto:contact@lucachiesa.net?subject=Consulta%20desde%20la%20web&body=Hola%20Luca,"
        style={{
          display: "inline-block",
          backgroundColor: saffron,
          color: "black",
          padding: "12px 24px",
          borderRadius: 10,
          textDecoration: "none",
          fontWeight: "bold",
          transition: "all .2s ease",
          boxShadow: "0 4px 10px rgba(0,0,0,.12)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,.20)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,.12)";
        }}
      >
        Contacta con Luca
      </a>

      {/* Footer con iconos */}
      <footer
        style={{
          marginTop: 64,
          borderTop: "1px solid #eee",
          paddingTop: 22,
          color: "#666",
          fontSize: 14,
        }}
      >
        <p style={{ marginBottom: 14 }}>© {new Date().getFullYear()} Luca Chiesa</p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          {/* Email primero */}
          <a
            href="mailto:contact@lucachiesa.net?subject=Consulta%20desde%20la%20web&body=Hola%20Luca,"
            aria-label="Enviar email a contact@lucachiesa.net"
            style={{ ...iconBtn }}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, iconBtnHover)}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,.06)";
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
            </svg>
          </a>

          {/* Luego LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lucachiesa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Luca Chiesa"
            style={{ ...iconBtn, color: linkedin }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = linkedin;
              Object.assign(e.currentTarget.style, iconBtnHover);
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = linkedin;
              e.currentTarget.style.background = "white";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,.06)";
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.98 3.5c0 1.38-1.12 2.5-2.48 2.5A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07C13.04 8.99 14.67 7.73 17.1 7.73c5.06 0 6 3.33 6 7.66V24h-5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-5V8z"/>
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
