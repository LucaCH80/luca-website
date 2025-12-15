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
        <div className="topbarInner">
          <nav className="lang" aria-label="Selector de idioma">
            <span className="active">ES</span>
            <span className="dot">•</span>
            <a href="/en" aria-label="English version">
              EN
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="heroCard">
            <div className="pill">Barcelona · Europa · Online</div>

            <h1>Luca Chiesa</h1>
            <p className="kicker">Ventas • Liderazgo • DISC</p>

            <p className="sub">
              Más de 15 años ayudando a equipos comerciales a vender mejor, comunicar con claridad y
              sostener resultados en entornos híbridos.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href={`mailto:${email}?subject=${subject}&body=${body}`}>
                Reserva una reunión
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
                <span className="okDot" /> +15 años formando equipos
              </span>
              <span className="proofItem">
                <span className="okDot" /> Certificación DISC
              </span>
              <span className="proofItem">
                <span className="okDot" /> Roleplays + seguimiento (transferencia real)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div>
              <h2>Propuesta de valor</h2>
              <p className="lead">
                Formaciones y acompañamientos con foco en ejecución: guiones, práctica, feedback útil y
                un plan sencillo para que el equipo lo aplique de verdad.
              </p>
            </div>

            <div className="valueBox">
              <h3>Qué te llevas</h3>
              <ul>
                <li>Playbooks de prospección, reuniones y cierre listos para usar</li>
                <li>Roleplays realistas con feedback accionable</li>
                <li>Plan de acción por equipo + seguimiento para consolidar hábitos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="wrap">
          <div className="sectionHead">
            <div>
              <h2>Servicios</h2>
              <p className="lead left">
                Programas a medida. Presencial, online o híbrido. Directo, sin humo.
              </p>
            </div>
            <a className="miniLink" href="#contacto">
              Pedir propuesta →
            </a>
          </div>

          <div className="grid">
            <article className="card">
              <div className="badge">Ventas</div>
              <h3>Formación en Ventas B2B</h3>
              <p>Prospección, apertura, preguntas, propuesta de valor, objeciones y cierre.</p>
            </article>

            <article className="card">
              <div className="badge">Key Accounts</div>
              <h3>Negociación</h3>
              <p>Estrategia, concesiones, cierres y conversaciones difíciles. Práctica realista.</p>
            </article>

            <article className="card">
              <div className="badge">Comunicación</div>
              <h3>Comunicación efectiva</h3>
              <p>Reuniones mejores, feedback claro y adaptación a estilos para influir sin fricción.</p>
            </article>

            <article className="card">
              <div className="badge">Equipos</div>
              <h3>Motivación y hábitos</h3>
              <p>Rituales, foco y hábitos que sostienen rendimiento cuidando al equipo.</p>
            </article>

            <article className="card">
              <div className="badge">Liderazgo</div>
              <h3>Liderazgo y autoliderazgo</h3>
              <p>Priorizar, delegar, conversaciones clave y coherencia del líder.</p>
            </article>

            <article className="card">
              <div className="badge">DISC</div>
              <h3>Certificación e implementación DISC</h3>
              <p>Certificaciones y programas cerrados. Aplicación real dentro de la organización.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section className="section">
        <div className="wrap">
          <h2>Casos de éxito</h2>
          <p className="lead left">Ejemplos típicos (luego los dejamos con tus casos reales).</p>

          <div className="grid3">
            <div className="case">
              <div className="caseTop">
                <span className="tag">Formación</span>
                <span className="tag soft">Intensivo</span>
              </div>
              <h3>Sales Essentials</h3>
              <p>Playbooks + práctica para mejorar pipeline y calidad de reuniones.</p>
            </div>

            <div className="case">
              <div className="caseTop">
                <span className="tag">DISC</span>
                <span className="tag soft">Equipos</span>
              </div>
              <h3>Lenguaje común</h3>
              <p>Menos fricción, mejor coordinación y conversaciones más claras.</p>
            </div>

            <div className="case">
              <div className="caseTop">
                <span className="tag">Productividad</span>
                <span className="tag soft">Estrés</span>
              </div>
              <h3>Tiempo y foco</h3>
              <p>Sistemas simples para ejecutar mejor y bajar ruido mental.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section">
        <div className="wrap">
          <h2>Lo que suelen valorar</h2>

          <div className="grid3">
            <div className="quote">
              <p>
                “Sesiones aplicables. El equipo salió con guiones, criterio y claridad sobre qué hacer
                mañana.”
              </p>
              <div className="who">— Cliente (formación comercial)</div>
            </div>

            <div className="quote">
              <p>“La práctica con feedback fue la clave. Mejora real en conversaciones difíciles.”</p>
              <div className="who">— Cliente (negociación)</div>
            </div>

            <div className="quote">
              <p>“Aterrizado y humano. Rendimiento sin machacar al equipo.”</p>
              <div className="who">— Cliente (liderazgo)</div>
            </div>
          </div>

          <p className="note">*Luego cambiamos esto por testimonios reales si los tienes.</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <div className="wrap">
          <div className="contactBox">
            <div>
              <h2>Hablemos</h2>
              <p className="lead left">
                Dime tu objetivo (ventas, liderazgo, DISC, productividad) y te propongo un plan sencillo.
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
                <h3>Diagnóstico exprés (15 min)</h3>
                <p>Detectamos 3 mejoras rápidas en prospección, reuniones o cierre.</p>
                <a className="btn primary small" href={`mailto:${email}?subject=${subject}&body=${body}`}>
                  Pedir diagnóstico
                </a>
              </div>

              <div className="miniCard soft">
                <h3>Formato</h3>
                <p>In-company · Online · Híbrido</p>
                <p className="muted">Barcelona / España / Europa</p>
              </div>
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

      <style jsx>{`
        :root{
          --bg:#f6f7fb;
          --ink:#0f172a;
          --muted:#475569;
          --muted2:#64748b;
          --paper:#ffffff;
          --brand:#2563eb;
          --brand2:#1e40af;

          --wrap:1060px;
          --radius:18px;

          --shadow:0 10px 24px rgba(16,24,40,.06);
          --shadow2:0 18px 42px rgba(30,64,175,.18);
          --ring:0 0 0 3px rgba(37,99,235,.18);
        }

        :global(html, body){
          padding:0; margin:0;
          background: radial-gradient(1200px 520px at 50% -120px, rgba(37,99,235,.12), transparent 55%), var(--bg);
          color:var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          -webkit-font-smoothing: antialiased;
        }

        .wrap{max-width:var(--wrap); margin:0 auto; padding:0 20px;}
        h1{font-size:clamp(38px,5.2vw,64px); line-height:1.05; margin:14px 0 8px; font-weight:900; letter-spacing:-.03em;}
        h2{font-size:clamp(24px,3.1vw,34px); margin:0 0 .6rem; letter-spacing:-.02em;}
        h3{margin:10px 0 6px; font-size:18px; letter-spacing:-.01em;}

        .topbar{padding:18px 0 0;}
        .topbarInner{max-width:var(--wrap); margin:0 auto; padding:0 20px; display:flex; justify-content:flex-end;}
        .lang{font-size:14.5px; color:var(--muted); display:flex; align-items:center; gap:.35rem;}
        .lang a{color:var(--muted2); text-decoration:none; padding:6px 9px; border-radius:10px;}
        .lang a:hover{background:#eef2ff; color:#1e2a8a;}
        .lang .active{background:#e9efff; color:#1e40af; font-weight:800; padding:6px 9px; border-radius:10px;}
        .lang .dot{opacity:.45; margin:0 .2rem;}

        .hero{padding:34px 0 0;}
        .heroCard{
          margin-top: 16px;
          background: linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.80));
          border:1px solid rgba(15,23,42,.08);
          border-radius: 28px;
          box-shadow: var(--shadow);
          padding: clamp(22px, 4.5vw, 34px);
          text-align:center;
          position:relative;
          overflow:hidden;
        }
        .heroCard:before{
          content:"";
          position:absolute; inset:-2px;
          background: radial-gradient(720px 260px at 50% 0%, rgba(37,99,235,.16), transparent 62%);
          pointer-events:none;
        }
        .pill{
          display:inline-flex; align-items:center;
          padding:8px 12px; border-radius:999px;
          background: rgba(37,99,235,.08);
          color:#1e40af; font-weight:800; font-size:13px;
          position:relative; z-index:1;
        }
        .kicker{margin:0; color:var(--muted); font-weight:700; position:relative; z-index:1;}
        .sub{
          margin:.9rem auto 0;
          max-width: 860px;
          color:var(--muted2);
          line-height:1.65;
          position:relative; z-index:1;
        }

        .ctaRow{margin-top:20px; display:flex; flex-wrap:wrap; gap:10px; justify-content:center; position:relative; z-index:1;}
        .btn{
          display:inline-flex; align-items:center; justify-content:center;
          min-height:44px;
          padding:12px 18px;
          border-radius:12px;
          font-weight:900;
          text-decoration:none;
          box-shadow: var(--shadow);
          transition: transform .12s ease, box-shadow .2s ease, background .15s ease, outline .1s ease;
        }
        .btn:focus{outline: var(--ring); outline-offset:2px;}
        .btn.primary{background:var(--brand); color:#fff;}
        .btn.primary:hover{background:var(--brand2); transform: translateY(-1px); box-shadow: var(--shadow2);}
        .btn.ghost{
          background: rgba(255,255,255,.76);
          color: var(--ink);
          border: 1px solid rgba(15,23,42,.12);
        }
        .btn.ghost:hover{background: rgba(255,255,255,.96); border-color: rgba(37,99,235,.35); transform: translateY(-1px);}

        .proof{margin-top:18px; display:flex; flex-wrap:wrap; gap:10px 14px; justify-content:center; color:var(--muted); font-weight:700; font-size:13.5px; position:relative; z-index:1;}
        .proofItem{display:inline-flex; align-items:center; gap:8px;}
        .okDot{width:10px; height:10px; border-radius:999px; background: rgba(37,99,235,.25); box-shadow:0 0 0 3px rgba(37,99,235,.10);}

        .section{padding: clamp(52px, 7vw, 74px) 0 0;}
        .lead{color:var(--muted2); line-height:1.7; max-width: 900px; margin:0 auto;}
        .lead.left{margin:0;}

        .split{display:grid; grid-template-columns:1fr; gap:16px; align-items:start;}
        .valueBox{
          background: var(--paper);
          border-radius: var(--radius);
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: var(--shadow);
          padding: 16px;
        }
        .valueBox ul{margin:10px 0 0; padding-left:18px; color:var(--muted2); line-height:1.65;}
        .valueBox li{margin:6px 0;}

        .sectionHead{display:flex; align-items:flex-end; justify-content:space-between; gap:12px; flex-wrap:wrap;}
        .miniLink{
          text-decoration:none;
          font-weight:900;
          color:#1e40af;
          padding:10px 12px;
          border-radius: 12px;
          background: rgba(37,99,235,.08);
          border: 1px solid rgba(37,99,235,.14);
        }
        .miniLink:hover{background: rgba(37,99,235,.12);}

        .grid{
          margin-top:18px;
          display:grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 18px;
        }
        .card{
          grid-column: span 12;
          background: var(--paper);
          border-radius: var(--radius);
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 6px 18px rgba(0,0,0,.06);
          padding: 18px 18px 16px;
          position: relative;
        }
        .badge{
          position:absolute;
          top:-10px; left:16px;
          background: rgba(37,99,235,.10);
          color:#1e40af;
          font-size:12px;
          font-weight:900;
          padding:6px 10px;
          border-radius:999px;
          box-shadow: var(--shadow);
        }
        .card p{margin:0; color:var(--muted2); line-height:1.65;}

        .grid3{margin-top:18px; display:grid; grid-template-columns:1fr; gap:16px;}
        .case, .quote{
          background: var(--paper);
          border-radius: var(--radius);
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: var(--shadow);
          padding: 16px;
        }
        .caseTop{display:flex; gap:8px; flex-wrap:wrap; margin-bottom: 8px;}
        .tag{
          font-size:12px; font-weight:900;
          background: rgba(15,23,42,.06);
          padding:6px 10px;
          border-radius:999px;
        }
        .tag.soft{color:#1e40af; background: rgba(37,99,235,.10);}
        .quote p{margin:0; color:var(--muted2); line-height:1.7;}
        .who{margin-top:10px; font-weight:900; color:var(--muted); font-size:13px;}
        .note{margin-top:10px; color:var(--muted); font-size:13px;}

        .contactBox{
          background: linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.82));
          border-radius: 28px;
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: var(--shadow);
          padding: clamp(18px, 3.8vw, 26px);
          display:grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .contactLinks{margin-top:14px; display:flex; flex-direction:column; gap:10px;}
        .line{
          display:flex; align-items:center; gap:10px;
          padding:12px 12px;
          border-radius: 14px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(15,23,42,.10);
          text-decoration:none;
          color: var(--ink);
          font-weight: 900;
        }
        .line:hover{outline: var(--ring);}

        .contactMini{display:grid; grid-template-columns:1fr; gap:12px;}
        .miniCard{
          background: var(--paper);
          border-radius: var(--radius);
          border: 1px solid rgba(15,23,42,.08);
          box-shadow: 0 8px 18px rgba(16,24,40,.06);
          padding: 14px;
        }
        .miniCard.soft{background: rgba(37,99,235,.06);}
        .miniCard p{margin:6px 0 0; color:var(--muted2); line-height:1.6;}
        .miniCard .muted{color:var(--muted); font-weight:800;}
        .btn.small{padding:10px 14px; border-radius:12px; margin-top:10px;}

        .footer{
          max-width: var(--wrap);
          margin: clamp(60px, 8vw, 92px) auto 46px;
          padding: 0 20px;
          text-align:center;
          color: var(--muted);
        }
        .icons{display:flex; gap:14px; align-items:center; justify-content:center; margin-top:12px;}
        .icon{
          display:inline-flex; align-items:center; justify-content:center;
          width:46px; height:46px;
          border-radius:14px;
          background: var(--paper);
          color:#111827;
          box-shadow: 0 4px 14px rgba(0,0,0,.08);
          transition: transform .12s ease, box-shadow .2s ease, outline .1s ease;
        }
        .icon:hover{transform: translateY(-1px); box-shadow: 0 10px 22px rgba(0,0,0,.12); outline: var(--ring);}

        @media (min-width: 860px){
          .split{grid-template-columns: 1.15fr .85fr; gap:18px;}
          .grid3{grid-template-columns: repeat(3, 1fr);}
          .contactBox{grid-template-columns: 1.1fr .9fr; gap:18px;}
        }
        @media (min-width: 720px){ .card{grid-column: span 6;} }
        @media (min-width: 1024px){ .card{grid-column: span 4;} }
      `}</style>
    </>
  );
}

function mailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function linkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05C20.6 8.45 23 10.2 23 14.1V23h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 4v7.6H8V8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
