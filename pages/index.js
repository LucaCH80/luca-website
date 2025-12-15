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

      {/* POR QUÉ */}
      <section className="section">
        <div className="wrap">
          <h2>Por qué hacemos este trabajo</h2>

          <p className="lead left">
            Porque vender no va solo de técnicas. Va de criterio, de conversación y de personas.
          </p>

          <p className="lead left">
            Creemos que los equipos comerciales mejoran cuando entienden mejor lo que hacen,
            por qué lo hacen y cómo impacta en sus resultados y en sus relaciones.
          </p>

          <p className="lead left">
            Por eso trabajamos desde dentro: desarrollando hábitos, claridad y autoliderazgo,
            para que la mejora comercial sea real y sostenible en el tiempo.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="wrap contactBox">
          <h2>Cuéntanos tu situación comercial</h2>

          <p className="lead left">
            Si quieres desarrollar o profesionalizar tu equipo de ventas,
            explícanos brevemente tu contexto y valoramos el encaje.
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
          mar
