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

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <h1>Conversaciones sobre ventas.</h1>

          <p className="sub">
            Con equipos comerciales, compartiendo <strong>formas de trabajar</strong> y
            experiencias del día a día.
          </p>

          <p className="tag">
            Formación y acompañamiento comercial · B2B · B2C
          </p>

          <a
            className="btn primary"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
          >
            Hablemos de cómo impulsar las ventas
          </a>
        </div>
      </section>

      {/* BLOQUE ANCLA */}
      <section className="section">
        <div className="wrap narrow">
          <p className="anchor">No va de corregir.</p>
          <p className="anchor">No va de empezar de cero.</p>
          <p className="anchor">No va de aplicar recetas.</p>

          <p className="anchor strong">
            Va de pensar juntos cómo se está vendiendo hoy<br />
            y dar continuidad a lo que ya funciona.
          </p>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="section light">
        <div className="wrap">
          <h2>Para quién tiene sentido</h2>

          <ul>
            <li>Dirección comercial o general</li>
            <li>Responsables de formación</li>
            <li>Equipos comerciales que valoran contrastar enfoques</li>
            <li>Organizaciones que buscan coherencia y continuidad</li>
          </ul>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section className="section">
        <div className="wrap">
          <h2>Cómo trabajo</h2>

          <ul className="cols">
            <li>Formación práctica en ventas</li>
            <li>Acompañamiento a vendedores</li>
            <li>Trabajo sobre conversaciones reales</li>
            <li>Seguimiento para consolidar hábitos</li>
          </ul>

          <p className="note">
            Sin discursos vacíos.<br />
            Sin fórmulas universales.
          </p>
        </div>
      </section>

      {/* FOCOS */}
      <section className="section light">
        <div className="wrap">
          <h2>Focos habituales de trabajo</h2>

          <ul className="cols">
            <li>Venta consultiva en entornos B2B</li>
            <li>Venta horizontal y desarrollo de clientes</li>
            <li>Gestión de objeciones habituales</li>
            <li>Seguimiento comercial y cierre</li>
          </ul>

          <p className="note">
            Cada equipo es distinto.<br />
            El enfoque se define caso a caso.
          </p>
        </div>
      </section>

      {/* CUÁNDO NO */}
      <section className="section">
        <div className="wrap">
          <h2>Cuándo no tiene sentido</h2>

          <p>
            No tiene sentido si se busca una solución rápida<br />
            o sin implicación del equipo.
          </p>

          <p>
            Sí lo tiene cuando hay interés<br />
            en trabajar con continuidad.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section cta">
        <div className="wrap">
          <h2>Hablemos de cómo impulsar las ventas</h2>

          <p className="sub">
            Si te apetece poner en común cómo se está vendiendo hoy,
            lo analizamos juntos con calma.
          </p>

          <a
            className="btn primary"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
          >
            Escribir a {email}
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
      </footer>

      {/* ESTILOS */}
      <style jsx>{`
        :root {
          --bg:#f6f7fb;
          --ink:#0f172a;
          --muted:#475569;
          --brand:#2563eb;
        }

        body { margin:0; }

        .wrap {
          max-width:900px;
          margin:0 auto;
          padding:0 20px;
        }

        .wrap.narrow {
          max-width:700px;
        }

        .hero {
          padding:80px 0 64px;
          background:white;
          text-align:center;
        }

        h1 {
          font-size:42px;
          line-height:1.15;
          margin-bottom:16px;
        }

        .sub {
          font-size:18px;
          color:var(--muted);
          margin-bottom:20px;
        }

        .tag {
          font-weight:600;
          margin-bottom:28px;
        }

        .btn {
          display:inline-block;
          background:var(--brand);
          color:white;
          padding:14px 28px;
          border-radius:10px;
          text-decoration:none;
          font-weight:700;
        }

        .section {
          padding:64px 0;
        }

        .section.light {
          background:white;
        }

        h2 {
          margin-bottom:20px;
        }

        ul {
          line-height:1.8;
          color:var(--muted);
        }

        ul.cols {
          columns:2;
          column-gap:40px;
        }

        .anchor {
          font-size:18px;
          margin:6px 0;
        }

        .anchor.strong {
          margin-top:18px;
          font-weight:600;
        }

        .note {
          margin-top:24px;
          color:var(--muted);
          font-style:italic;
        }

        .cta {
          text-align:center;
        }

        .footer {
          padding:40px 0;
          text-align:center;
          color:var(--muted);
        }

        @media (max-width: 640px) {
          h1 { font-size:32px; }
          ul.cols { columns:1; }
        }
      `}</style>
    </>
  );
}
