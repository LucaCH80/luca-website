import Head from "next/head";

export default function HomeES() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Consulta desde la web");
  const body = encodeURIComponent("Hola Luca,");

  return (
    <>
      <Head>
        <title>Luca Chiesa — Ventas • Liderazgo • DISC</title>
        <meta
          name="description"
          content="Formación y acompañamiento comercial. Ventas, comunicación (DISC), motivación y liderazgo."
        />
        <link rel="canonical" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content="Luca Chiesa — Ventas • Liderazgo • DISC" />
        <meta
          property="og:description"
          content="Formación y acompañamiento comercial. Ventas, comunicación (DISC), motivación y liderazgo."
        />
        <meta property="og:url" content="https://lucachiesa.net/" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Topbar con selector de idioma */}
      <header className="topbar">
        <nav className="lang">
          <span className="active">ES</span>
          <span className="dot">•</span>
          <a href="/en" aria-label="English version">EN</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="wrap hero">
        <h1>Luca Chiesa</h1>
        <p className="tag">Ventas • Liderazgo • DISC</p>

        <a
          className="cta"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
          Contacta con Luca
        </a>
      </section>

      {/* SOBRE MÍ */}
      <section className="wrap section">
        <h2 className="h2">Sobre mí</h2>
        <p className="lead">
          Soy formador y acompañante comercial. Ayudo a equipos y profesionales
          a vender con propósito, comunicar con claridad y construir relaciones duraderas.
          Trabajo con metodología práctica, casos reales y el modelo DISC como base
          para entender personas, negociar mejor y lograr resultados sostenibles.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="wrap section">
        <h2 className="h2">Servicios</h2>

        <div className="grid">
          <article className="card">
            <h3 className="h3">Formación en Ventas (con DISC)</h3>
            <p>
              Prospección, apertura, preguntas, propuesta de valor, objeciones y cierre.
              Talleres prácticos para vender con método y confianza.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Comunicación &amp; DISC</h3>
            <p>
              Perfiles DISC, reuniones efectivas y feedback. Mejora la relación con clientes
              y dentro del equipo comprendiendo estilos de conducta.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Motivación de Equipos</h3>
            <p>
              Dinámicas, foco y hábitos. Energía sostenida para alcanzar objetivos comerciales
              sin perder el cuidado del equipo.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Liderazgo y Autoliderazgo</h3>
            <p>
              Liderar conversaciones, priorizar, delegar y dar dirección.
              Desarrollo del criterio y la coherencia del líder.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Certificación DISC</h3>
            <p>
              Certificaciones abiertas y programas cerrados para RR. HH. y mandos.
              Implementación real del modelo dentro de la organización.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Acompañamiento Comercial</h3>
            <p>
              Sesiones 1:1 y on-the-job. Preparación de visitas, roleplays y seguimiento
              para acelerar resultados y aprendizaje.
            </p>
          </article>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="wrap section ctaBlock">
        <h2 className="h2">Hablemos</h2>
        <p className="lead">
          Cuéntame en qué punto estás y diseñamos juntos el siguiente paso.
        </p>

        <a
          className="cta"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
          Escribe a {email}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
        <div className="icons">
          <a
            className="icon"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            aria-label="Email"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </a>

          <a
            className="icon"
            href="https://www.linkedin.com/in/lucachiesa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05C20.6 8.45 23 10.2 23 14.1V23h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 4v7.6H8V8.5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </footer>

      {/* ESTILOS */}
      <style jsx>{`
        :global(html, body) {
          padding: 0;
          margin: 0;
          background: #f6f7fb;
          color: #111;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI,
            Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }

        .topbar {
          display: flex;
          justify-content: flex-end;
          max-width: 1100px;
          margin: 0 auto;
          padding: 18px 20px 0;
        }

        .lang {
          font-size: 14px;
          color: #1f2937;
        }
        .lang a {
          color: #1f2937;
          text-decoration: none;
          opacity: 0.8;
        }
        .lang a:hover { opacity: 1; }
        .lang .active {
          background: #e9efff;
          border-radius: 10px;
          padding: 6px 9px;
          color: #1e40af;
          font-weight: 600;
        }
        .lang .dot { margin: 0 8px; opacity: 0.35; }

        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 44px 20px 0;
        }
        .hero { text-align: center; padding-top: 10px; }

        h1 {
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1.08;
          margin: 18px 0 10px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .tag {
          margin: 0;
          font-size: clamp(16px, 2.2vw, 22px);
          color: #374151;
          text-align: center;
        }

        .cta {
          display: inline-block;
          margin-top: 28px;
          background: #2563eb;
          color: white;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: 0 10px 22px rgba(37, 99, 235, 0.22);
          transition: transform 0.12s ease, box-shadow 0.2s ease, background 0.15s ease;
        }
        .cta:hover {
          background: #1e40af;
          transform: translateY(-1px);
          box-shadow: 0 14px 26px rgba(30, 64, 175, 0.28);
        }

        .section { margin-top: 72px; }
        .h2 {
          font-size: clamp(24px, 3.2vw, 32px);
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .h3 {
          font-size: 18px;
          margin: 0 0 6px;
          letter-spacing: -0.01em;
        }
        .lead {
          font-size: clamp(16px, 2vw, 18px);
          color: #374151;
          line-height: 1.6;
          max-width: 820px;
          margin: 0;
        }

        .grid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }
        .card {
          grid-column: span 12;
          background: #ffffff;
          border-radius: 14px;
          padding: 18px 18px 16px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
        }
        .card p { margin: 0; color: #4b5563; line-height: 1.55; }

        /* 2 columnas en tablet, 3 en desktop */
        @media (min-width: 720px) { .card { grid-column: span 6; } }
        @media (min-width: 1024px) { .card { grid-column: span 4; } }

        .ctaBlock {
          text-align: center;
          padding-bottom: 8px;
        }

        .footer {
          max-width: 1100px;
          margin: 84px auto 46px;
          padding: 0 20px;
          text-align: center;
          color: #4b5563;
        }
        .icons {
          display: flex;
          gap: 14px;
          align-items: center;
          justify-content: center;
          margin-top: 14px;
        }
        .icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: white;
          color: #111827;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          transition: transform 0.12s ease, box-shadow 0.2s ease;
        }
        .icon:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </>
  );
}
