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

      {/* TOPBAR */}
      <header className="topbar">
        <div className="wrap topbarInner">
          <div className="brand">Luca Chiesa</div>
          <a
            className="topLink"
            href="https://www.linkedin.com/in/lucachiesa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Formación y acompañamiento comercial · B2B · B2C</p>

            <h1>Conversaciones sobre ventas.</h1>

            <p className="sub">
              Con equipos comerciales, compartiendo <strong>formas de trabajar</strong> y
              experiencias del día a día.
            </p>

            <div className="ctaRow">
              <a
                className="btn primary"
                href={`mailto:${email}?subject=${subject}&body=${body}`}
              >
                Hablemos de cómo impulsar las ventas
              </a>
              <a className="btn ghost" href="#como">
                Ver cómo trabajo
              </a>
            </div>

            <div className="mini">
              <div className="miniItem">Sin formularios</div>
              <div className="miniDot">•</div>
              <div className="miniItem">Respuesta directa</div>
              <div className="miniDot">•</div>
              <div className="miniItem">Enfoque práctico</div>
            </div>
          </div>

          {/* Tarjeta “ancla” visual */}
          <aside className="heroCard">
            <div className="cardTitle">En qué se basa</div>

            <p className="line">No va de corregir.</p>
            <p className="line">No va de empezar de cero.</p>
            <p className="line">No va de aplicar recetas.</p>

            <div className="divider" />

            <p className="strong">
              Va de pensar juntos cómo se está vendiendo hoy y dar continuidad a lo que ya
              funciona.
            </p>
          </aside>
        </div>
      </section>

      {/* SECCIONES */}
      <main>
        <section className="section">
          <div className="wrap">
            <div className="grid">
              <article className="card">
                <h2>Para quién tiene sentido</h2>
                <ul>
                  <li>Dirección comercial o general</li>
                  <li>Responsables de formación</li>
                  <li>Equipos que valoran contrastar enfoques</li>
                  <li>Organizaciones que buscan coherencia y continuidad</li>
                </ul>
              </article>

              <article id="como" className="card">
                <h2>Cómo trabajo</h2>
                <ul>
                  <li>Formación práctica en ventas</li>
                  <li>Acompañamiento a vendedores</li>
                  <li>Trabajo sobre conversaciones reales</li>
                  <li>Seguimiento para consolidar hábitos</li>
                </ul>

                <p className="note">
                  Sin discursos vacíos. <br />
                  Sin fórmulas universales.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <div className="grid">
              <article className="card">
                <h2>Focos habituales de trabajo</h2>
                <ul>
                  <li>Venta consultiva en entornos B2B</li>
                  <li>Venta horizontal y desarrollo de clientes</li>
                  <li>Gestión de objeciones habituales</li>
                  <li>Seguimiento comercial y cierre</li>
                </ul>

                <p className="note">
                  Cada equipo es distinto. <br />
                  El enfoque se define caso a caso.
                </p>
              </article>

              <article className="card">
                <h2>Cuándo no tiene sentido</h2>
                <p className="p">
                  No tiene sentido si se busca una solución rápida o sin implicación del
                  equipo.
                </p>
                <p className="p">
                  Sí lo tiene cuando hay interés en trabajar con continuidad.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta">
          <div className="wrap ctaInner">
            <div>
              <h2>Hablemos de cómo impulsar las ventas</h2>
              <p className="sub2">
                Si te apetece poner en común cómo se está vendiendo hoy, lo analizamos
                juntos con calma.
              </p>
            </div>

            <a
              className="btn primary"
              href={`mailto:${email}?subject=${subject}&body=${body}`}
            >
              Escribir a {email}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footerInner">
          <span>© 2025 Luca Chiesa</span>
          <span className="muted">Landing para LinkedIn</span>
        </div>
      </footer>

      <style jsx>{`
        :root{
          --bg:#f6f7fb;
          --paper:#ffffff;
          --ink:#0f172a;
          --muted:#475569;
          --muted2:#64748b;
          --brand:#2563eb;
          --brand700:#1e40af;
          --ring:0 0 0 3px rgba(37,99,235,.18);
          --shadow:0 10px 24px rgba(16,24,40,.08);
          --shadow2:0 16px 34px rgba(30,64,175,.18);
          --radius:18px;
          --wrap:1060px;
        }

        :global(html, body){
          margin:0;
          padding:0;
          background: radial-gradient(1200px 600px at 20% -10%, rgba(37,99,235,.16), transparent 60%),
                      radial-gradient(900px 500px at 90% 0%, rgba(30,64,175,.10), transparent 55%),
                      var(--bg);
          color:var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .wrap{ max-width:var(--wrap); margin:0 auto; padding:0 20px; }

        .topbar{
          position:sticky; top:0; z-index:10;
          background: rgba(246,247,251,.78);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(15,23,42,.06);
        }
        .topbarInner{
          height:56px; display:flex; align-items:center; justify-content:space-between;
        }
        .brand{ font-weight:900; letter-spacing:-.02em; }
        .topLink{
          color:var(--muted2);
          text-decoration:none;
          font-weight:700;
          padding:8px 10px;
          border-radius:10px;
        }
        .topLink:hover{ background:#eef2ff; color:#1e40af; }

        .hero{ padding:44px 0 22px; }
        .heroGrid{
          display:grid;
          grid-template-columns: 1.2fr .8fr;
          gap:18px;
          align-items:stretch;
        }

        .heroCopy{
          background: linear-gradient(180deg, #ffffff, #fbfcff);
          border:1px solid rgba(15,23,42,.06);
          border-radius: 26px;
          box-shadow: var(--shadow);
          padding: clamp(22px, 3.5vw, 40px);
          position:relative;
          overflow:hidden;
        }
        .heroCopy:before{
          content:"";
          position:absolute;
          width:520px; height:520px;
          right:-240px; top:-260px;
          background: radial-gradient(circle at 30% 30%, rgba(37,99,235,.30), transparent 55%);
          transform: rotate(18deg);
          pointer-events:none;
        }

        .eyebrow{
          margin:0 0 10px;
          color:var(--muted2);
          font-weight:700;
          font-size:13.5px;
          letter-spacing:.02em;
        }
        h1{
          margin:0;
          font-size: clamp(34px, 4.3vw, 58px);
          line-height:1.06;
          letter-spacing:-.02em;
        }
        .sub{
          margin:14px 0 0;
          font-size: clamp(16px, 1.8vw, 18.5px);
          color:var(--muted);
          line-height:1.65;
          max-width: 720px;
        }

        .ctaRow{
          display:flex; gap:10px; flex-wrap:wrap;
          margin-top:22px;
        }
        .btn{
          display:inline-flex; align-items:center; justify-content:center;
          padding:12px 16px;
          border-radius:12px;
          font-weight:800;
          text-decoration:none;
          transition: transform .12s ease, box-shadow .2s ease, background .15s ease, outline .1s ease;
        }
        .btn.primary{
          background:var(--brand);
          color:#fff;
          box-shadow: var(--shadow);
        }
        .btn.primary:hover{
          background:var(--brand700);
          transform: translateY(-1px);
          box-shadow: var(--shadow2);
        }
        .btn.ghost{
          background:#fff;
          color:var(--ink);
          border:1px solid rgba(15,23,42,.12);
        }
        .btn.ghost:hover{ transform: translateY(-1px); outline: var(--ring); }

        .mini{
          display:flex; flex-wrap:wrap; gap:10px;
          margin-top:16px;
          color:var(--muted2);
          font-size:13.5px;
          align-items:center;
        }
        .miniDot{ opacity:.55; }

        .heroCard{
          background: var(--paper);
          border:1px solid rgba(15,23,42,.06);
          border-radius: 26px;
          box-shadow: var(--shadow);
          padding: 22px;
          position:relative;
          overflow:hidden;
        }
        .heroCard:before{
          content:"";
          position:absolute;
          inset: -1px;
          border-radius: 26px;
          background: linear-gradient(135deg, rgba(37,99,235,.18), transparent 45%, rgba(30,64,175,.14));
          pointer-events:none;
          mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
          -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
          padding:1px;
        }
        .cardTitle{
          font-weight:900;
          margin-bottom:10px;
          letter-spacing:-.01em;
        }
        .line{
          margin: 0 0 8px;
          color: var(--muted);
        }
        .divider{
          height:1px;
          background: rgba(15,23,42,.10);
          margin: 14px 0;
        }
        .strong{
          margin:0;
          line-height:1.6;
          font-weight:800;
        }

        .section{ padding: 26px 0 6px; }
        .section.alt{ padding: 18px 0 10px; }

        .grid{
          display:grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
          margin-top: 10px;
        }
        .card{
          grid-column: span 12;
          background: var(--paper);
          border:1px solid rgba(15,23,42,.06);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 20px;
        }
        @media (min-width: 920px){
          .card{ grid-column: span 6; }
        }

        h2{
          margin:0 0 12px;
          font-size: 20px;
          letter-spacing:-.01em;
        }
        ul{
          margin:0;
          padding-left: 18px;
          color: var(--muted);
          line-height: 1.8;
        }
        .note{
          margin: 14px 0 0;
          color: var(--muted2);
          font-style: italic;
          line-height: 1.6;
        }
        .p{
          margin: 0 0 10px;
          color: var(--muted);
          line-height: 1.7;
        }

        .cta{
          padding: 24px 0 44px;
        }
        .ctaInner{
          background: linear-gradient(180deg, #ffffff, #fbfcff);
          border:1px solid rgba(15,23,42,.06);
          border-radius: 26px;
          box-shadow: var(--shadow);
          padding: 22px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 16px;
          flex-wrap:wrap;
        }
        .sub2{
          margin: 8px 0 0;
          color: var(--muted);
          line-height:1.65;
          max-width: 720px;
        }

        .footer{
          padding: 26px 0 40px;
          color: var(--muted2);
        }
        .footerInner{
          display:flex; justify-content:space-between; align-items:center; gap:12px;
        }
        .muted{ color: var(--muted2); }

        @media (max-width: 920px){
          .heroGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
