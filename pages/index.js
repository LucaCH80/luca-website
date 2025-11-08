import Head from "next/head";

export default function HomeES() {
  const bgSoft = "linear-gradient(180deg, #F4F7FB 0%, #F7FAFF 60%, #F4F7FB 100%)";
  const ink = "#111";
  const mute = "#4A5568";
  const accent = "#2F67B2";
  const line = "#E6ECF4";

  const pillBase = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 32,
    padding: "6px 12px",
    borderRadius: 999,
    fontSize: "0.9rem",
    fontWeight: 600,
    textDecoration: "none",
    transition:
      "background-color .18s ease, box-shadow .18s ease, border-color .18s ease, color .18s ease",
    border: "1px solid transparent",
    outline: "none",
    cursor: "pointer",
  };

  const container = {
    maxWidth: 880,
    margin: "0 auto",
    textAlign: "center",
    padding: "0 20px",
  };

  const h2 = {
    fontFamily: "Poppins, Inter, sans-serif",
    fontWeight: 700,
    letterSpacing: "0.5px",
    fontSize: "clamp(18px, 1.8vw, 20px)",
    textTransform: "uppercase",
    color: "#20262E",
    margin: "56px 0 12px",
  };

  const lead = {
    color: mute,
    fontSize: "clamp(15px, 2vw, 18px)",
    lineHeight: 1.8,
    margin: "0 auto 8px",
    maxWidth: 760,
  };

  const sub = {
    color: "#5B6572",
    fontSize: "clamp(14px, 1.8vw, 16px)",
    lineHeight: 1.75,
    margin: "0 auto 8px",
    maxWidth: 760,
  };

  const divider = {
    borderTop: `1px solid ${line}`,
    margin: "32px auto",
    maxWidth: 760,
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet"/>
        <title>Luca Chiesa | Ventas con propósito y liderazgo consciente</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <a
        href="#main"
        style={{
          position: "absolute",
          left: -9999,
          top: -9999,
          background: "#111",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: 8,
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "16px";
          e.currentTarget.style.top = "16px";
          e.currentTarget.style.zIndex = 50;
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
          e.currentTarget.style.top = "-9999px";
        }}
      >
        Saltar al contenido
      </a>

      <div
        style={{
          fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          minHeight: "100vh",
          background: bgSoft,
          color: ink,
          padding: "96px 0 64px",
          position: "relative",
        }}
      >
        <nav
          role="navigation"
          aria-label="Selector de idioma"
          style={{
            position: "absolute",
            top: 18,
            right: 20,
            display: "flex",
            gap: 8,
            alignItems: "center",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <span aria-current="page" style={{ ...pillBase, background: ink, color: "#fff" }}>ES</span>
          <a
            href="/en"
            aria-label="Cambiar a inglés"
            style={{ ...pillBase, color: accent, background: "#fff", borderColor: "#e5e7eb", boxShadow: "0 1px 1px rgba(0,0,0,.03)" }}
            onMouseOver={(e) => { e.currentTarget.style.background = "#EEF3FB"; e.currentTarget.style.borderColor = "#D7E3F8"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
          >EN</a>
        </nav>

        <main id="main" style={container}>
          <h1 style={{ fontFamily: "Poppins, Inter, sans-serif", fontWeight: 700, letterSpacing: "-0.4px", fontSize: "clamp(34px, 6vw, 56px)", margin: "6px 0 12px", color: ink }}>
            Luca Chiesa
          </h1>
          <p style={{ fontSize: "clamp(15px, 2.05vw, 18px)", color: mute, fontWeight: 500, margin: "0 0 36px" }}>
            Sales • Leadership • DISC
          </p>
          <a
            href="mailto:contact@lucachiesa.net?subject=Consulta%20desde%20la%20web"
            style={{ display: "inline-block", backgroundColor: accent, color: "#fff", padding: "14px 28px", borderRadius: 12, textDecoration: "none", fontWeight: 600, fontSize: 16, boxShadow: "0 10px 24px rgba(47,103,178,0.22)" }}
          >
            Hablemos
          </a>

          <h2 style={h2}>Sobre mí</h2>
          <p style={lead}>
            Impulso a equipos de ventas a conectar mejor, comunicar con propósito y crear relaciones comerciales que inspiran confianza.
          </p>
          <p style={sub}>
            Formador en ventas, motivación y comunicación con enfoque DISC.
          </p>
          <p style={{ ...sub, marginBottom: 0 }}>
            Apasionado del crecimiento personal y la excelencia profesional.
          </p>

          <div style={divider} />

          <h2 style={h2}>Servicios</h2>

          <h3 style={{ margin: "18px 0 8px", fontWeight: 700, fontSize: 18, color: "#1F2937" }}>🎯 Formación en Ventas</h3>
          <p style={sub}>
            Estrategias prácticas, método y actitud. Desde la prospección hasta el cierre, con herramientas para generar confianza y resultados sostenibles.
          </p>
          <p style={sub}>
            Siempre con el modelo DISC como base de autoconocimiento y comunicación.
          </p>

          <h3 style={{ margin: "22px 0 8px", fontWeight: 700, fontSize: 18, color: "#1F2937" }}>💬 Comunicación & Motivación de Equipos</h3>
          <p style={sub}>
            Comunicar mejor para liderar mejor. Trabajo la escucha, el feedback y la energía de equipo con metodologías participativas y el modelo DISC como lenguaje común.
          </p>
          <p style={sub}>
            Sesiones que combinan reflexión, práctica y acción.
          </p>

          <h3 style={{ margin: "22px 0 8px", fontWeight: 700, fontSize: 18, color: "#1F2937" }}>🧭 Liderazgo y Autoliderazgo Consciente</h3>
          <p style={sub}>
            Desarrollo de competencias para liderar personas —y a uno mismo— con claridad, empatía y propósito.
          </p>
          <p style={sub}>
            Programas que integran motivación, gestión emocional y comunicación efectiva.
          </p>

          <h3 style={{ margin: "22px 0 8px", fontWeight: 700, fontSize: 18, color: "#1F2937" }}>🔷 DISC: Formación y Certificación</h3>
          <p style={sub}>
            Formo y certifico a profesionales y empresas en el uso del modelo DISC. Certificaciones abiertas e in-company para RR.HH., ventas o liderazgo.
          </p>
          <p style={sub}>
            También distribuyo informes DISC para evaluación y desarrollo de equipos.
          </p>
        </main>

        <footer style={{ marginTop: 84, borderTop: `1px solid ${line}`, paddingTop: 20 }}>
          <div style={container}>
            <p style={{ margin: "0 0 12px", color: "#5B6572", fontSize: 14 }}>
              © {new Date().getFullYear()} Luca Chiesa
            </p>
            <p style={{ margin: "0 auto 12px", color: "#6B7280", fontSize: 13, lineHeight: 1.6, maxWidth: 760 }}>
              Sitio personal sin formularios ni registro. No se recopilan datos personales ni se utilizan cookies de terceros con fines de seguimiento.  
              Escríbeme a{" "}
              <a href="mailto:contact@lucachiesa.net" style={{ color: accent, textDecoration: "none", fontWeight: 600 }}>contact@lucachiesa.net</a>.
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 10 }}>
              <a href="mailto:contact@lucachiesa.net" style={{ color: accent, textDecoration: "none" }}>Email</a>
              <a href="https://www.linkedin.com/in/chiesaluca/" target="_blank" rel="noopener noreferrer" style={{ color: accent, textDecoration: "none" }}>LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
