import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Luca Chiesa — Sales · Leadership · DISC</title>
        <meta
          name="description"
          content="Formación y consultoría comercial. Ventas, liderazgo y DISC para equipos que quieren resultados medibles y clientes satisfechos."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-512.png" />
        <meta name="theme-color" content="#E9A400" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="wrap">
        {/* NAV */}
        <nav className="nav">
          <a href="/">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* HERO */}
        <section className="hero">
          <h1>Luca Chiesa</h1>
          <p className="tagline">Sales · Leadership · DISC — website starter</p>
          <div className="cta-hero">
            <a className="btn btn-primary" href="#servicios">Ver Servicios</a>
            <a
              className="btn btn-ghost"
              href="mailto:contacto@lucachiesa.net?subject=Consulta%20sobre%20formaci%C3%B3n%20y%20ventas"
            >
              Escríbeme
            </a>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <h2>Servicios</h2>
          <p className="lead">
            Programas prácticos para vender más, liderar mejor y entender a tu cliente (y a tu equipo) con DISC.
          </p>

          <div className="grid">
            <article className="card">
              <h3>Formación en Ventas</h3>
              <p>
                Metodologías claras para prospección, reuniones efectivas, manejo de objeciones y cierre.
                Enfoque práctico, aplicado a tu realidad.
              </p>
              <a className="btn btn-link" href="mailto:contacto@lucachiesa.net?subject=Inter%C3%A9s%20en%20formaci%C3%B3n%20de%20ventas">Quiero información →</a>
            </article>

            <article className="card">
              <h3>Liderazgo de Equipos</h3>
              <p>
                Herramientas de liderazgo moderno para aumentar la motivación, la autonomía y los resultados del equipo.
              </p>
              <a className="btn btn-link" href="mailto:contacto@lucachiesa.net?subject=Inter%C3%A9s%20en%20liderazgo%20de%20equipos">Cuéntame tu caso →</a>
            </article>

            <article className="card">
              <h3>Evaluaciones DISC</h3>
              <p>
                Certificación, perfiles y entrenamientos para comunicar mejor, seleccionar talento y fidelizar clientes.
              </p>
              <a className="btn btn-link" href="mailto:contacto@lucachiesa.net?subject=Inter%C3%A9s%20en%20evaluaciones%20DISC">Solicitar demo →</a>
            </article>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <h2>Contacto</h2>
          <p className="lead">
            ¿Te encaja lo que has visto? Escríbeme y te propongo una primera llamada sin coste.
          </p>

          <div className="contact-cta">
            <a
              className="btn btn-primary"
              href="mailto:contacto@lucachiesa.net?subject=Quiero%20hablar&body=Hola%20Luca%2C%20me%20gustar%C3%ADa%20hablar%20sobre..."
            >
              Escríbeme por email
            </a>
            <a
              className="btn btn-ghost"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Si usas Calendly u otra agenda, aquí pondremos el enlace.');
              }}
            >
              Agenda una llamada
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Luca Chiesa</span>
          <span className="dot">•</span>
          <a href="#contacto">Contacto</a>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --accent: #e9a400; /* Saffron */
          --text: #111;
          --muted: #6b7280;
          --bg: #ffffff;
          --card: #f8fafc;
          --border: #e5e7eb;
        }
        html, body, #__next { height: 100%; }
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          color: var(--text);
          background: var(--bg);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .wrap {
          max-width: 960px;
          margin: 0 auto;
          padding: 24px 20px 64px;
        }
        /* NAV */
        .nav {
          display: flex;
          gap: 18px;
          justify-content: flex-end;
          text-transform: uppercase;
          font-size: 13.5px;
          letter-spacing: 0.14em;
          margin: 8px 0 28px;
        }
        .nav a {
          color: var(--muted);
          text-decoration: none;
          padding: 8px 6px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav a:hover { color: var(--text); background: rgba(233, 164, 0, 0.08); }

        /* HERO */
        .hero { text-align: center; padding: 12vh 0 10vh; }
        h1 {
          margin: 0 0 12px;
          font-size: clamp(36px, 6vw, 56px);
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -0.02em;
        }
        .tagline { margin: 0; font-size: clamp(14px, 2.2vw, 18px); color: var(--muted); }
        .cta-hero { margin-top: 24px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* SECCIONES */
        .section { padding: 56px 0 24px; border-top: 1px solid var(--border); }
        .section:first-of-type { border-top: 0; }
        h2 {
          margin: 0 0 14px;
          font-size: clamp(22px, 4vw, 28px);
          letter-spacing: -0.01em;
        }
        .lead { margin: 0 0 22px; color: var(--muted); }

        /* GRID + CARDS */
        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }
        .card {
          grid-column: span 12;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 20px 18px;
        }
        .card h3 { margin: 0 0 10px; font-size: 18px; }
        .card p { margin: 0 0 12px; color: var(--text); }
        .btn-link {
          color: var(--accent);
          text-decoration: none;
          font-weight: 600;
        }
        .btn-link:hover { text-decoration: underline; }

        /* BOTONES */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          border: 1px solid transparent;
          transition: transform .05s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
        }
        .btn:active { transform: translateY(1px); }
        .btn-primary {
          background: var(--accent);
          color: #111;
          border-color: var(--accent);
          box-shadow: 0 6px 18px rgba(233, 164, 0, 0.35);
        }
        .btn-primary:hover { box-shadow: 0 8px 22px rgba(233, 164, 0, 0.42); }
        .btn-ghost {
          background: transparent;
          color: var(--text);
          border-color: var(--border);
        }
        .btn-ghost:hover { background: rgba(233, 164, 0, 0.08); }

        .contact-cta { display: flex; gap: 12px; flex-wrap: wrap; }

        /* RESPONSIVE */
        @media (min-width: 720px) {
          .card { grid-column: span 4; }
        }

        /* FOOTER */
        .footer { border-top: 1px solid var(--border); background: #fff; }
        .footer-inner { padding: 18px 20px; display: flex; gap: 10px; align-items: center; color: var(--muted); }
        .footer a { color: inherit; text-decoration: none; }
        .footer a:hover { text-decoration: underline; }
        .dot { opacity: .6; }
      `}</style>
    </>
  );
}
