import Head from "next/head";

export default function Home() {
  const accent = "#2F67B2";   // azul profesional
  const bg = "#f4f7fb";       // fondo suave

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
    <>
      <Head>
        {/* Google Fonts: Poppins (titulares) + Inter (texto) */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <title>Luca Chiesa — Sales · Leadership · DISC</title>
        <meta name="description" content="Formación y consultoría comercial. Ventas, liderazgo y DISC."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/favicon-512.png"/>
        <meta name="theme-color" content={accent}/>
      </Head>

      <div
        style={{
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          textAlign: "center",
          padding: "96px 20px",
          backgroundColor: bg,
          color: "#111",
        }}
      >
        <h1
          style={{
            fontFamily: "Poppins, Inter, sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            margin: "0 0 10px",
          }}
        >
          Luca Chiesa
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2.2vw, 18px)",
            color: "#5b6572",
            margin: "0 0 40px",
            fontWeight: 500,
          }}
        >
          Sales • Leadership • DISC
        </p>

        <a
          href="mailto:contact@lucachiesa.net?subject=Consulta%20desde%20la%20web"
          style={{
            backgroundColor: accent,
            color: "#fff",
            padding: "14px 36px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: "0 6px 16px rgba(47,103,178,0.25)",
            transition: "all 0.25s ease",
            display: "inline-block",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3E78C4")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = accent)}
        >
          Contacta con Luca
        </a>

        <footer
          style={{
            marginTop: 90,
            fontSize: 14,
            color: "#6b7280",
            borderTop: "1px solid #e6e9ef",
            paddingTop: 24,
          }}
        >
          <p style={{ marginBottom: 14 }}>© {new Date().getFullYear()} Luca Chiesa</p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            {/* Email primero */}
            <a
              href="mailto:contact@lucachiesa.net?subject=Consulta%20desde%20la%20web"
              aria-label="Enviar email a contact@lucachiesa.net"
              style={{ ...iconBtn }}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, iconBtnHover)}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,.06)";
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
              </svg>
            </a>

            {/* LinkedIn después */}
            <a
              href="https://www.linkedin.com/in/chiesaluca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Luca Chiesa"
              style={{ ...iconBtn, color: "#0A66C2" }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "#0A66C2";
                Object.assign(e.currentTarget.style, iconBtnHover);
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#0A66C2";
                e.currentTarget.style.background = "white";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,.06)";
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.48 2.5A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07C13.04 8.99 14.67 7.73 17.1 7.73c5.06 0 6 3.33 6 7.66V24h-5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-5V8z"/>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
