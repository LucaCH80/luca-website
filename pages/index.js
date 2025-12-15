import Head from "next/head";

export default function HomeES() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Consulta desde la web");
  const body = encodeURIComponent("Hola Luca,");

  return (
    <>
      <Head>
        <title>Luca Chiesa — Formación en Ventas y Comunicación Comercial</title>
        <meta
          name="description"
          content="Formación para equipos comerciales B2B y B2C. Ventas, comunicación, motivación y DISC aplicados al día a día comercial."
        />
        <link rel="canonical" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />

        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content="Luca Chiesa — Formación Comercial" />
        <meta
          property="og:description"
          content="Formación para equipos comerciales. Ventas, comunicación, motivación y DISC con enfoque práctico."
        />
        <meta property="og:url" content="https://lucachiesa.net/" />
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
            <div className="pill">Barcelona · Europa · Online</div>

            <h1>
              Formación para equipos comerciales
              <br />
              que quieren vender mejor sin perder el factor humano
            </h1>

            <p className="kicker">
              Ventas · Comunicación · Motivación · DISC
            </p>

            <p className="sub">
              Más de 15 años trabajando con equipos comerciales B2B y B2C.
              Formaciones prácticas en ventas, comunicación y motivación,
              con el autoliderazgo como base para rendir mejor primero a nivel
              individual y luego en equipo.
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
                <span className="okDot" /> Autoliderazgo y motivación para mejorar resultados
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="wrap">
          <h2>Servicios</h2>
          <p className="lead left">
            Formación aplicada a equipos comerciales. Sin teoría decorativa.
          </p>

          <div className="grid">
            <article className="card">
              <div className="badge">Ventas</div>
              <h3>Formación en Ventas</h3>
              <p>Prospección, reuniones, propuesta de valor, objeciones y cierre.</p>
            </article>

            <article className="card">
              <div className="badge">Comunicación</div>
              <h3>Comunicación comercial</h3>
              <p>Adaptar el mensaje, influir mejor y reducir fricción con clientes.</p>
            </article>

            <article className="card">
              <div className="badge">Motivación</div>
              <h3>Motivación y hábitos</h3>
              <p>Foco, energía y hábitos sostenibles para equipos comerciales.</p>
            </article>

            <article className="card">
              <div className="badge">DISC</div>
              <h3>DISC aplicado a ventas</h3>
              <p>Comprender estilos y vender mejor según el perfil del cliente.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <div className="wrap contactBox">
          <div>
            <h2>Hablemos</h2>
            <p className="lead left">
              Cuéntame tu objetivo comercial y vemos si encaja.
            </p>

            <a
              className="btn primary"
              href={`mailto:${email}?subject=${subject}&body=${body}`}
            >
              Escribir a {email}
            </a>
          </div>
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
          --brand2:#1e40af;
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

        .hero{padding-top:20px;}
        .heroCard{
          background:var(--paper);
          border-radius:28px;
          padding:32px;
          box-shadow:var(--shadow);
          text-align:center;
        }

        h1{font-size:48px;margin:16px 0;}
        .kicker{color:var(--muted);font-weight:600;}
        .sub{max-width:820px;margin:12px auto;color:var(--muted2);}

        .ctaRow{margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
        .btn{padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:700;}
        .btn.primary{background:var(--brand);color:#fff;}
        .btn.ghost{background:#fff;border:1px solid #ddd;color:var(--ink);}

        .proof{margin-top:18px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;font-size:14px;}
        .okDot{display:inline-block;width:8px;height:8px;background:var(--brand);border-radius:50%;margin-right:6px;}

        .section{padding:60px 0;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;}
        .card{background:#fff;border-radius:var(--radius);padding:18px;box-shadow:var(--shadow);}
        .badge{font-size:12px;font-weight:700;color:var(--brand);}
        .footer{text-align:center;color:var(--muted);padding:40px 0;}
      `}</style>
    </>
  );
}
