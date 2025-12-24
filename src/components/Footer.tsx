export default function Footer(){
  return (
    <footer className="footer">
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        <div className="muted">© {new Date().getFullYear()} yves dev 237</div>
        <div className="muted" style={{fontSize:13}}>From concept to code - Crafting responsive web</div>
      </div>
      <div className="socials">
        <a href="https://github.com/yvesdev237/" aria-label="GitHub" target="_blank" rel="noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.803 5.623-5.475 5.921.43.37.815 1.103.815 2.222 0 1.604-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12 24 5.373 18.627 0 12 0z"/></svg>
        </a>
        <a href="https://facebook.com/profile.php?.id=100083755087524/" aria-label="Facebook" target="_blank" rel="noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.03 5.86 21.05 10.63 21.9v-6.98H8.33v-2.85h2.3V10.3c0-2.27 1.34-3.52 3.38-3.52.98 0 2.01.17 2.01.17v2.21h-1.13c-1.11 0-1.46.69-1.46 1.4v1.68h2.5l-.4 2.85h-2.1v6.98C18.14 21.05 22 17.03 22 12.07z"/></svg>
        </a>
        <a href="mailto:yvesdev237@gmail.com" aria-label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </a>
        <a href="https://wa.me/+237699959447" aria-label="WhatsApp" target="_blank" rel="noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.94 11.94 0 0012 0C5.372 0 .02 5.35 0 12c0 2.12.55 4.2 1.6 6.03L0 24l6.3-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.35 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.72 0-3.4-.45-4.86-1.3l-.35-.21-3.74.97.99-3.64-.24-.36A8.63 8.63 0 013.5 12c0-4.69 3.81-8.5 8.5-8.5 2.27 0 4.41.89 6.02 2.5A8.44 8.44 0 0120.5 12c0 4.69-3.81 8.5-8.5 8.5z"/></svg>
        </a>
      </div>
    </footer>
  )
}
