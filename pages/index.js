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

            <p className="kicker">Ventas · Comunicación · Motivación · DISC</p>

            <p className="sub">
              Formación y acompañamiento comercial para equipos de ventas B2B y B2C.
              Trabajo práctico con vendedores, desde el autoliderazgo hasta el día a día comercial.
            </p>

            <div className="ctaRow">
              <a
                className="btn primary"
                href={`mailto:${email}?subject=${subject}&body=${body}`}
              >
                Hablar 15 minutos
              </a>

              <a className="btn ghost" href="#porque">
                Nuestro porqué
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
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="porque" className="section">
        <div className="wrap">
          <h2>Por qué hacemos este trabajo</h2>

          <p className="lead left">
            Porque vender no va solo de técnicas. Va de criterio, de conversación y de personas.
          </p>

          <p className="lead left">
            Creemos que los equipos comerciales mejoran cuando entienden lo que hacen, por qué lo hacen
            y cómo impacta en sus resultados y en sus relaciones.
          </p>

          <p className="lead left">
            Por eso empezamos desde dentro: desarrollando hábitos, claridad y autoliderazgo, para que
            la mejora comercial sea real y sostenible en el tiempo.
          </p>
        </div>
      </section>

      {/* HOW */}
      <section className="section">
        <div className="wrap">
          <h2>Cómo trabajamos</h2>

          <p className="lead left">
            Trabajamos para desarrollar y profesionalizar equipos de ventas, combinando formación,
            acompañamiento y herramientas prácticas.
          </p>
        </div>
      </section>

      {/* WHAT / SERVICES */}
      <section id="servicios" className="section">
        <div className="wrap">
          <h2>Qué hacemos</h2>

          <div className="grid">
            <article className="card">
              <div className="badge">Formación</div>
              <h3>Formación comercial para equipos de ventas</h3>
              <p>
                Prospección, reuniones comerciales, propuesta de valor, gestión de objeciones y cierre.
              </p>
              <p>Contenido práctico, enfocado al día a día del equipo.</p>
            </article>

            <article className="card">
              <div className="badge">Acompañamiento</div>
              <h3>Acompañamiento comercial a vendedores</h3>
              <p>
                Preparación de visitas, roleplays, observación de reuniones y feedback individual.
              </p>
              <p>Convertir la formación en hábitos y resultados sostenibles.</p>
            </article>

            <article className="card">
              <div className="badge">DISC</div>
              <h3>DISC aplicado a ventas y comunicación</h3>
              <p>Mejora de la comunicación comercial adaptando el mensaje al perfil del cliente.</p>
              <p>Aplicación práctica del modelo en ventas y negociación.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="section">
        <div className="wrap">
          <h2>Quién está detrás</h2>

          <div className="twoCol">
            <div className="panel">
              <p className="lead left">
                Soy Luca Chiesa. Trabajo con equipos comerciales desde hace más de 15 años
                en entornos B2B y B2C. Mi enfoque es práctico: lo que hacemos en sesión debe
                sostenerse después en el día a día.
              </p>

              <ul className="bullets">
                <li>+15 años con equipos comerciales (B2B y B2C)</li>
                <li>Certificación DISC aplicada a ventas y comunicación</li>
                <li>Autoliderazgo y motivación como base para el rendimiento</li>
                <li>Experiencia internacional (Europa y Asia)</li>
              </ul>
            </div>

            <div className="panel soft">
              <h3>Cómo se nota en el trabajo</h3>
              <p>
                Menos teoría decorativa y más práctica: guiones, simulaciones, conversaciones difíciles
                y seguimiento. Buscamos claridad, criterio y hábitos.
              </p>
              <p className="muted">
                Si quieres, después añadimos aquí 2–3 casos reales con nombres (o anonimizados).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="resultados" className="section">
        <div className="wrap">
          <h2>Resultados habituales</h2>
          <p className="lead left">
            Dependiendo del sector y del punto de partida, estos son resultados típicos que buscamos:
          </p>

          <div className="grid">
            <article className="card">
              <div className="badge">Pipeline</div>
              <h3>Mejores conversaciones comerciales</h3>
              <p>
                Reuniones más estructuradas, preguntas mejores y propuestas de valor más claras.
              </p>
            </article>

            <article className="card">
              <div className="badge">Cierre</div>
              <h3>Más control ante objeciones</h3>
              <p>
                Gestión de precio, competencia y “déjamelo pensar” con criterio y sin tensión.
              </p>
            </article>

            <article className="card">
              <div className="badge">Equipo</div>
              <h3>Hábitos sostenibles</h3>
              <p>
                Rituales simples (preparación, seguimiento, foco) que mantienen el rendimiento.
              </p>
            </article>
          </div>

          <p className="note">
            *No prometemos magia: medimos, entrenamos y consolidamos hábitos. Lo importante es la transferencia.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="wrap contactBox">
          <h2>Cuéntanos tu situación comercial</h2>

          <p className="lead left">
            Si quieres desarrollar o profesionalizar tu equipo de ventas, explícanos brevemente tu contexto
            y valoramos el encaje.
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

      {/* STYLES */}
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
        h2{margin:0 0 12px;}
        h3{margin:0 0 8px;}
        .kicker{color:var(--muted);font-weight:600;}
        .sub{max-width:820px;margin:12px auto;color:var(--muted2);}

        .ctaRow{margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
        .btn{padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:700;}
        .btn.primary{background:var(--brand);color:#fff;}
        .btn.ghost{background:#fff;border:1px solid #ddd;color:var(--ink);}

        .section{padding:60px 0;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;}
        .card{background:#fff;border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);}
        .badge{font-size:12px;font-weight:700;color:var(--brand); margin-bottom:10px;}
        .lead{color:var(--muted2); line-height:1.7; max-width:900px;}
        .lead.left{margin:0 0 12px;}
        .note{margin-top:12px;color:var(--muted);font-size:13px;}

        .twoCol{display:grid;grid-template-columns:1fr;gap:18px;margin-top:12px;}
        .panel{background:var(--paper);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);}
        .panel.soft{background:#f1f5ff;}
        .bullets{margin:12px 0 0;padding-left:18px;color:var(--muted2);line-height:1.7;}
        .muted{color:var(--muted);font-size:13px;margin-top:10px;}

        .contactBox{
          background:var(--paper);
          border-radius:28px;
          padding:28px 22px;
          box-shadow:var(--shadow);
        }

        .footer{text-align:center;color:var(--muted);padding:40px 0;}

        @media (min-width: 920px){
          .twoCol{grid-template-columns:1.15fr .85fr;}
        }
      `}</style>
    </>
  );
}
