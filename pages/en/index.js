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
          content="Training and commercial coaching for B2B and B2C sales teams."
        />
      </Head>

      <section className="hero">
        <div className="wrap">
          <h1>We help you develop and professionalise your sales team</h1>
          <p className="sub">
            Training and commercial coaching for sales teams, focused on real conversations and execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Real cases</h2>

          <div className="grid">
            <article className="card">
              <h3>Consultative selling (B2B)</h3>
              <p>Structuring sales conversations and defending value in complex sales situations.</p>
            </article>

            <article className="card">
              <h3>Horizontal selling</h3>
              <p>Increasing average ticket size and developing existing customers.</p>
            </article>

            <article className="card">
              <h3>Handling objections</h3>
              <p>Practical training to manage price and competitive objections with confidence.</p>
            </article>

            <article className="card">
              <h3>Sales follow-up</h3>
              <p>Improving follow-up discipline to increase control and closing rates.</p>
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
