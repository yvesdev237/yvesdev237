import { useState } from 'react'
import useReveal from '../hooks/useReveal'

export default function Contact(){
  useReveal()
  const [sent, setSent] = useState(false)

  return (
    <section className="container">
      <h2>Contact</h2>

      <div className="grid" style={{marginTop:16}}>
        <div className="card reveal">
          <h3>Say hello 👋</h3>
          <p className="muted">I’m open to new projects and collaborations. Drop a message—I'll usually reply within 24-48 hours. Prefer email or WhatsApp for quick replies.</p>
          <p className="help-text">Want a quote? Include project size, timeline and any links to designs or references.</p>
        </div>

        <div className="card reveal">
          <h3>Quick message</h3>
          {sent ? (
            <div className="muted">Thanks — your message has been recorded. I will get back to you shortly.</div>
          ) : (
            <form onSubmit={(e)=>{ e.preventDefault(); setSent(true) }}>
              <div className="form-grid">
                <input name="name" placeholder="Your name" className="form-field" required />
                <input name="email" placeholder="Email" className="form-field" required />
                <textarea name="message" placeholder="Message" rows={6} className="form-field message-box" required />
              </div>

              <div className="form-actions">
                <button className="btn" type="submit">Send message</button>
                <div className="help-text">Or email me at <a href="mailto:yvesdev237@gmail.com">yvesdev237@gmail.com</a></div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
