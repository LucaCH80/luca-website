import Head from "next/head";

export default function HomeES() {
  const email = "contact@lucachiesa.net";
  const linkedin = "https://www.linkedin.com/in/lucachiesa/";

  return (
    <>
      <Head>
        <title>Luca Chiesa — Consultor en Ventas y Comunicación</title>
        <meta
          name="description"
          content="Ventas, comunicación y DISC para equipos comerciales. Formación, acompañamiento y certificaciones DISC."
        />
        <meta httpEquiv="content-language" content="es" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="x-default" href="https://lucachiesa.net/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content="Luca Chiesa — Ventas, Comunicación, DISC" />
        <meta
          property="og:description"
          content="Formación en ventas y comunicación, motivación de equipos, liderazgo y DISC. Certificaciones y aplicación práctica."
        />
        <meta property="og:url" content="https://lucachiesa.net/" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="wrap">
        <nav className="lang" aria-label="Selector de idioma">
          <a aria-current="page" href="/">ES</a>
          <span aria-hidden="true">·</span>
          <a href="/en">EN</a>
        </nav>

        {/* HERO */}
        <section className="hero">
          <h1>Luca Chiesa</h1>
          <p className="kicker">Sales • Leadership • DISC</p>

          <a className="cta" href={`mailto:${email}?subject=Consulta desde la web`}>
            Contacta con Luca
          </a>
        </section>

        {/* SOBRE MÍ */}
        <section className="section card">
          <h2>Sobre mí</h2>
          <p>
            Ayudo a equipos comerciales y organizaciones a vender con propósito y
            comunicar mejor. Trabajo con formación muy práctica, acompañamiento
            en campo y <strong>DISC</strong> para transformar comportamientos en
            resultados sostenibles.
          </p>
        </section>

        {/* SERVICIOS */}
        <section className="section">
          <h2>Servicios</h2>

          <div className="grid">
            <article className="svc">
              <h3>Formación en Ventas</h3>
              <p>
                Prospección, discovery, propuestas, cierre y manejo de objeciones.
                Talleres con práctica real para llevar a acción inmediata.
              </p>
            </article>

            <article className="svc">
              <h3>Comunicación con DISC</h3>
              <p>
                Aplicación de DISC en ventas, equipos y atención al cliente.
                Informes, sesiones de feedback y planes de mejora.
              </p>
            </article>

            <article className="svc">
              <h3>Motivación de Equipos</h3>
              <p>
                Hábitos, rituales comerciales, foco y seguimiento. Sistemas simples
                que mantienen la energía y el compromiso.
              </p>
            </article>

            <article className="svc">
              <h3>Liderazgo y Autoliderazgo</h3>
              <p>
                Prioridades, conversaciones difíciles, gestión de la energía
                y del estrés. Herramientas prácticas para líderes y vendedores.
              </p>
            </article>

            <article className="svc">
              <h3>Acompañamiento Comercial</h3>
              <p>
                Roleplays, shadowing y acuerdos de mejora. Feedback accionable
                para acelerar resultados.
              </p>
            </article>

            <article className="svc">
              <h3>Certificación DISC</h3>
              <p>
                Certificaciones abiertas y programas internos para empresas
                (RR.HH. y managers) con uso profesional de la herramienta.
              </p>
            </article>
          </div>

          <div className="section-cta">
            <a className="cta ghost" href={`mailto:${email}?subject=Quiero información de servicios`}>
              Hablemos
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="foot">
          <p>© {new Date().getFullYear()} Luca Chiesa</p>

          <div className="icons">
            <a className="icon" href={`mailto:${email}?subject=Consulta desde la web`} aria-label="Escribir un email">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="M3 7l9 6 9-6"></path>
              </svg>
            </a>

            <a className="icon" href={linkedin} target="_blank" rel="noreferrer" aria-label="Ir a LinkedIn">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M20.45 20.45h-3.56V14.9c0-1.32-.02-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.91v5.65H9.39V9.75h3.41v1.47h.05c.47-.9 1.61-1.83 3.31-1.83 3.54 0 4.19 2.33 4.19 5.36v5.7zM6.34 8.29a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM8.12 20.45H4.56V9.75h3.56v10.7z" />
              </svg>
            </a>
          </div>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg: #eef2f7;
          --text: #0f172a;
          --muted: #475569;
          --accent: #2563eb;
          --accent-700: #1d4ed8;
          --ring: rgba(37, 99, 235, 0.35);
          --card: #ffffff;
          --card-border: rgba(15, 23, 42, .06);
          --shadow: 0 8px 18px rgba(37, 99, 235, .18);
          --shadow-hover: 0 10px 22px rgba(37, 99, 235, .22);
        }

        html, body {
          background: var(--bg);
          margin: 0;
          color: var(--text);
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .wrap {
          min-height: 100svh;
          display: grid;
          grid-template-rows: auto 1fr auto;
          max-width: 980px;
          margin: 0 auto;
          padding: clamp(12px, 3.5vw, 28px);
        }

        .lang {
          justify-self: end;
          display: flex;
          align-items: center;
          gap: .55rem;
          color: var(--muted);
          font-size: .95rem;
        }
        .lang a {
          color: var(--muted);
          text-decoration: none;
          padding: .15rem .3rem;
          border-radius: 6px;
        }
        .lang a[aria-current="page"] {
          color: var(--text);
          font-weight: 600;
          background: rgba(255,255,255,.6);
          box-shadow: 0 1px 0 rgba(15,23,42,.06);
        }

        .hero {
          display: grid;
          place-items: center;
          text-align: center;
          padding-block: clamp(18px, 6.5vw, 56px);
        }

        h1 {
          margin: 0 0 .7rem 0;
          font-weight: 800;
          letter-spacing: -0.02em;
          font-size: clamp(2.25rem, 5.6vw, 4rem);
        }

        h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          letter-spacing: -.01em;
          margin: 0 0 .5rem 0;
        }

        h3 {
          font-size: clamp(1.05rem, 2.1vw, 1.15rem);
          margin: 0 0 .25rem 0;
        }

        .kicker {
          margin: 0 0 clamp(16px, 3.2vw, 28px) 0;
          color: var(--muted);
          font-size: clamp(1.02rem, 2.3vw, 1.22rem);
        }

        .section {
          margin-top: clamp(26px, 6.5vw, 64px);
        }

        .card {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: clamp(16px, 3.2vw, 24px);
          box-shadow: 0 8px 22px rgba(0,0,0,.04);
        }

        .grid {
          display: grid;
          gap: clamp(14px, 2.4vw, 18px);
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          margin-top: clamp(12px, 2.6vw, 18px);
        }

        .svc {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 16px 16px 18px;
          box-shadow: 0 4px 14px rgba(0,0,0,.04);
        }

        .section-cta { text-align: center; margin-top: 16px; }

        .cta {
          display: inline-block;
          background: var(--accent);
          color: #fff;
          padding: .9rem 1.35rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: .01em;
          box-shadow: var(--shadow);
          transform: translateZ(0);
          transition: transform .08s ease, background .15s ease, box-shadow .2s ease;
          will-change: transform;
          animation: floaty 4.5s ease-in-out infinite;
        }
        .cta:hover { background: var(--accent-700); box-shadow: var(--shadow-hover); }
        .cta:active { transform: translateY(1px); }
        .cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 6px var(--ring), var(--shadow);
        }

        .cta.ghost {
          background: transparent;
          color: var(--accent);
          border: 2px solid var(--accent);
          box-shadow: none;
          padding: .78rem 1.2rem;
        }
        .cta.ghost:hover { background: rgba(37, 99, 235, .06); }

        .foot {
          border-top: 1px solid rgba(15, 23, 42, .06);
          margin-top: clamp(22px, 6vw, 64px);
          padding-top: clamp(14px, 4vw, 26px);
          display: grid;
          place-items: center;
          gap: 12px;
          color: var(--muted);
          text-align: center;
        }

        .icons { display: flex; gap: 14px; }

        .icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: var(--card);
          color: var(--text);
          box-shadow: 0 2px 8px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.6) inset;
          transition: transform .12s ease, box-shadow .2s ease, background .2s ease;
        }
        .icon:hover {
          transform: translateY(-2px) scale(1.015);
          box-shadow: 0 8px 18px rgba(0,0,0,.12);
          background: #f8fafc;
        }
        .icon:focus-visible {
          outline: none;
          box-shadow: 0 0 0 6px var(--ring), 0 2px 8px rgba(0,0,0,.06);
        }

        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-2px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta, .icon { transition: none !important; animation: none !important; }
        }
      `}</style>
    </>
  );
}
