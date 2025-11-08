export default function HomeEN() {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
      padding: '4rem',
      backgroundColor: '#F5F6F8',
      color: '#111'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>Luca Chiesa</h1>
      <p style={{ fontSize: '1.25rem', color: '#444', marginBottom: '2rem' }}>
        Sales • Leadership • DISC
      </p>

      <a href="mailto:contact@lucachiesa.net" 
         style={{
           backgroundColor: '#2F5DF5',
           color: 'white',
           padding: '1rem 2rem',
           borderRadius: '12px',
           textDecoration: 'none',
           fontWeight: '600',
           boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
         }}>
         Contact Luca
      </a>

      <footer style={{ marginTop: '3rem', color: '#555' }}>
        <p>© 2025 Luca Chiesa</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="mailto:contact@lucachiesa.net" style={{ color: '#111' }}>✉️</a>
          <a href="https://www.linkedin.com/in/luca-chiesa/" style={{ color: '#2F5DF5' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
