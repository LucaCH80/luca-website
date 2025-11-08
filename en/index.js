import Head from "next/head";

export default function HomeEN() {
  const accent = "#2F67B2";
  const bg = "#f4f7fb";

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
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />

        {/* SEO principal (EN) */}
        <title>Luca Chiesa | Purpose-driven Sales & Conscious Leadership</title>
        <meta
          name="description"
          content="Over 15 years helping sales teams grow, lead and connect through purpose and emotion."
        />

        {/* Alternates (multi-idioma) */}
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="x-default" href="https://lucachiesa.net/" />

        {/* Open Graph / Twitter */}
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Luca Chiesa | Purpose-driven Sales & Conscious Leadership"
        />
        <meta
          property="og:description"
          content="Lead with purpose. Sell with meaning."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lucachiesa.net/en" />
        <meta
          property="og:image"
          content="https://lucachiesa.net/brand/og-preview.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Luca Chiesa | Purpose-driven Sales & Conscious Leadership"
        />
        <meta
          name="twitter:description"
          content="Lead with purpose. Sell with meaning."
        />
        <meta
          name="twitter:image"
          content="https://lucachiesa.net/brand/og-preview.jpg"
        />

        {/* Favicon & theme color */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-512.png" />
        <meta name="theme-color" content="#2F67B2" />
      </Head>

      <div
        style={{
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
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
          href="mailto:contact@lucachiesa.net?subject=Inquiry%20from%20website"
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
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#3E78C4")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = accent)
          }
        >
          Contact Luca
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
          <p style={{ marginBottom: 14 }}>
            © {new Date().getFullYear()} Luca Chiesa
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            {/* Email */}
            <a
              href="mailto:contact@lucachiesa.net?subject=Inquiry%20from%20website"
              aria-label="Send email to contact@lucachiesa.net"
              style={{ ...iconBtn }}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, iconBtnHover)
              }
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(0,0,0,.06)";
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chiesaluca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Luca Chiesa on LinkedIn"
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
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(0,0,0,.06)";
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.48 2.5A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07C13.04 8.99 14.67 7.73 17.1 7.73c5.06 0 6 3.33 6 7.66V24h-5v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V24h-5V8z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
