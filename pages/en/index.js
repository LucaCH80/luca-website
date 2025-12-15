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

      <header className="topbar">
        <div className="topbarInner">
          <nav className="lang">
            <a href="/">ES</a>
            <span className="dot">•</span>
            <span className="active">EN</span>
          </nav>
        </div>
      </header>

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
              Practical work with salespeople, from self-leadership to everyday execution.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>When it does not make sense to work together</h2>

          <p className="lead left">
            We prefer to be clear from the start. We are not always the right fit.
          </p>

          <div className="grid">
            <article className="card">
              <h3>It does not make sense if</h3>
              <ul className="bullets">
                <li>You are looking for a quick fix without team involvement.</li>
                <li>There is no openness to review habits and conversations.</li>
                <li>Training is expected to replace leadership or management.</li>
                <li>The focus is only on doing more, not selling better.</li>
                <li>There is no commitment to follow-through.</li>
              </ul>
            </article>

            <article className="card">
              <h3>It does make sense if</h3>
              <ul className="bullets">
                <li>You want to develop the team long term.</li>
                <li>You value judgement, practice and coaching.</li>
                <li>You are open to questioning how sales happen.</li>
                <li>You are looking for sustainable impact.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
      </footer>
    </>
  );
}
