export default function Home() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
        padding: '4rem',
        backgroundColor: '#F5F6F8',
        color: '#111',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* --- HEADER CON SELECTOR DE IDIOMA --- */}
      <header
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '2rem',
          fontSize: '0.9rem',
        }}
      >
        <a
          href="/en"
          style={{
            textDecoration: 'none',
            color: '#2F5DFF',
            fontWeight: '600',
          }}
        >
          EN
        </a>
        <span style={{ margin: '0 0.5rem', color: '#888' }}> | </span>
        <span style={{ fontWeight: '600', color: '#111' }}>ES</span>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <h1 style={{ fontSize: '3rem', fontWeight: '700', marginTop: '2rem' }}>
        Luca Chiesa
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#444', marginBottom: '2rem' }}>
        Sales • Leadership • DISC
      </p>

      <a
        href="mailto:contact@lucachiesa.net"
        style={{
          backgroundColor: '#2F5DFF',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: '600',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        Contacta con Luca
      </a>

      {/* --- FOOTER --- */}
      <footer style={{ marginTop: '3rem', color: '#555' }}>
        <p>© 2025 Luca Chiesa</p>
        <div style={{ marginTop: '1rem' }}>
          <a
            href="mailto:contact@lucachiesa.net"
            style={{ marginRight: '1rem' }}
            aria-label="Email"
          >
            ✉️
          </a>
          <a
            href="https://www.linkedin.com/in/lucachiesa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            💼
          </a>
        </div>
      </footer>
    </div>
  );
}
