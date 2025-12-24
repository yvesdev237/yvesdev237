import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.jpg'

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="nav" style={{position:'sticky',top:0,zIndex:80}}>
        <div className="brand">
          <img src={logo} alt="yves dev 237 logo" loading="lazy" />
          <div>
            <div className="brand-name">yves dev 237</div>
            <div className="muted" style={{fontSize:12}}>Frontend Developer</div>
          </div>
        </div>

        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <nav className="nav-links" aria-label="Primary navigation">
            <NavLink to="/" end className={({isActive})=>isActive? 'active':''}>Home</NavLink>
            <NavLink to="/projects" className={({isActive})=>isActive? 'active':''}>Projects</NavLink>
            <NavLink to="/services" className={({isActive})=>isActive? 'active':''}>Services</NavLink>
            <NavLink to="/about" className={({isActive})=>isActive? 'active':''}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive? 'active':''}>Contact</NavLink>
          </nav>

          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </header>

      {/* Off-canvas drawer + overlay for mobile */}
      <div className={`nav-drawer-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`nav-drawer ${open ? 'open' : ''}`} aria-hidden={!open} role="dialog">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:18}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <img src={logo} alt="yves dev 237" style={{width:42,height:42,borderRadius:8}} />
            <div>
              <div style={{fontWeight:700,color:'var(--accent)'}}>yves dev 237</div>
              <div className="muted" style={{fontSize:12}}>Frontend Developer</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close menu" style={{background:'transparent',border:'none',color:'var(--muted)'}}>✕</button>
        </div>

        <nav className="nav-links" onClick={() => setOpen(false)}>
          <NavLink to="/" end className={({isActive})=>isActive? 'active':''}>Home</NavLink>
          <NavLink to="/projects" className={({isActive})=>isActive? 'active':''}>Projects</NavLink>
          <NavLink to="/services" className={({isActive})=>isActive? 'active':''}>Services</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'active':''}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'active':''}>Contact</NavLink>
        </nav>
      </aside>
    </>
  )
}
