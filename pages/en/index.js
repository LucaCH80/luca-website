import Head from "next/head";

export default function HomeEN() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Website inquiry");
  const body = encodeURIComponent("Hi Luca,");

  return (
    <>
      <Head>
        <title>Luca Chiesa — Sales • Leadership • DISC</title>
        <meta
          name="description"
          content="Sales enablement and practical training. Communication, team motivation, leadership and DISC certification."
        />
        <link rel="canonical" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Luca Chiesa — Sales • Leadership • DISC" />
        <meta
          property="og:description"
          content="Sales enablement and practical training. Communication, team motivation, leadership and DISC certification."
        />
        <meta property="og:url" content="https://lucachiesa.net/en" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Topbar with language selector */}
      <header className="topbar">
        <nav className="lang">
          <a href="/" aria-label="Versión en español">ES</a>
          <span className="dot">•</span>
          <span className="active">EN</span>
        </nav>
      </header>

      {/* HERO */}
      <section className="wrap hero">
        <h1>Luca Chiesa</h1>
        <p className="kicker">Sales • Leadership • DISC</p>
        <p className="sub">
          Over 15 years helping commercial teams grow, communicate better and sell with purpose.
        </p>

        <a
          className="cta"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
          Contact Luca
        </a>
      </section>

      {/* ABOUT */}
      <section className="wrap section">
        <h2 className="h2">About</h2>
        <p className="lead">
          I partner with teams and professionals to sell with meaning, communicate clearly and build relationships that last.
          I work from real experience, with a practical and human approach focused on achieving tangible, sustainable results.
        </p>
      </section>

      {/* SERVICES */}
      <section className="wrap section">
        <h2 className="h2">Services</h2>

        <div className="grid">
          <article className="card">
            <h3 className="h3">Sales Training</h3>
            <p>
              Prospecting, discovery, value proposition, objections and closing.
              Hands-on workshops to sell with method and confidence.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Communication</h3>
            <p>
              Effective meetings, feedback and real connection.
              Improve client and team relationships by understanding different communication styles.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Team Motivation</h3>
            <p>
              Rituals, focus and habits. Sustained energy to reach goals while taking care of the team.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Leadership &amp; Self-Leadership</h3>
            <p>
              Key conversations, prioritising, delegating and giving direction.
              Developing leaders’ judgement and consistency.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">DISC Certification</h3>
            <p>
              Open certifications and in-company programmes for HR and managers.
              Real implementation of the model inside the organisation.
            </p>
          </article>

          <article className="card">
            <h3 className="h3">Sales Coaching</h3>
            <p>
              1:1 and on-the-job sessions. Visit prep, role-plays and follow-up
              to accelerate results and learning.
            </p>
          </article>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="wrap section ctaBlock">
        <h2 className="h2">Let’s talk</h2>
        <p className="lead">
          Tell me where you are now and we’ll design the next step together.
        </p>

        <a
          className="cta"
          href={`mailto:${email}?subject=${subject}&body=${body}`}
        >
          Email {email}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
        <div className="icons">
          <a
            className="icon"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            aria-label="Email"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </a>

          <a
            className="icon"
            href="https://www.linkedin.com/in/lucachiesa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05C20.6 8.45 23 10.2 23 14.1V23h-4v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 4v7.6H8V8.5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </footer>

      {/* STYLES (same refined scale as ES) */}
      <style jsx>{`
        :root{
          --bg: #f6f7fb;
          --ink: #111214;
          --muted: #475569;
          --muted-2: #64748b;
          --brand: #2563eb;
          --brand-700: #1e40af;
          --paper: #fff;
          --ring: rgba(37, 99, 235, .35);
          --shadow: 0 10px 24px rgba(16,24,40,.06);
          --shadow-2: 0 14px 28px rgba(30,64,175,.20);
          --radius: 14px;
          --wrap: 1020px;
        }

        :global(html, body) {
          padding: 0;
          margin: 0;
          background: var(--bg);
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
        .lang a { color: var(--muted-2); text-decoration: none; padding: 6px 9px; border-radius: 8px; }
        .lang a:hover { background:#eef2ff; color:#1e2a8a; }
        .lang .active { background:#e9efff; color:#1e40af; font-weight:600; padding:6px 9px; border-radius:8px; }
        .lang .dot { opacity:.4; margin:0 .2rem; }

        .wrap {
          max-width: var(--wrap);
          margin: 0 auto;
          padding: clamp(36px, 6vw, 56px) 20px 0;
        }

        .hero { text-align: center; padding-top: 10px; }
        h1 {
          font-size: clamp(38px, 5.4vw, 66px);
          line-height: 1.08;
          margin: 0 0 .5rem 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .kicker {
          margin: 0;
          font-size: clamp(16.5px, 2.1vw, 22px);
          color: var(--muted);
          letter-spacing: .01em;
        }
        .sub {
          margin: .6rem auto 0;
          font-size: clamp(15.5px, 1.9vw, 18px);
          color: var(--muted-2);
          max-width: 820px;
          line-height: 1.55;
        }

        .cta {
          display: inline-block;
          margin-top: 26px;
          background: var(--brand);
          color: #fff;
          text-decoration: none;
          padding: 13px 22px;
          border-radius: 12px;
          font-weight: 700;
          box-shadow: var(--shadow);
          transition: transform .12s ease, box-shadow .2s ease, background .15s ease;
        }
        .cta:hover { background: var(--brand-700); transform: translateY(-1px); box-shadow: var(--shadow-2); }

        .section { margin-top: clamp(56px, 7vw, 78px); }
        .h2 {
          font-size: clamp(24px, 3.1vw, 32px);
          margin: 0 0 .65rem 0;
          letter-spacing: -.01em;
        }
        .lead {
          font-size: clamp(16px, 2vw, 18.2px);
          color: var(--muted-2);
          line-height: 1.66;
          max-width: 850px;
          margin: 0;
        }

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
        }
        .h3 { font-size: 18px; margin: 0 0 6px; letter-spacing: -.005em; }
        .card p { margin: 0; color: var(--muted-2); line-height: 1.6; }

        @media (min-width: 720px) { .card { grid-column: span 6; } }
        @media (min-width: 1024px) { .card { grid-column: span 4; } }

        .ctaBlock { text-align: center; padding-bottom: 8px; }

        .footer {
          max-width: var(--wrap);
          margin: clamp(64px, 8vw, 96px) auto 48px;
          padding: 0 20px;
          text-align: center;
          color: var(--muted);
        }
        .icons {
          display: flex; gap: 14px; align-items: center; justify-content: center; margin-top: 12px;
        }
        .icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 46px; height: 46px; border-radius: 12px;
          background: var(--paper); color: #111827;
          box-shadow: 0 4px 14px rgba(0,0,0,.08);
          transition: transform .12s ease, box-shadow .2s ease;
        }
        .icon:hover { transform: translateY(-1px); box-shadow: 0 8px 18px rgba(0,0,0,.12); }
      `}</style>
    </>
  );
}
