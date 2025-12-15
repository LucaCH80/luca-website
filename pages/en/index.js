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
            Training and commercial coaching focused on real conversations and execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Let’s talk about how to drive sales forward</h2>
          <p className="lead left">
            If you want to take a step forward in how your team sells,
            share your context and we will analyse it together, with focus and judgement.
          </p>
          <a href={`mailto:${email}?subject=${subject}&body=${body}`}>
            Email {email}
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Luca Chiesa</p>
      </footer>
    </>
  );
}
