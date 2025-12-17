import Head from "next/head";

export default function LinkedInLanding() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Contacto desde LinkedIn");
  const body = encodeURIComponent("Hola Luca,");

  return (
    <>
      <Head>
        <title>Conversaciones sobre ventas | Luca Chiesa</title>
        <meta
          name="description"
          content="Formación y acompañamiento comercial. Conversaciones sobre ventas con equipos comerciales."
        />
        <link rel="canonical" href="https://lucachiesa.net/linkedin" />
      </Head>

      {/* TOPBAR */}
      <header className="topbar">
        <div className="wrap topbarInner">
          <div className="brand">Luca Chiesa</div>
          <div className="meta">LinkedIn landing</div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="heroCard">
            <h1>Conversaciones sobre ventas.</h1>

            <p className="sub">
              Con equipos comerciales, compartiendo <strong>formas de trabajar</strong> y
              experiencias del día a día.
            </p>

            <div className="chips">
              <span className="chip">Formación</span>
              <span className="chip">Acompañamiento</span>
              <span className="chip">B2B</span>
              <span className="chip">B2C</span>
            </div>

            <div className="ctaRow">
              <a
                className="btn primary"
                href={`mailto:${email}?subject=${subject}&body=${body}`}
              >
                Hablemos de cómo impulsar las ventas
              </a>
              <a className="btn ghost" href="#como">
                Ver cómo trabajo
              </a>
            </div>

            <p className="micro">
              Respuesta rápida y directa. Sin formularios.
            </p>
          </div>
        </div>
      </section>

      {/* ANCLA */}
      <section className="section">
        <div className="wrap">
          <div className="anchorCard">
            <p className="anchorLine">No va de corregir.</p>
            <p className="anchorLine">No va de empezar de cero.</p>
            <p className="anchorLine">No va de aplicar recetas.</p>
            <div className="divider" />
            <p className="anchorStrong">
              Va de pensar juntos cómo se está vendiendo hoy y dar continuidad a lo que ya
              funciona.
            </p>
          </div>
        </div>
      </section>

      {/* GRID SECCIONES */}
      <section className="section">
        <div className="wrap">
          <div className="grid2">
            <article className="card">
              <h2>Para quién tiene sentido</h2>
              <ul className="list">
                <li>Dirección comercial o general</li>
                <li>Responsables de formación</li>
                <li>Equipos que valoran contrastar enfoques</li>
                <li>Organizaciones que buscan coherencia y continuidad</li>
              </ul>
            </article>

            <article id="como" className="card">
              <h2>Cómo trabajo</h2>
              <ul className="list">
                <li>Formación práctica en ventas</li>
                <li>Acompañamiento a vendedores</li>
                <li>Trabajo sobre conversaciones reales</li>
                <li>Seguimiento para consolidar hábitos</li>
              </ul>

              <p className="note">
                Sin discursos vacíos. <br />
                Sin fórmulas universales.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid2">
            <article className="card">
              <h2>Focos habituales de trabajo</h2>
              <ul className="list">
                <li>Venta consultiva en entornos B2B</li>
                <li>Venta horizontal y desarrollo de clientes</li>
                <li>Gestión de objeciones habituales</li>
                <li>Seguimiento comercial y cierre</li>
              </ul>

              <p className="note">
                Cada equipo es distinto. <br />
                El enfoque se define caso a caso.
              </p>
            </article>

            <article className="card">
              <h2>Cuándo no tiene sentido</h2>
              <p className="p">
                No tiene sentido si se busca una solución rápida o sin implicación del
                equipo.
              </p>
              <p className="p">
                Sí lo tiene cuando hay interés en trabajar con continuidad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="wrap">
          <div className="ctaCard">
            <h2>Hablemos de cómo impulsar las ventas</h2>
            <p className="sub small">
              Si te apetece poner en común cómo se está vendiendo hoy, lo analizamos juntos
              con calma.
            </p>

            <a
              className="btn primary"
              href={`mailto:${email}?subject=${subject}&body=${body}`}
            >
              Escribir a {email}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footerInner">
          <span>© 2025 Luca Chiesa</span>
          <a
            className="footerLink"
            href="https://www.linkedin.com/in/lucachiesa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --bg: #f6f7fb;
          --paper: #ffffff;
          --ink: #0f172a;
          --muted: #475569;
          --muted2: #64748b;
          --brand: #2563eb;
          --brand700: #1e40af;
          --shadow: 0 10px 24px rgba(16, 24, 40, 0.08);
          --shadow2: 0 16px 34px rgba(30, 64, 175, 0.18);
          --radius: 18px;
          --wrap: 980px;
          --ring: 0 0 0 3px rgba(37, 99, 235, 0.18);
        }

        :global(html, body) {
          margin: 0;
          padding: 0;
          background: var(--bg);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI,
            Roboto, Helvetica, Arial;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .wrap {
          max-width: var(--wrap);
          margin: 0 auto;
          padding: 0 20px;
        }

        .topbar {
          position: sticky;
          top: 0;
          background: rgba(246, 247, 251, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          z-index: 10;
        }
        .topbarInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 54px;
        }
        .brand {
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .meta {
          color: var(--muted2);
          font-size: 13px;
        }

        .hero {
          padding: 26px 0 6px;
        }
        .heroCard {
          background: linear-gradient(180deg, #ffffff, #fbfcff);
          border-radius: 28px;
          padding: clamp(22px, 4vw, 38px);
          box-shadow: var(--shadow);
          text-align: center;
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        h1 {
          margin: 0;
          font-size: clamp(32px, 4.2vw, 52px);
          line-height: 1.08;
          letter-spacing: -0.02em;
        }

        .sub {
          margin: 14px auto 0;
          max-width: 820px;
          color: var(--muted);
          font-size: clamp(16px, 2vw, 18px);
          line-height: 1.6;
        }
        .sub.small {
          margin-top: 10px;
          max-width: 760px;
        }

        .chips {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .chip {
          background: #e9efff;
          color: #1e40af;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
        }

        .ctaRow {
          margin-top: 22px;
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.12s ease, box-shadow 0.2s ease, background 0.15s ease,
            outline 0.1s ease;
        }
        .btn.primary {
          background: var(--brand);
          color: #fff;
          box-shadow: var(--shadow);
        }
        .btn.primary:hover {
          background: var(--brand700);
          transform: translateY(-1px);
          box-shadow: var(--shadow2);
        }
        .btn.ghost {
          background: #fff;
          color: var(--ink);
          border: 1px solid rgba(15, 23, 42, 0.12);
        }
        .btn.ghost:hover {
          transform: translateY(-1px);
          outline: var(--ring);
        }

        .micro {
          margin: 14px 0 0;
          color: var(--muted2);
          font-size: 13.5px;
        }

        .section {
          padding: clamp(24px, 4vw, 42px) 0;
        }

        .anchorCard {
          background: var(--paper);
          border-radius: var(--radius);
          padding: 22px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(15, 23, 42, 0.06);
        }
        .anchorLine {
          margin: 0 0 8px 0;
          font-size: 16.5px;
          color: var(--muted);
        }
        .divider {
          height: 1px;
          background: rgba(15, 23, 42, 0.08);
          margin: 14px 0;
        }
        .anchorStrong {
          margin: 0;
          font-size: 16.5px;
          line-height: 1.6;
          font-weight: 700;
          color: var(--ink);
        }

        .grid2 {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }
        .card {
          grid-column: span 12;
          background: var(--paper);
          border-radius: var(--radius);
          padding: 20px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(15, 23, 42, 0.06);
        }
        @media (min-width: 860px) {
          .card {
            grid-column: span 6;
          }
        }

        h2 {
          margin: 0 0 12px 0;
          font-size: 20px;
          letter-spacing: -0.01em;
        }

        .list {
          margin: 0;
          padding-left: 18px;
          line-height: 1.75;
          color: var(--muted);
        }

        .p {
          margin: 0 0 10px 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .note {
          margin: 14px 0 0;
          color: var(--muted2);
          font-style: italic;
          line-height: 1.6;
        }

        .ctaCard {
          background: linear-gradient(180deg, #ffffff, #fbfcff);
          border-radius: 28px;
          padding: 26px 22px;
          box-shadow: var(--shadow);
          border: 1px solid rgba(15, 23, 42, 0.06);
          text-align: center;
        }

        .footer {
          padding: 22px 0 38px;
          color: var(--muted2);
        }
        .footerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .footerLink {
          color: var(--muted2);
          text-decoration: none;
          font-weight: 700;
        }
        .footerLink:hover {
          color: var(--ink);
        }
      `}</style>
    </>
  );
}
