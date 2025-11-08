import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        {/* SEO básico */}
        <title>Luca Chiesa — Sales · Leadership · DISC</title>
        <meta
          name="description"
          content="Luca Chiesa — Sales, Leadership y DISC. Formación y consultoría comercial con enfoque humano y resultados medibles."
        />

        {/* Favicons (ya están en /public) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-512.png" />
        <meta name="theme-color" content="#E9A400" />

        {/* Mejora de tipografía (sistema) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="wrap">
        {/* Navegación mínima (opcional) */}
        <nav className="nav">
          <a href="/">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Hero */}
        <section className="hero">
          <h1>Luca Chiesa</h1>
          <p className="tagline">Sales · Leadership · DISC — website starter</p>
        </section>
      </main>

      <style jsx global>{`
        :root {
          --accent: #e9a400; /* Saffron cálido (a juego con tu favicon) */
          --text: #111;
          --muted: #6b7280;
          --bg: #ffffff;
        }
        html, body, #__next { height: 100%; }
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          color: var(--text);
          background: var(--bg);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .wrap {
          max-width: 920px;
          margin: 0 auto;
          padding: 24px 20px 64px;
        }
        /* NAV: mayúsculas, más pequeña y con aire */
        .nav {
          display: flex;
          gap: 18px;
          justify-content: flex-end;
          text-transform: uppercase;
          font-size: 13.5px;
          letter-spacing: 0.14em;
          margin: 8px 0 28px;
        }
        .nav a {
          color: var(--muted);
          text-decoration: none;
          padding: 8px 6px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nav a:hover {
          color: var(--text);
          background: rgba(233, 164, 0, 0.1); /* un toque de var(--accent) */
        }
        /* HERO */
        .hero {
          text-align: center;
          padding: 12vh 0 10vh;
        }
        h1 {
          margin: 0 0 12px;
          font-size: clamp(36px, 6vw, 56px);
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -0.02em;
        }
        .tagline {
          margin: 0;
          font-size: clamp(14px, 2.2vw, 18px);
          color: var(--muted);
        }
        /* Links generales */
        a { color: inherit; }
        a:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
      `}</style>
    </>
  );
}
