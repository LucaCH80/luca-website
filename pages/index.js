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
              <a className="btn primary" href={`mailto:${email}?subject=${subject}&body=${body}`}>
                Hablar 15 minutos
              </a>
              <a className="btn ghost" href="#porque">Nuestro porqué</a>
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

      {/* POR QUÉ */}
      <section id="porque" className="section">
        <div className="wrap">
          <h2>Por qué hacemos este trabajo</h2>
          <p className="lead left">
            Porque vender no va solo de técnicas. Va de criterio, de conversación y de personas.
          </p>
          <p className="lead left">
            Los equipos comerciales mejoran cuando entienden lo que hacen, por qué lo hacen
            y cómo impacta en sus resultados y relaciones.
          </p>
          <p className="lead left">
            Por eso empezamos desde dentro: desarrollando hábitos, claridad y autoliderazgo
            para que la mejora sea real y sostenible.
          </p>
        </div>
      </section>

      {/* CÓMO */}
      <section className="section">
        <div className="wrap">
          <h2>Cómo trabajamos</h2>
          <p className="lead left">
            Desarrollamos equipos comerciales combinando formación, acompañamiento
            y herramientas prácticas.
          </p>
        </div>
      </section>

      {/* QUÉ */}
      <section id="servicios" className="section">
        <div className="wrap">
          <h2>Qué hacemos</h2>

          <div className="grid">
            <article className="card">
              <div className="badge">Formación</div>
              <h3>Formación comercial para equipos de ventas</h3>
              <p>Prospección, reuniones, propuesta de valor, objeciones y cierre.</p>
              <p>Contenido práctico para el día a día del equipo.</p>
            </article>

            <article className="card">
              <div className="badge">Acompañamiento</div>
              <h3>Acompañamiento comercial a vendedores</h3>
              <p>Preparación de visitas, roleplays, observación y feedback.</p>
              <p>Convertir la formación en hábitos y resultados.</p>
            </article>

            <article className="card">
              <div className="badge">DISC</div>
              <h3>DISC aplicado a ventas y comunicación</h3>
              <p>Adaptar el mensaje al perfil del cliente.</p>
              <p>Uso práctico en ventas y negociación.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TRABAJAMOS ASÍ */}
      <section id="proceso" className="section">
        <div className="wrap">
          <h2>Un proceso claro para hacer crecer y evolucionar al equipo comercial</h2>

          <p className="lead left">
            Antes de decidir si trabajamos con formación, acompañamiento o ambos,
            analizamos el contexto comercial y definimos el enfoque más adecuado.
          </p>

          <div className="grid">
            <article className="card">
              <div className="badge">Paso 1</div>
              <h3>Diagnóstico breve</h3>
              <p>
                Entendemos el tipo de venta, el ciclo comercial, el perfil del equipo
                y los puntos de mejora actuales.
              </p>
            </article>

            <article className="card">
              <div className="badge">Paso 2</div>
              <h3>Plan y foco</h3>
              <p>
                Definimos prioridades, mensajes clave y hábitos concretos.
                Decidimos qué intervención tiene más sentido.
              </p>
            </article>

            <article className="card">
              <div className="badge">Paso 3</div>
              <h3>Implementación y seguimiento</h3>
              <p>
                Entrenamos en situaciones reales y acompañamos el proceso
                para consolidar aprendizajes y resultados.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="wrap contactBox">
          <h2>Cuéntanos tu situación comercial</h2>
          <p className="lead left">
            Explícanos brevemente tu contexto y valoramos si tiene sentido trabajar juntos.
          </p>
          <a className="btn primary" href={`mailto:${email}?subject=${subject}&body=${body}`}>
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
          --bg:#f6f7fb; --ink:#0f172a; --muted:#475569; --muted2:#64748b;
          --paper:#ffffff; --brand:#2563eb; --wrap:1060px;
          --radius:18px; --shadow:0 10px 24px rgba(16,24,40,.06);
        }
        :global(html,body){margin:0;background:var(--bg);color:var(--ink);font-family:Inter,system-ui;}
        .wrap{max-width:var(--wrap);margin:0 auto;padding:0 20px;}
        .topbarInner{display:flex;justify-content:flex-end;padding:18px 20px;}
        .lang{font-size:14px;color:var(--muted);}
        .lang a{text-decoration:none;color:var(--muted2);}
        .lang .active{font-weight:700;color:var(--brand);}
        .lang .dot{margin:0 6px;}
        .hero{padding-top:20px;}
        .heroCard{background:var(--paper);border-radius:28px;padding:40px 32px;box-shadow:var(--shadow);text-align:center;}
        h1{font-size:42px;margin:0 0 16px;}
        .kicker{color:var(--muted);font-weight:600;}
        .sub{max-width:820px;margin:12px auto;color:var(--muted2);}
        .ctaRow{margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
        .btn{padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:700;}
        .btn.primary{background:var(--brand);color:#fff;}
        .btn.ghost{background:#fff;border:1px solid #ddd;color:var(--ink);}
        .section{padding:60px 0;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;}
        .card{background:#fff;border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);}
        .badge{font-size:12px;font-weight:700;color:var(--brand);margin-bottom:8px;}
        .lead{color:var(--muted2);line-height:1.7;max-width:900px;}
        .lead.left{margin:0 0 12px;}
        .contactBox{background:var(--paper);border-radius:28px;padding:28px 22px;box-shadow:var(--shadow);}
        .footer{text-align:center;color:var(--muted);padding:40px 0;}
      `}</style>
    </>
  );
}
