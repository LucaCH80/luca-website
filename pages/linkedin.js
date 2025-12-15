import Head from "next/head";

export default function LinkedInLanding() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Contacto desde LinkedIn");
  const body = encodeURIComponent("Hola Luca,");

  return (
    <>
      <Head>
        <title>Impulsar las ventas | Luca Chiesa</title>
        <meta
          name="description"
          content="Formación y acompañamiento comercial para equipos de ventas. Una conversación con criterio sobre cómo evolucionar la forma de vender."
        />
        <link rel="canonical" href="https://lucachiesa.net/linkedin" />
      </Head>

      <section className="hero">
        <div className="wrap">
          <h1>
            Impulsar las ventas no va solo de técnicas.
            <br />
            Va de conversaciones, criterio y hábitos.
          </h1>

          <p className="sub">
            Trabajo con equipos comerciales para acompañar la evolución de su forma de vender,
            reforzando claridad, foco y continuidad sin romper lo que ya funciona.
          </p>

          <p className="tag">
            Formación y acompañamiento comercial · B2B · B2C
          </p>

          <a
            className="btn"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
          >
            Hablemos de cómo impulsar las ventas
          </a>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Para quién tiene sentido</h2>

          <ul>
            <li>Dirección comercial o general</li>
            <li>Responsables de formación</li>
            <li>Empresas que quieren dar un paso más en su forma de vender</li>
            <li>Equipos que buscan más criterio y coherencia comercial</li>
          </ul>

          <p className="note">
            No va de corregir ni de empezar de cero.
            Va de evolucionar sobre lo que ya existe.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="wrap">
          <h2>Cómo trabajo</h2>

          <ul>
            <li>Formación práctica en ventas</li>
            <li>Acompañamiento a vendedores</li>
            <li>Trabajo sobre conversaciones reales</li>
            <li>Seguimiento para consolidar hábitos</li>
          </ul>

          <p className="note">
            Sin recetas universales.  
            Sin discursos motivacionales vacíos.  
            Con foco en el día a día comercial.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Algunos focos habituales</h2>

          <ul>
            <li>Venta consultiva en entornos B2B</li>
            <li>Venta horizontal y desarrollo de clientes</li>
            <li>Gestión de objeciones habituales</li>
            <li>Seguimiento comercial y cierre</li>
          </ul>
        </div>
      </section>

      <section className="section light">
        <div className="wrap">
          <h2>Cuándo no tiene sentido</h2>

          <p>
            No tiene sentido si se busca una solución rápida
            o sin implicación del equipo.
          </p>

          <p>
            Sí lo tiene cuando hay interés en trabajar
            con criterio y continuidad.
          </p>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap">
          <h2>Hablemos de cómo impulsar las ventas</h2>

          <p>
            Si quieres dar un paso adelante en la forma en que tu equipo vende,
            cuéntanos brevemente tu contexto y lo analizamos juntos,
            con foco y criterio.
          </p>

          <a
            className="btn"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
          >
            Escribir a {email}
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
      </footer>

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

        .hero {
          padding:80px 0;
          background:white;
          text-align:center;
        }

        h1 {
          font-size:42px;
          line-height:1.15;
        }

        .sub {
          color:var(--muted);
          font-size:18px;
          max-width:800px;
          margin:20px auto;
        }

        .tag {
          font-weight:600;
          margin-bottom:24px;
        }

        .btn {
          display:inline-block;
          background:var(--brand);
          color:white;
          padding:14px 26px;
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

        ul {
          line-height:1.8;
          color:var(--muted);
        }

        .note {
          margin-top:20px;
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
      `}</style>
    </>
  );
}
