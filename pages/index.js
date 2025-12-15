import Head from "next/head";

export default function HomeES() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Consulta desde la web");
  const body = encodeURIComponent("Hola Luca,");

  return (
    <>
      <Head>
        <title>Luca Chiesa — Desarrollo Comercial de Equipos de Ventas</title>
        <meta
          name="description"
          content="Formación y acompañamiento comercial para equipos de ventas B2B y B2C. Ventas, comunicación, motivación y DISC aplicados al día a día."
        />
        <link rel="canonical" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <meta property="og:type" content="website" />
      </Head>

      {/* TOPBAR */}
      <header className="topbar">
        <div className="topbarInner">
          <nav className="lang">
            <span className="active">ES</span>
            <span className="dot">•</span>
            <a href="/en">EN</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="heroCard">
            <h1>
              Te ayudamos a desarrollar y profesionalizar
              <br />
              tu equipo de ventas
            </h1>

            <p className="kicker">
              Ventas · Comunicación · Motivación · DISC
            </p>

            <p className="sub">
              Formación y acompañamiento comercial en ventas, comunicación y motivación.
              Trabajo práctico con vendedores B2B y B2C, desde el autoliderazgo hasta
              la ejecución diaria.
            </p>

            <div className="ctaRow">
              <a
                className="btn primary"
                href={`mailto:${email}?subject=${subject}&body=${body}`}
              >
                Hablar 15 minutos
              </a>

              <a className="btn ghost" href="#servicios">
                Ver servicios
              </a>

              <a
                className="btn ghost"
                href="https://www.linkedin.com/in/lucachiesa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="proof">
              <span className="proofItem">
                <span className="okDot" /> +15 años con equipos comerciales B2B y B2C
              </span>
              <span className="proofItem">
                <span className="okDot" /> Certificación DISC aplicada a ventas y comunicación
              </span>
              <span className="proofItem">
                <span className="okDot" /> Formación + acompañamiento real a vendedores
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="wrap">
          <h2>Cómo trabajamos</h2>

          <p className="lead left">
            Intervenciones pensadas para desarrollar y profesionalizar equipos de ventas,
            combinando formación, acompañamiento y herramientas prácticas.
          </p>

          <div className="grid">
            <article className="card">
              <div className="badge">Formación</div>
              <h3>Formación comercial para equipos de ventas</h3>
              <p>
                Programas adaptados a la realidad del equipo: prospección, reuniones
                comerciales, propuesta de valor, gestión de objeciones y cierre.
              </p>
              <p>
                Contenido práctico y aplicable al día a día comercial.
              </p>
            </article>

            <article className="card">
              <div className="badge">Acompañamiento</div>
              <h3>Acompañamiento comercial a vendedores</h3>
              <p>
                Trabajo directo con vendedores: preparación de visitas, roleplays,
                observación y feedback individual.
              </p>
              <p>
                Convertir la formación en hábitos y resultados sostenibles.
              </p>
            </article>

            <article className="card">
              <div className="badge">DISC</div>
              <h3>DISC aplicado a ventas y comunicación</h3>
              <p>
                Mejora de la comunicación comercial adaptando el mensaje al perfil
                del cliente.
              </p>
              <p>
                Aplicación práctica del modelo en ventas y negociación.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section">
        <div className="wrap contactBox">
          <h2>Hablemos</h2>
          <p className="lead left">
            Cuéntanos tu contexto y vemos si tiene sentido trabajar juntos.
          </p>

          <a
            className="btn primary"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
          >
            Escribir a {email}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
      </footer>

      {/* ESTILOS */}
      <style jsx>{`
        :root {
          --bg:#f6f7fb;
          --ink:#0f172a;
          --muted:#475569;
          --muted2:#64748b;
          --paper:#ffffff;
          --brand:#2563eb;
          --wrap:1060px;
          --radius:18px;
          --shadow:0 10px 24px rgba(16,24,40,.06);
        }

        :global(html,body){
          margin:0;
          background:var(--bg);
          color:var(--ink);
          font-family:Inter,system-ui,Arial;
        }

        .wrap{max-width:var(--wrap);margin:0 auto;padding:0 20px;}
        .topbarInner{display:flex;justify-content:flex-end;padding:18px 20px;}
        .lang{font-size:14px;color:var(--muted);}
        .lang a{text-decoration:none;color:var(--muted2);}
        .lang .active{font-weight:700;color:var(--brand);}
        .lang .dot{margin:0 6px;}

        .hero{padding-top:20px;}
        .heroCard{
          background:var(--paper);
          border-radius:28px;
          padding:40px 32px;
          box-shadow:var(--shadow);
          text-align:center;
        }

        h1{font-size:42px;margin:0 0 16px;}
        .kicker{color:var(--muted);font-weight:600;}
        .sub{max-width:820px;margin:12px auto;color:var(--muted2);}

        .ctaRow{margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
        .btn{padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:700;}
        .btn.primary{background:var(--brand);color:#fff;}
        .btn.ghost{background:#fff;border:1px solid #ddd;color:var(--ink);}

        .proof{margin-top:18px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;font-size:14px;}
        .okDot{display:inline-block;width:8px;height:8px;background:var(--brand);border-radius:50%;margin-right:6px;}

        .section{padding:60px 0;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;}
        .card{background:#fff;border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);}
        .badge{font-size:12px;font-weight:700;color:var(--brand);}
        .footer{text-align:center;color:var(--muted);padding:40px 0;}
      `}</style>
    </>
  );
}
