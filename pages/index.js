import Head from "next/head";

export default function HomeES() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Consulta desde la web");
  const body = encodeURIComponent("Hola Luca,");

  return (
    <>
      <Head>
        <title>Luca Chiesa — Ventas • Liderazgo • DISC</title>
        <meta
          name="description"
          content="Formación y acompañamiento comercial. Ventas B2B, liderazgo de equipos y certificación DISC."
        />
        <link rel="canonical" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />

        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content="Luca Chiesa — Ventas • Liderazgo • DISC" />
        <meta
          property="og:description"
          content="Formación y acompañamiento comercial. Ventas B2B, liderazgo de equipos y certificación DISC."
        />
        <meta property="og:url" content="https://lucachiesa.net/" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Topbar con selector de idioma */}
      <header className="topbar">
        <nav className="lang" aria-label="Selector de idioma">
          <span className="active">ES</span>
          <span className="dot">•</span>
          <a href="/en" aria-label="English version">EN</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="wrap hero">
        <div className="heroCard">
          <div className="pill">Barcelona · Europa · Online</div>

          <h1>Luca Chiesa</h1>
          <p className="kicker">Ventas • Liderazgo • DISC</p>

          <p className="sub">
            Más de 15 años ayudando a equipos comerciales a crecer, comunicar mejor
            y vender con un método claro, sin perder el factor humano.
          </p>

          <div className="ctaRow">
            <a className="cta" href={`mailto:${email}?subject=${subject}&body=${body}`}>
              Reserva una reunión
            </a>

            <a className="cta ghost" href="#contacto">
              Contacto rápido
            </a>

            <a
              className="cta ghost"
              href="https://www.linkedin.com/in/lucachiesa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="proof">
            <div className="proofItem">
              <span className="dotOk" /> +15 años formando equipos
            </div>
            <div className="proofItem">
              <span className="dotOk" /> Certificación DISC (programas abiertos y cerrados)
            </div>
            <div className="proofItem">
              <span className="dotOk" /> Enfoque práctico: roleplays + transferencia
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="wrap section">
        <div className="split">
          <div>
            <h2 className="h2">Propuesta de valor</h2>
            <p className="lead">
              Diseño formaciones y acompañamientos comerciales con una idea clara:
              que se note en el día a día. Menos teoría “bonita” y más herramientas:
              guiones, roleplays, seguimiento y métricas sencillas.
            </p>
          </div>

          <div className="valueBox">
            <h3 className="h3">Qué te llevas</h3>
            <ul className="list">
              <li>Playbooks de prospección, reuniones y cierre listos para usar</li>
              <li>Roleplays realistas con feedback útil (sin teatro)</li>
              <li>Plan de acción por equipo y seguimiento para consolidar hábitos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="wrap section">
        <h2 className="h2">Servicios</h2>
        <p className="lead left">
          Programas llave en mano o a medida. Presencial, online o híbrido.
        </p>

        <div className="grid">
          <article className="card">
            <div className="badge">Ventas</div>
            <h3 className="h3">Formación en Ventas B2B</h3>
            <p>
              Prospección, apertura, preguntas, propuesta de valor, objeciones y cierre.
              Talleres prácticos para vender con método y confianza.
            </p>
          </article>

          <article className="card">
            <div className="badge">Key Accounts</div>
            <h3 className="h3">Negociación y cuentas clave</h3>
            <p>
              Preparación de reuniones, estrategia, concesiones y cierres. Dinámicas
              con escenarios realistas para mejorar resultados sin quemar relaciones.
            </p>
          </article>

          <article className="card">
            <div className="badge">Comunicación</div>
            <h3 className="h3">Comunicación efectiva</h3>
            <p>
              Reuniones mejores, feedback claro y conexión real. Ajuste del mensaje a
              diferentes estilos para influir sin fricción.
            </p>
          </article>

          <article className="card">
            <div className="badge">Equipos</div>
            <h3 className="h3">Motivación y hábitos</h3>
            <p>
              Rituales, foco y hábitos que sostienen el rendimiento. Energía estable
              para llegar a objetivos cuidando al equipo.
            </p>
          </article>

          <article className="card">
            <div className="badge">Liderazgo</div>
            <h3 className="h3">Liderazgo y autoliderazgo</h3>
            <p>
              Conversaciones clave, priorizar, delegar y dar dirección. Coherencia del
              líder y cultura comercial que se nota.
            </p>
          </article>

          <article className="card">
            <div className="badge">DISC</div>
            <h3 className="h3">Certificación e implementación DISC</h3>
            <p>
              Certificaciones abiertas y programas cerrados para RR. HH. y mandos.
              Implementación real del modelo dentro de la organización.
            </p>
          </article>
        </div>
      </section>

      {/* CASOS */}
      <section className="wrap section">
        <div className="sectionHead">
          <div>
            <h2 className="h2">Casos de éxito</h2>
            <p className="lead left">
              Ejemplos típicos de trabajo (los afinamos con tus casos reales).
            </p>
          </div>
          <a className="miniLink" href="#contacto">Pedir propuesta →</a>
        </div>

        <div className="grid3">
          <div className="case">
            <div className="caseTop">
              <span className="tag">Formación</span>
              <span className="tag soft">4 días</span>
            </div>
            <h3 className="h3">Sales Essentials</h3>
            <p>
              Estandarización de playbooks y práctica intensiva para acelerar el ritmo
              del pipeline y la calidad de las reuniones.
            </p>
          </div>

          <div className="case">
            <div className="caseTop">
              <span className="tag">DISC</span>
              <span className="tag soft">Equipos</span>
            </div>
            <h3 className="h3">Lenguaje común en comunicación</h3>
            <p>
              Talleres para alinear estilos, reducir fricción y aumentar la colaboración
              comercial y de servicio.
            </p>
          </div>

          <div className="case">
            <div className="caseTop">
              <span className="tag">Productividad</span>
              <span className="tag soft">Estrés</span>
            </div>
            <h3 className="h3">Gestión del tiempo</h3>
            <p>
              Sistemas simples de foco, prioridades y hábitos para mejorar ejecución y
              bajar ruido mental sin perder resultados.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="wrap section">
        <h2 className="h2">Lo que suelen valorar</h2>

        <div className="grid3">
          <div className="quote">
            <p>
              “Sesiones prácticas y aplicables. El equipo salió con guiones, criterio
              y claridad sobre qué hacer mañana.”
            </p>
            <div className="who">— Cliente (formación comercial)</div>
          </div>

          <div className="quote">
            <p>
              “La parte de roleplay con feedback fue la clave. Se notó mejora en
              conversaciones difíciles y en cierres.”
            </p>
            <div className="who">— Cliente (negociación)</div>
          </div>

          <div className="quote">
            <p>
              “Aterrizado y humano. Se trabaja el rendimiento sin machacar al equipo.”
            </p>
            <div className="who">— Cliente (liderazgo)</div>
          </div>
        </div>

        <p className="note">
          *Luego sustituimos estos textos por testimonios reales si los tienes.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="wrap section contact">
        <div className="contactBox">
          <div>
            <h2 className="h2">Hablemos</h2>
            <p className="lead left">
              Cuéntame tu objetivo (ventas, liderazgo, DISC, productividad) y te propongo
              un plan sencillo. Respondo rápido.
            </p>

            <div className="contactLinks">
              <a className="line" href={`mailto:${email}?subject=${subject}&body=${body}`}>
                {mailIcon()} <span>{email}</span>
              </a>

              <a
                className="line"
                href="https://www.linkedin.com/in/lucachiesa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkedinIcon()} <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="contactMini">
            <div className="miniCard">
              <h3 className="h3">Diagnóstico exprés (15 min)</h3>
              <p>
                Detectamos 3 mejoras rápidas en prospección, reuniones o cierre.
              </p>
              <a className="cta small" href={`mailto:${email}?subject=${subject}&body=${body}`}>
                Pedir diagnóstico
              </a>
            </div>

            <div className="miniCard soft">
              <h3 className="h3">Formato</h3>
              <p>In-company · Online · Híbrido</p>
              <p className="muted">Barcelona / España / Europa</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
        <div className="icons">
          <a
            className="icon"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            aria-label="Email"
            title="Email"
          >
            {mailIcon()}
          </a>

          <a
            className="icon"
            href="https://www.linkedin.com/in/lucachiesa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            {linkedinIcon()}
          </a>
        </div>
      </footer>

      {/* ESTILOS */}
      <style jsx>{`
        :root{
          --bg: #f6f7fb;
          --ink: #0f172a;
          --muted: #475569;
          --muted2: #64748b;
          --paper: #ffffff;

          --brand: #2563eb;
          --brand2: #1e40af;

          --radius: 16px;
          --wrap: 1060px;

          --shadow: 0 10px 24px rgba(16,24,40,.06);
          --shadow2: 0 18px 40px rgba(30,64,175,.18);
          --ring: 0 0 0 3px rgba(37,99,235,.18);
        }

        :global(html, body) {
          padding: 0;
          margin: 0;
          background: radial-gradient(1200px 500px at 50% -100px, rgba(37,99,235,.10), transparent 55%),
                      var(--bg);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI,
            Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .topbar {
          display: flex;
          justify-content: flex-end;
          max-width: var(--wrap);
          margin: 0 auto;
          padding: 18px 20px 0;
        }

        .lang {
          font-size: 14.5px;
          color: var(--muted);
          display:flex; align-items:center; gap:.35rem;
        }
        .lang a { color: var(--muted2); text-decoration: none; padding: 6px 9px; border-radius: 10px; }
        .lang a:hover { background:#eef2ff; color:#1e2a8a; }
        .lang .active { background:#e9efff; color:#1e40af; font-weight:700; padding:6px 9px; border-radius:10px; }
        .lang .dot { opacity:.45; margin:0 .2rem; }

        .wrap {
          max-width: var(--wrap);
          margin: 0 auto;
          padding: clamp(34px, 5.5vw, 54px) 20px 0;
        }

        .hero { text-align: center; padding-top: 8px; }
        .heroCard{
          background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.78));
          border: 1px solid rgba(15,23,42,.08);
          border-radius: 26px;
          box-shadow: var(--shadow);
          padding: clamp(22px, 4.5vw, 34px);
          position: relative;
          overflow: hidden;
        }
        .heroCard:before{
          content:"";
          position:absolute; inset:-2px;
          background: radial-gradient(700px 260px at 50% 0%, rgba(37,99,235,.16), transparent 60%);
          pointer-events:none;
        }

        .pill{
          display:inline-flex;
          align-items:center;
          gap:.5rem;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(37,99,235,.08);
          color: #1e40af;
          font-weight: 700;
          font-size: 13px;
          position: relative;
          z-index: 1;
        }

        h1 {
          font-size: clamp(38px, 5.2vw, 64px);
          line-height: 1.06;
          margin: 14px 0 8px 0;
          font-weight: 900;
          letter-spacing: -0.03em;
          position: relative;
          z-index: 1;
        }
        .kicker {
          margin: 0;
          font-size: clamp(16.5px, 2.1vw, 22px);
          color: var(--muted);
          position: relative;
          z-index: 1;
          font-weight: 600;
        }
        .sub {
          margin: .85rem auto 0;
          font-size: clamp(15.5px, 1.9vw, 18px);
          color: var(--muted2);
          max-width: 860px;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .ctaRow{
          margin-top: 20px;
          display:flex;
          flex-wrap:wrap;
          gap: 10px;
          justify-content:center;
          position: relative;
          z-index: 1;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--brand);
          color: #fff;
          text-decoration: none;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 800;
          box-shadow: var(--shadow);
          transition: transform .12s ease, box-shadow .2s ease, background .15s ease, outline .1s ease;
          min-height: 44px;
        }
        .cta:hover { background: var(--brand2); transform: translateY(-1px); box-shadow: var(--shadow2); }
        .cta:focus { outline: var(--ring); outline-offset: 2px; }

        .cta.ghost{
          background: rgba(255,255,255,.75);
          color: #0f172a;
          border: 1px solid rgba(15,23,42,.12);
        }
        .cta.ghost:hover{
          background: rgba(255,255,255,.95);
          color:#0f172a;
          border-color: rgba(37,99,235,.35);
        }

        .proof{
          margin-top: 18px;
          display:flex;
          flex-wrap:wrap;
          gap: 10px 14px;
          justify-content:center;
          color: var(--muted);
          font-weight: 600;
          font-size: 13.5px;
          position: relative;
          z-index: 1;
        }
        .proofItem{ display:inline-flex; align-items:center; gap:8px; }
        .dotOk{
          width:10px; height:10px;
          border-radius:999px;
          background: rgba(37,99,235,.25);
          box-shadow: 0 0 0 3px rgba(37,99,235,.10);
        }

        .section { margin-top: clamp(52px, 7vw, 74px); }
        .h2 {
          font-size: clamp(24px, 3.1vw, 34px);
          margin: 0 0 .6rem 0;
          letter-spacing: -.02em;
        }
        .lead {
          font-size: clamp(16px, 2vw, 18.2px);
          color: var(--muted2);
          line-height: 1.7;
          max-width: 840px;
          margin: 0 auto;
        }
        .lead.left{ margin: 0; }

        .split{
          display:grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items:start;
        }

        .valueBox{
          background: var(--paper);
          border-radius: var(--radius);
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: var(--shadow);
          padding: 16px 16px 14px;
        }

        .list{ margin: 10px 0 0; padding-left: 18px; color: var(--muted2); line-height: 1.65; }
        .list li{ margin: 6px 0; }

        .grid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 18px;
        }
        .card {
          grid-column: span 12;
          background: var(--paper);
          border-radius: var(--radius);
          padding: 18px 18px 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,.06);
          border: 1px solid rgba(15,23,42,.06);
          position: relative;
          overflow:hidden;
        }
        .badge{
          position:absolute;
          top: -10px;
          left: 16px;
          background: rgba(37,99,235,.10);
          color: #1e40af;
          font-size: 12px;
          font-weight: 800;
          padding: 6px 10px;
          border-radius: 999px;
          box-shadow: var(--shadow);
        }
        .h3 { font-size: 18px; margin: 10px 0 6px; letter-spacing: -.01em; }
        .card p { margin: 0; color: var(--muted2); line-height: 1.65; }

        .sectionHead{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap: 12px;
          flex-wrap:wrap;
        }
        .miniLink{
          text-decoration:none;
          font-weight:800;
          color: #1e40af;
          padding: 10px 12px;
          border-radius: 12px;
          background: rgba(37,99,235,.08);
          border: 1px solid rgba(37,99,235,.14);
        }
        .miniLink:hover{ background: rgba(37,99,235,.12); }

        .grid3{
          margin-top: 18px;
          display:grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .case, .quote{
          background: var(--paper);
          border-radius: var(--radius);
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: var(--shadow);
          padding: 16px;
        }
        .caseTop{
          display:flex;
          gap: 8px;
          flex-wrap:wrap;
          margin-bottom: 8px;
        }
        .tag{
          font-size: 12px;
          font-weight: 800;
          color:#0f172a;
          background: rgba(15,23,42,.06);
          padding: 6px 10px;
          border-radius: 999px;
        }
        .tag.soft{
          color:#1e40af;
          background: rgba(37,99,235,.10);
        }

        .quote p{
          margin: 0;
          color: var(--muted2);
          line-height: 1.7;
          font-size: 16px;
        }
        .who{
          margin-top: 10px;
          font-weight: 800;
          color: var(--muted);
          font-size: 13px;
        }
        .note{
          margin-top: 10px;
          color: var(--muted);
          font-size: 13px;
        }

        .contact{ padding-bottom: 10px; }
        .contactBox{
          background: linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.82));
          border-radius: 26px;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: var(--shadow);
          padding: clamp(18px, 3.8vw, 26px);
          display:grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .contactLinks{ margin-top: 14px; display:flex; flex-direction:column; gap: 10px; }
        .line{
          display:flex;
          align-items:center;
          gap: 10px;
          padding: 12px 12px;
          border-radius: 14px;
          background: rgba(255,255,255,.80);
          border: 1px solid rgba(15,23,42,.10);
          text-decoration:none;
          color: #0f172a;
    
::contentReference[oaicite:0]{index=0}
