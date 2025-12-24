import { useEffect } from 'react'
import useReveal from '../hooks/useReveal'
import profileImg from '../assets/profile.jpg'
import logo from '../assets/logo.jpg'

export default function About(){
  useReveal()

  useEffect(()=>{
    // animate skill bars on mount
    const els = document.querySelectorAll('.skill-bar > i')
    els.forEach((el)=>{
      const target = el.getAttribute('data-progress') || '0%'
      requestAnimationFrame(()=>{ el.setAttribute('style', `width:${target}`) })
    })
  },[])

  return (
    <section className="container">
      <h2>About Me</h2>

      <div className="about-grid">
        <aside className="card profile-card">
          <img src={profileImg} alt="Yves Dev 237" loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = logo }} />
          <div style={{textAlign:'center'}}>
            <div className="name">Yves Dev 237</div>
            <div className="role">Junior Frontend Developer</div>
            <div className="contact-links">
              <a className="btn" href="mailto:yvesdev237@gmail.com">Email</a>
              <a className="btn" href="https://github.com/yvesdev237/">GitHub</a>
            </div>
          </div>
        </aside>

        <div>
          <div className="card reveal">
            <p className="muted">Hi — I'm Yves, a junior front-end developer focused on building modern, reponsive and user-friendly web applications. I'm currently specializing in React , React Native and modern web technologies , I enjoy turning ideas into functional products that people can actually use. Right now i'm focused on growing as a developer , learning backend basics , and expanding into mobile development with React Native while building projects that reflect my progress</p>
          </div>

          <div className="card reveal" style={{marginTop:18}}>
            <h3>Skills</h3>
            <div className="skills">
              <div className="skill">
                <div className="label"><span>React</span><span className="muted">45%</span></div>
                <div className="skill-bar"><i data-progress="45%" style={{width:'0%'}}/></div>
              </div>
              <div className="skill">
                <div className="label"><span>TypeScript</span><span className="muted">15%</span></div>
                <div className="skill-bar"><i data-progress="15%" style={{width:'0%'}}/></div>
              </div>
              <div className="skill">
                <div className="label"><span>Tailwindcss</span><span className="muted">30%</span></div>
                <div className="skill-bar"><i data-progress="30%" style={{width:'0%'}}/></div>
              </div>
              <div className="skill">
                <div className="label"><span>React Native</span><span className="muted">5%</span></div>
                <div className="skill-bar"><i data-progress="5%" style={{width:'0%'}}/></div>
              </div>
            </div>
          </div>

          <div className="card reveal" style={{marginTop:18}}>
            <h3>History</h3>
            <div className="timeline">
              <div className="timeline-item">
                <strong>2025 — 2026 - Present</strong>
                <div className="muted">Software Engineering Student L2 — continuing to build web and mobile applications.</div>
              </div>
              <div className="timeline-item">
                <strong>2024 — 2025</strong>
                <div className="muted">Software Engineering Student L1 — learning web development basics and expanding into mobile development.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
