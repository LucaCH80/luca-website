import Head from "next/head";

export default function HomeEN() {
  // Palette
  const bg = "#F4F7FB";      // soft professional background
  const ink = "#111";        // main text
  const mute = "#444";       // secondary text
  const accent = "#2F67B2";  // brand blue

  // Base styles
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
    <>
      <Head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <title>Luca Chiesa | Purpose-driven Sales & Conscious Leadership</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        style={{
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          textAlign: "center",
          minHeight: "100vh",
          backgroundColor: bg,
          color: ink,
          padding: "96px 20px 64px",
          position: "relative",
        }}
      >
        {/* Header with language switcher (pills) */}
        <header
          style={{
            position: "absolute",
            top: "18px",
            right: "20px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {/* EN active */}
          <span
            style={{
              ...pillBase,
              background: ink,
              color: "#fff",
              borderColor: "transparent",
            }}
          >
            EN
          </span>

          {/* ES inactive */}
          <a
            href="/"
            aria-label="Cambiar a Español"
            style={{
              ...pillBase,
              color: accent,
              background: "#fff",
              borderColor: "#e5e7eb",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#EEF3FB";
              e.currentTarget.style.borderColor = "#D7E3F8";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "#e5e7eb";
            }}
          >
            ES
          </a>
        </header>

        {/* Hero */}
        <h1
          style={{
            fontFamily: "Poppins, Inter, sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.4px",
            fontSize: "clamp(34px, 6vw, 56px)",
            margin: "14px 0 10px",
          }}
        >
          Luca Chiesa
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2.1vw, 18px)",
            color: mute,
            fontWeight: 500,
            margin: "0 0 36px",
          }}
        >
          Sales • Leadership • DISC
        </p>

        {/* CTA */}
        <a
          href="mailto:contact@lucachiesa.net?subject=Inquiry%20from%20website"
          style={{
            display: "inline-block",
            backgroundColor: accent,
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
            boxShadow: "0 8px 20px rgba(47,103,178,0.20)",
            transition:
              "transform .18s ease, box-shadow .18s ease, background-color .18s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.backgroundColor = "#3E78C4";
            e.currentTarget.style.boxShadow =
              "0 12px 28px rgba(47,103,178,0.28)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.backgroundColor = accent;
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(47,103,178,0.20)";
          }}
        >
          Contact Luca
        </a>

        {/* Footer */}
        <footer
          style={{
            marginTop: "84px",
            color: "#5B6572",
            borderTop: "1px solid #E3E8F0",
            paddingTop: "20px",
            fontSize: "14px",
          }}
        >
          <p style={{ margin: "0 0 10px" }}>
            © {new Date().getFullYear()} Luca Chiesa
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
            {/* Email */}
            <a
              href="mailto:contact@lucachiesa.net?subject=Inquiry%20from%20website"
              aria-label="Send email to contact@lucachiesa.net"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#fff",
                color: "#222",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 2px rgba(0,0,0,.06)",
                textDecoration: "none",
                transition: "all .2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,.06)";
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chiesaluca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Luca Chiesa"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#fff",
                color: "#0A66C2",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 2px rgba(0,0,0,.06)",
                textDecoration: "none",
                transition: "all .2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "#0A66C2";
                e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.color = "#0A66C2";
                e.currentTarget.style.background = "#fff";
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
