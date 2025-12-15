import Head from "next/head";

export default function HomeEN() {
  const email = "contact@lucachiesa.net";
  const subject = encodeURIComponent("Website enquiry");
  const body = encodeURIComponent("Hi Luca,");

  return (
    <>
      <Head>
        <title>Luca Chiesa — Sales Team Development</title>
        <meta
          name="description"
          content="Training and commercial coaching for B2B and B2C sales teams. Sales, communication, motivation and DISC applied to daily performance."
        />
        <link rel="canonical" href="https://lucachiesa.net/en" />
        <link rel="alternate" hrefLang="es" href="https://lucachiesa.net/" />
        <link rel="alternate" hrefLang="en" href="https://lucachiesa.net/en" />
        <meta property="og:type" content="website" />
      </Head>

      {/* TOPBAR */}
      <header className="topbar">
        <div className="topbarInner">
          <nav className="lang">
            <a href="/">ES</a>
            <span className="dot">•</span>
            <span className="active">EN</span>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="heroCard">
            <h1>
              We help you develop and professionalise
              <br />
              your sales team
            </h1>

            <p className="kicker">Sales · Communication · Motivation · DISC</p>

            <p className="sub">
              Sales training and commercial coaching for B2B and B2C sales teams.
              Practical work with salespeople, from self-leadership to everyday commercial execution.
            </p>

            <div className="ctaRow">
              <a
                className="btn primary"
                href={`mailto:${email}?subject=${subject}&body=${body}`}
              >
                Talk for 15 minutes
              </a>

              <a className="btn ghost" href="#why">
                Our why
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
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section">
        <div className="wrap">
          <h2>Why we do this work</h2>

          <p className="lead left">
            Because selling is not just about techniques. It is about judgement, conversation and people.
          </p>

          <p className="lead left">
            Sales teams improve when they understand what they do, why they do it and how it impacts both
            results and relationships.
          </p>

          <p className="lead left">
            That is why we start from the inside out: developing habits, clarity and self-leadership
            to achieve real and sustainable improvement.
          </p>
        </div>
      </section>

      {/* HOW */}
      <section className="section">
        <div className="wrap">
          <h2>How we work</h2>

          <p className="lead left">
            We work to develop and professionalise sales teams, combining training, coaching and practical tools.
          </p>
        </div>
      </section>

      {/* WHAT */}
      <section id="services" className="section">
        <div className="wrap">
          <h2>What we do</h2>

          <div className="grid">
            <article className="card">
              <div className="badge">Training</div>
              <h3>Sales training for teams</h3>
              <p>Prospecting, sales meetings, value proposition, objection handling and closing.</p>
              <p>Practical content focused on daily sales activity.</p>
            </article>

            <article className="card">
              <div className="badge">Coaching</div>
              <h3>Commercial coaching for salespeople</h3>
              <p>Meeting preparation, role plays, observation and individual feedback.</p>
              <p>Turning training into habits and sustainable results.</p>
            </article>

            <article className="card">
              <div className="badge">DISC</div>
              <h3>DISC applied to sales and communication</h3>
              <p>Improving sales conversations by adapting communication to behavioural styles.</p>
              <p>Practical use of DISC in sales and negotiation.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="wrap">
          <h2>Who is behind this</h2>

          <div className="twoCol">
            <div className="panel">
              <p className="lead left">
                I’m Luca Chiesa. I’ve worked with sales teams for 15+ years across B2B and B2C contexts.
                My approach is practical: what we do in a session must hold up in everyday execution.
              </p>

              <ul className="bullets">
                <li>15+ years with sales teams (B2B & B2C)</li>
                <li>DISC certification applied to sales and communication</li>
                <li>Self-leadership and motivation as performance foundations</li>
                <li>International experience (Europe & Asia)</li>
              </ul>
            </div>

            <div className="panel soft">
              <h3>How it shows up in the work</h3>
              <p>
                Less “nice theory” and more practice: scripts, simulations, tough conversations and follow-up.
                We focus on clarity, judgement and habits.
              </p>
              <p className="muted">
                If you want, we can add 2–3 real cases here later (named or anonymised).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section">
        <div className="wrap">
          <h2>Typical outcomes</h2>
          <p className="lead left">
            Depending on the industry and starting point, these are common outcomes we aim for:
          </p>

          <div className="grid">
            <article className="card">
              <div className="badge">Pipeline</div>
              <h3>Better sales conversations</h3>
              <p>More structured meetings, better questions and clearer value propositions.</p>
            </article>

            <article className="card">
              <div className="badge">Closing</div>
              <h3>More control with objections</h3>
              <p>Handling price, competition and “let me think about it” with calm and judgement.</p>
            </article>

            <article className="card">
              <div className="badge">Team</div>
              <h3>Sustainable habits</h3>
              <p>Simple routines (prep, follow-up, focus) that maintain performance over time.</p>
            </article>
          </div>

          <p className="note">
            *No magic promises: we measure, train and consolidate habits. Transfer is the goal.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap contactBox">
          <h2>Tell us about your sales context</h2>

          <p className="lead left">
            If you want to develop or professionalise your sales team, briefly explain your situation and we will assess the fit.
          </p>

          <a
            className="btn primary"
            href={`mailto:${email}?subject=${subject}&body=${body}`}
          >
            Email {email}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
      </footer>

      {/* STYLES */}
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
        .lang .dot{margin:0 6px;}

        .hero{padding-top:20px;}
        .heroCard{
          background:var(--paper);
          border-radius:28px;
          padding:40px 32px;
          box-shadow:var(--shadow);
          text-align:center;
        }

        h1{font-size:42px;margin:0 0 16px;}
        h2{margin:0 0 12px;}
        h3{margin:0 0 8px;}
        .kicker{color:var(--muted);font-weight:600;}
        .sub{max-width:820px;margin:12px auto;color:var(--muted2);}

        .ctaRow{margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}
        .btn{padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:700;}
        .btn.primary{background:var(--brand);color:#fff;}
        .btn.ghost{background:#fff;border:1px solid #ddd;color:var(--ink);}

        .section{padding:60px 0;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;}
        .card{background:#fff;border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);}
        .badge{font-size:12px;font-weight:700;color:var(--brand); margin-bottom:10px;}
        .lead{color:var(--muted2); line-height:1.7; max-width:900px;}
        .lead.left{margin:0 0 12px;}
        .note{margin-top:12px;color:var(--muted);font-size:13px;}

        .twoCol{display:grid;grid-template-columns:1fr;gap:18px;margin-top:12px;}
        .panel{background:var(--paper);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);}
        .panel.soft{background:#f1f5ff;}
        .bullets{margin:12px 0 0;padding-left:18px;color:var(--muted2);line-height:1.7;}
        .muted{color:var(--muted);font-size:13px;margin-top:10px;}

        .contactBox{
          background:var(--paper);
          border-radius:28px;
          padding:28px 22px;
          box-shadow:var(--shadow);
        }

        .footer{text-align:center;color:var(--muted);padding:40px 0;}

        @media (min-width: 920px){
          .twoCol{grid-template-columns:1.15fr .85fr;}
        }
      `}</style>
    </>
  );
}
