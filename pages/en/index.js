import Head from "next/head";

export default function HomeEN() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Inquiry from the website");
  const body = encodeURIComponent("Hi Luca,\n\nI'd like to talk.\n\nThanks.");
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div className="wrap">
      <Head>
        <title>Luca Chiesa — Sales • Leadership • DISC</title>
        <meta name="description" content="Sales training, communication and DISC. I help commercial teams sell with purpose." />
        <link rel="canonical" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Luca Chiesa — Sales • Leadership • DISC" />
        <meta property="og:description" content="Sales training, communication and DISC. I help commercial teams sell with purpose." />
        <meta property="og:url" content="https://lucachiesa.net/en" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Header with language switch */}
      <header className="header">
        <nav className="lang">
          <a className="langLink" href="/">ES</a>
          <span>·</span>
          <a className="langLink active" href="/en">EN</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="hero">
        <h1 className="title">Luca Chiesa</h1>
        <p className="subtitle">Sales • Leadership • DISC</p>

        <a href={mailto} className="cta" aria-label="Email Luca">
          Contact Luca
        </a>
      </main>

      {/* Footer icons: email then LinkedIn */}
      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
        <div className="icons">
          <a className="iconBtn" href={mailto} aria-label="Send email to Luca">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="m4 8 8 5 8-5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
            </svg>
          </a>
          <a
            className="iconBtn"
            href="https://www.linkedin.com/in/lucachiesa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Luca's LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM4 9h3v12H4zM10 9h2.9v1.6h.04c.4-.76 1.37-1.56 2.82-1.56 3 0 3.55 1.98 3.55 4.56V21h-3v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-1.99 1.35-1.99 2.74V21h-3z"/>
            </svg>
          </a>
        </div>
      </footer>

      {/* ====== SAME GLOBAL STYLES ====== */}
      <style jsx>{`
        :root{
          --bg: #f7f9fc;
          --paper: #ffffff;
          --text: #111214;
          --muted: #5c6672;
          --brand: #2F5DFF;
          --brand-ink: #ffffff;
          --ring: 40, 90, 255;
        }
        *{ box-sizing:border-box; }
        html, body, .wrap{ height:100%; }
        body{
          margin:0;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", system-ui, sans-serif;
          color:var(--text);
          background: radial-gradient(1200px 800px at 50% -10%, #eaf0ff 0%, transparent 60%), var(--bg);
        }
        .wrap{ display:flex; flex-direction:column; min-height:100vh; }
        .header{ display:flex; justify-content:flex-end; padding:16px 24px; }
        .lang{ display:flex; gap:8px; align-items:center; color:var(--muted); font-size:14.5px; }
        .langLink{
          text-decoration:none; color:var(--muted);
          padding:6px 10px; border-radius:8px; transition:all .2s ease;
        }
        .langLink:hover{ background:#eef2ff; color:#273a93; }
        .langLink.active{ background:#e7ecff; color:#1f32a0; font-weight:600; }

        .hero{
          display:flex; flex-direction:column; align-items:center; text-align:center;
          padding:64px 20px 32px; max-width:900px; margin:0 auto;
        }
        .title{
          font-size: clamp(38px, 6vw, 72px);
          line-height:1.15; letter-spacing: -0.02em;
          margin: 28px 0 14px; font-weight: 800;
        }
        .subtitle{
          font-size: clamp(16px, 2.2vw, 22px);
          color: var(--muted); margin: 0 0 28px; letter-spacing:.02em;
        }
        .cta{
          display:inline-block; margin-top:10px; padding:14px 22px;
          background: var(--brand); color: var(--brand-ink);
          border-radius: 12px; font-weight: 600; text-decoration:none;
          box-shadow: 0 10px 24px rgba(var(--ring), .18), 0 2px 6px rgba(0,0,0,.06);
          transform: translateZ(0);
          transition: transform .15s ease, box-shadow .2s ease, background .2s ease;
        }
        .cta:hover{
          transform: translateY(-1px);
          box-shadow: 0 14px 30px rgba(var(--ring), .22), 0 3px 10px rgba(0,0,0,.07);
        }

        .footer{ margin-top:auto; text-align:center; padding:34px 16px 46px; color:var(--muted); font-size:14px; }
        .icons{ display:flex; gap:14px; justify-content:center; margin-top:10px; }
        .iconBtn{
          width:44px; height:44px; display:inline-flex; align-items:center; justify-content:center;
          color:#0f141c; background: var(--paper);
          border-radius: 12px; text-decoration:none;
          box-shadow: 0 8px 18px rgba(16,24,40,.06), 0 2px 4px rgba(16,24,40,.05);
          transition: transform .15s ease, box-shadow .2s ease;
        }
        .iconBtn:hover{
          transform: translateY(-1px);
          box-shadow: 0 10px 22px rgba(16,24,40,.08), 0 3px 6px rgba(16,24,40,.06);
        }

        @media (max-width:560px){
          .header{ padding:12px 16px; }
          .hero{ padding-top:48px; }
        }
      `}</style>
    </div>
  );
}
