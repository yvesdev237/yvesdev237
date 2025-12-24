import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function Home(){
  const heroRef = useRef<HTMLDivElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)
  const layerRef = useRef<HTMLDivElement | null>(null)
  useReveal()

  useEffect(()=>{
    let running = true
    let lastY = 0
    const el = heroRef.current
    const bg = bgRef.current
    const layer = layerRef.current

    function onScroll(){ lastY = window.scrollY }

    function raf(){
      if(!running) return
      const y = lastY
      if(el) el.style.transform = `translateY(${y * 0.08}px)`
      if(bg) bg.style.transform = `translateY(${y * 0.03}px) scale(1.03)`
      if(layer) layer.style.transform = `translateY(${y * 0.14}px)`
      requestAnimationFrame(raf)
    }

    window.addEventListener('scroll', onScroll, {passive:true})
    requestAnimationFrame(raf)
    return ()=>{
      running = false
      window.removeEventListener('scroll', onScroll)
    }
  },[])

  return (
    <section>
      <div className="hero">
        <div className="hero-bg" ref={bgRef} aria-hidden />
        <div className="hero-inner reveal" ref={heroRef}>
          <div className="hero-card">
            <div className="hero-copy">
              <h1>hi , I'm YVES DEV welcome to my world!</h1>
              <p className="muted">I build clean, accessible and performant frontends with modern tools.</p>
              <div className="cta">
                <a className="btn primary" href="/projects">View projects</a>
                <a className="btn secondary" href="/contact">Contact</a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden>
              <div className="visual-blob" />
            </div>
          </div>
        </div>
        <div className="hero-stats" aria-hidden>
          <div className="stat-card">
            <div className="value">1</div>
            <div className="label">Years Experience</div>
            <div className="small muted">Frontend projects, design systems and performance.</div>
          </div>
          <div className="stat-card">
            <div className="value">3</div>
            <div className="label">Projects Built</div>
            <div className="small muted">SPAs, PWAs and component libraries.</div>
          </div>
          <div className="stat-card">
            <div className="value">1</div>
            <div className="label">Clients Satisfied</div>
            <div className="small muted">Recurring clients and strong feedback.</div>
          </div>
        </div>
        <div className="hero-layer" ref={layerRef} aria-hidden />
      </div>

        <div className="container">
        <h2>Featured Services</h2>
        <div className="grid">
          <div className="card reveal">
            <div className="card-head">
              <div className="icon">🎨</div>
              <h3>UI Development</h3>
            </div>
            <p className="muted">Creating fast mobile-friendly websites that look great across all devices.</p>
          </div>
          <div className="card reveal">
            <div className="card-head">
              <div className="icon">⚡</div>
              <h3>Performance</h3>
            </div>
            <p className="muted">Optimized assets, lazy loading and best practices , Responsive bugs , and performance tweaks.</p>
          </div>
          <div className="card reveal">
            <div className="card-head">
              <div className="icon">🧩</div>
              <h3>Design Systems</h3>
            </div>
            <p className="muted">UI polish and Layout issues</p>
          </div>
        </div>
      </div>
    </section>
  )
}
