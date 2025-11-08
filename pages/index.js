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
          content="Formación y acompañamiento comercial. Ventas, comunicación, motivación y liderazgo."
        />
        <link rel="canonical" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content="Luca Chiesa — Ventas • Liderazgo • DISC" />
        <meta
          property="og:description"
          content="Formación y acompañamiento comercial. Ventas, comunicación, motivación y liderazgo."
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
        <p className="kicker">Ventas • Liderazgo • DISC</p>
        <p className="sub">
          Más de 15 años ayudando a equipos comerciales a crecer, comunicar mejor
          y vender con propósito.
        </p>

        <a
          className="cta"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
          Hablemos
        </a>
      </section>

      {/* SOBRE MÍ */}
      <section className="wrap section centered">
        <h2 className="h2">Sobre mí</h2>
        <p className="lead">
          Acompaño a equipos y profesionales a vender con sentido, comunicar con claridad
          y construir relaciones que duren en el tiempo. Trabajo desde la experiencia,
          con una mirada práctica y humana, enfocada en generar resultados reales y sostenibles.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="wrap section">
        <h2 className="h2">Servicios</h2>

        <div className="grid">
          <article className="card">
            <div className="badge">Ventas</div>
            <h3 className="h3">Formación en Ventas</h3>
            <p>
              Prospección, apertura, preguntas, propuesta de valor, objeciones y cierre.
              Talleres prácticos para vender con método y confianza.
            </p>
          </article>

          <article className="card">
            <div className="badge">Comunicación</div>
            <h3 className="h3">Comunicación</h3>
            <p>
              Reuniones efectivas, feedback y conexión real. Mejora la relación con
              clientes y equipos comprendiendo distintos estilos de comunicación.
            </p>
          </article>

          <article className="card">
            <div className="badge">Equipos</div>
            <h3 className="h3">Motivación de Equipos</h3>
            <p>
              Rituals, foco y hábitos. Energía sostenida para alcanzar objetivos sin
              perder el cuidado del equipo.
            </p>
          </article>

          <article className="card">
            <div className="badge">Liderazgo</div>
            <h3 className="h3">Liderazgo y Autoliderazgo</h3>
            <p>
              Conversaciones clave, priorizar, delegar y dar dirección. Desarrollo del
              criterio y la coherencia del líder.
            </p>
          </article>

          <article className="card">
            <div className="badge">DISC</div>
            <h3 className="h3">Certificación DISC</h3>
            <p>
              Certificaciones abiertas y programas cerrados para RR. HH. y mandos.
              Implementación real del modelo dentro de la organización.
            </p>
          </article>

          <article className="card">
            <div className="badge">On-the-job</div>
            <h3 className="h3">Acompañamiento Comercial</h3>
            <p>
              Sesiones 1:1 y on-the-job. Preparación de visitas, roleplays y seguimiento
              para acelerar resultados y aprendizaje.
            </p>
          </article>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="wrap section ctaBlock centered">
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
            title="Email"
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
            title="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05C20.6 8.45 23 10.2 23 14.1V23h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 4v7.6H8V8.5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </footer>

      {/* ESTILOS CON COLOR */}
      <style jsx>{`
        :root{
          --bg: #f6f7fb;          /* fondo suave */
          --ink: #0f172a;         /* texto principal */
          --muted: #475569;
          --muted-2: #64748b;
          --brand: #2563eb;       /* azul profesional */
          --brand-700: #1e40af;
          --paper: #ffffff;
          --radius: 14px;
          --wrap: 1060px;
          --shadow: 0 10px 24px rgba(16,24,40,.06);
          --shadow-2: 0 14px 28px rgba(30,64,175,.20);
          --ring: 0 0 0 3px rgba(37,99,235,.18);
        }

        :global(html, body) {
          padding: 0;
          margin: 0;
          background: var(--bg);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI,
            Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .topbar {
          display: flex;
          justify-content: flex-end;
          max-width: var(--wrap);
          margin: 0 auto;
          padding: 18px 20px 0;
        }
        .lang {
          font-size: 14.5px;
          color: var(--muted);
          display:flex; align-items:center; gap:.35rem;
        }
        .lang a { color: var(--muted-2); text-decoration: none; padding: 6px 9px; border-radius: 8px; }
        .lang a:hover { background:#eef2ff; color:#1e2a8a; }
        .lang .active { background:#e9efff; color:#1e40af; font-weight:600; padding:6px 9px; border-radius:8px; }
        .lang .dot { opacity:.45; margin:0 .2rem; }

        .wrap {
          max-width: var(--wrap);
          margin: 0 auto;
          padding: clamp(36px, 6vw, 56px) 20px 0;
        }

        .hero { 
          text-align: center; 
          padding-top: 8px;
        }
        h1 {
          font-size: clamp(38px, 5.2vw, 64px);
          line-height: 1.06;
          margin: 0 0 .5rem 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .kicker {
          margin: 0;
          font-size: clamp(16.5px, 2.1vw, 22px);
          color: var(--muted);
        }
        .sub {
          margin: .6rem auto 0;
          font-size: clamp(15.5px, 1.9vw, 18px);
          color: var(--muted-2);
          max-width: 820px;
          line-height: 1.55;
        }

        .cta {
          display: inline-block;
          margin-top: 28px;
          background: var(--brand);
          color: #fff;
          text-decoration: none;
          padding: 13px 26px;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: var(--shadow);
          transition: transform .12s ease, box-shadow .2s ease, background .15s ease;
        }
        .cta:hover {
          background: var(--brand-700);
          transform: translateY(-1px);
          box-shadow: var(--shadow-2);
        }

        .section { margin-top: clamp(56px, 7vw, 78px); }
        .section.centered { text-align: center; }

        .h2 {
          font-size: clamp(24px, 3.1vw, 32px);
          margin: 0 0 .65rem 0;
          letter-spacing: -.01em;
        }
        .lead {
          font-size: clamp(16px, 2vw, 18.2px);
          color: var(--muted-2);
          line-height: 1.66;
          max-width: 780px;
          margin: 0 auto;
        }

        .grid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 18px;
        }
        .card {
          grid-column: span 12;
          background: var(--paper);
          border-radius: var(--radius);
          padding: 18px 18px 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,.06);
          position: relative;
        }
        .badge{
          position:absolute;
          top: -10px;
          left: 16px;
          background: #e9efff;
          color: #1e40af;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 999px;
          box-shadow: var(--shadow);
        }
        .h3 { font-size: 18px; margin: 8px 0 6px; letter-spacing: -.005em; }
        .card p { margin: 0; color: var(--muted-2); line-height: 1.6; }

        @media (min-width: 720px) { .card { grid-column: span 6; } }
        @media (min-width: 1024px) { .card { grid-column: span 4; } }

        .ctaBlock { text-align: center; padding-bottom: 8px; }

        .footer {
          max-width: var(--wrap);
          margin: clamp(64px, 8vw, 96px) auto 48px;
          padding: 0 20px;
          text-align: center;
          color: var(--muted);
        }
        .icons {
          display: flex; gap: 14px; align-items: center; justify-content: center; margin-top: 12px;
        }
        .icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 46px; height: 46px; border-radius: 12px;
          background: var(--paper); color: #111827;
          box-shadow: 0 4px 14px rgba(0,0,0,.08);
          transition: transform .12s ease, box-shadow .2s ease, outline .1s ease;
        }
        .icon:hover { transform: translateY(-1px); box-shadow: 0 8px 18px rgba(0,0,0,.12); outline: var(--ring); }
      `}</style>
    </>
  );
}
