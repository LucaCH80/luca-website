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
            </article>

            <article className="card">
              <div className="badge">Acompañamiento</div>
              <h3>Acompañamiento comercial a vendedores</h3>
              <p>Preparación de visitas, roleplays, observación y feedback.</p>
            </article>

            <article className="card">
              <div className="badge">DISC</div>
              <h3>DISC aplicado a ventas y comunicación</h3>
              <p>Adaptar el mensaje al perfil del cliente.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TRABAJAMOS ASÍ */}
      <section className="section">
        <div className="wrap">
          <h2>Un proceso claro para hacer crecer y evolucionar al equipo comercial</h2>
          <p className="lead left">
            Antes de decidir si trabajamos con formación, acompañamiento o ambos,
            analizamos el contexto comercial y definimos el enfoque más adecuado.
          </p>
        </div>
      </section>

      {/* CUÁNDO NO */}
      <section className="section">
        <div className="wrap">
          <h2>Cuándo no tiene sentido trabajar juntos</h2>
          <p className="lead left">
            No siempre tiene sentido trabajar juntos, y preferimos decirlo con claridad desde el principio.
          </p>
        </div>
      </section>

      {/* CASOS */}
      <section className="section">
        <div className="wrap">
          <h2>Casos reales</h2>

          <div className="grid">
            <article className="card">
              <h3>Venta consultiva B2B</h3>
              <p>Estructuración de conversaciones comerciales y defensa de valor.</p>
            </article>

            <article className="card">
              <h3>Venta horizontal</h3>
              <p>Aumento del ticket medio y desarrollo de clientes existentes.</p>
            </article>

            <article className="card">
              <h3>Gestión de objeciones</h3>
              <p>Gestión de precio, competencia y bloqueos habituales.</p>
            </article>

            <article className="card">
              <h3>Seguimiento comercial</h3>
              <p>Mejora del control del pipeline y del cierre.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="wrap contactBox">
          <h2>Hablemos de cómo impulsar las ventas</h2>
          <p className="lead left">
            Si quieres dar un paso adelante en la forma en que tu equipo vende,
            cuéntanos brevemente tu contexto y lo analizamos juntos, con foco y criterio.
          </p>
          <a className="btn primary" href={`mailto:${email}?subject=${subject}&body=${body}`}>
            Escribir a {email}
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
      </footer>
    </>
  );
}
