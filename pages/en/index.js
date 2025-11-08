import Head from "next/head";

export default function HomeEN() {
  const email = "contact@lucachiesa.net";
  const linkedin = "https://www.linkedin.com/in/lucachiesa/";

  return (
    <>
      <Head>
        <title>Luca Chiesa — Sales & Communication</title>
        <meta
          name="description"
          content="Sales, communication and DISC for commercial teams. Training, coaching and DISC certifications."
        />
        <meta httpEquiv="content-language" content="en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="x-default" href="https://lucachiesa.net/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Luca Chiesa — Sales, Communication, DISC" />
        <meta
          property="og:description"
          content="Sales & communication training, team motivation, leadership and DISC. Certifications and practical application."
        />
        <meta property="og:url" content="https://lucachiesa.net/en" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="wrap">
        {/* Language switch */}
        <nav className="lang">
          <a href="/">ES</a>
          <span>·</span>
          <a aria-current="page" href="/en">EN</a>
        </nav>

        {/* Hero */}
        <section className="hero">
          <h1>Luca Chiesa</h1>
          <p className="kicker">Sales • Leadership • DISC</p>

          <a className="cta" href={`mailto:${email}?subject=Website inquiry`}>
            Contact Luca
          </a>
        </section>

        {/* Footer */}
        <footer className="foot">
          <p>© {new Date().getFullYear()} Luca Chiesa</p>

          <div className="icons">
            {/* Email */}
            <a className="icon" href={`mailto:${email}?subject=Website inquiry`} aria-label="Write an email">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="M3 7l9 6 9-6"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a className="icon" href={linkedin} target="_blank" rel="noreferrer" aria-label="Go to LinkedIn">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M20.45 20.45h-3.56V14.9c0-1.32-.02-3.01-1.83-3.01-1.83 0-2.11 1.43-2.11 2.91v5.65H9.39V9.75h3.41v1.47h.05c.47-.9 1.61-1.83 3.31-1.83 3.54 0 4.19 2.33 4.19 5.36v5.7zM6.34 8.29a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM8.12 20.45H4.56V9.75h3.56v10.7z" />
              </svg>
            </a>
          </div>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg: #eef2f7;
          --text: #0f172a;
          --muted: #475569;
          --accent: #2563eb;
          --accent-700: #1d4ed8;
          --ring: rgba(37, 99, 235, 0.3);
          --card: #ffffff;
        }
        html, body {
          background: var(--bg);
          margin: 0;
          color: var(--text);
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .wrap {
          min-height: 100svh;
          display: grid;
          grid-template-rows: auto 1fr auto;
          max-width: 980px;
          margin: 0 auto;
          padding: clamp(16px, 4vw, 32px);
        }
        .lang {
          justify-self: end;
          display: flex;
          gap: .5rem;
          color: var(--muted);
          font-size: .95rem;
        }
        .lang a {
          color: var(--muted);
          text-decoration: none;
        }
        .lang a[aria-current="page"] {
          color: var(--text);
          font-weight: 600;
        }
        .hero {
          display: grid;
          place-items: center;
          text-align: center;
          padding-block: clamp(24px, 8vw, 64px);
        }
        h1 {
          margin: 0 0 .8rem 0;
          font-weight: 800;
          letter-spacing: -0.02em;
          font-size: clamp(2.2rem, 5.5vw, 4rem);
        }
        .kicker {
          margin: 0 0 2.2rem 0;
          color: var(--muted);
          font-size: clamp(1.05rem, 2.4vw, 1.25rem);
        }
        .cta {
          display: inline-block;
          background: var(--accent);
          color: #fff;
          padding: .9rem 1.35rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: .01em;
          box-shadow: 0 8px 18px rgba(37, 99, 235, .18);
          transition: transform .08s ease, background .15s ease, box-shadow .2s ease;
        }
        .cta:hover { background: var(--accent-700); }
        .cta:active { transform: translateY(1px); }
        .cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 6px var(--ring);
        }
        .foot {
          border-top: 1px solid rgba(15, 23, 42, .06);
          margin-top: clamp(24px, 6vw, 72px);
          padding-top: clamp(16px, 4vw, 28px);
          display: grid;
          place-items: center;
          gap: 12px;
          color: var(--muted);
          text-align: center;
        }
        .icons {
          display: flex;
          gap: 14px;
        }
        .icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: var(--card);
          color: var(--text);
          box-shadow: 0 2px 8px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.6) inset;
          transition: transform .08s ease, box-shadow .2s ease;
        }
        .icon:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,.1); }
        .icon:focus-visible { outline: none; box-shadow: 0 0 0 6px var(--ring); }
      `}</style>
    </>
  );
}
