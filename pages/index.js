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

      <header className="topbar">
        <div className="topbarInner">
          <nav className="lang">
            <span className="active">ES</span>
            <span className="dot">•</span>
            <a href="/en">EN</a>
          </nav>
        </div>
      </header>

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

      <section className="section">
        <div className="wrap">
          <h2>Cómo trabajamos</h2>
          <p className="lead left">
            Desarrollamos equipos comerciales combinando formación, acompañamiento
            y herramientas prácticas.
          </p>
        </div>
      </section>

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

      {/* CUÁNDO NO */}
      <section className="section">
        <div className="wrap">
          <h2>Cuándo no tiene sentido trabajar juntos</h2>

          <p className="lead left">
            No siempre tiene sentido trabajar juntos, y preferimos decirlo con claridad desde el principio.
          </p>

          <div className="grid">
            <article className="card">
              <h3>No tiene sentido si</h3>
              <ul className="bullets">
                <li>Se busca una solución rápida sin implicación real del equipo.</li>
                <li>No hay disposición a revisar hábitos y conversaciones.</li>
                <li>Se espera que la formación sustituya al liderazgo.</li>
                <li>El foco está solo en hacer más, sin mejorar cómo se vende.</li>
                <li>No existe compromiso para dar continuidad.</li>
              </ul>
            </article>

            <article className="card">
              <h3>Sí tiene sentido si</h3>
              <ul className="bullets">
                <li>Se quiere desarrollar al equipo a medio y largo plazo.</li>
                <li>Se busca combinar criterio, práctica y acompañamiento.</li>
                <li>Existe apertura para cuestionar y mejorar.</li>
                <li>Se persigue impacto sostenible.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

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

      <style jsx>{`
        .bullets{padding-left:18px;line-height:1.7;color:#475569;}
      `}</style>
    </>
  );
}
