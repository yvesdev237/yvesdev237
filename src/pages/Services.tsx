import useReveal from '../hooks/useReveal'

export default function Services(){
  useReveal()

  return (
    <section className="container">
      <h2>Services</h2>
      <div className="grid" style={{marginTop:16}}>
        <div className="card reveal">
          <h3>Frontend Development</h3>
          <p className="muted">Building production React applications </p>
          <ul className="muted" style={{marginTop:12}}>
            <li>Landing Pages</li>
            <li>Business Websites</li>
            <li>Personal Portfolio</li>
          </ul>
        </div>

        <div className="card reveal">
          <h3>React Application Development</h3>
          <p className="muted">I create dynamic and interactive web applications with React</p>
          <ul className="muted" style={{marginTop:12}}>
            <li>TO-DO App</li>
            <li>Tasks Managers</li>
            <li>Forms Authentication UI</li>
          </ul>
        </div>

        <div className="card reveal">
          <h3>UI Implementation & Design Code</h3>
          <p className="muted">I convert designs into clean , responsive and pixel-perfect websites.</p>
          <ul className="muted" style={{marginTop:12}}>
            <li>Figma</li>
            <li>Mobile-first Design</li>
            <li>UI Cleanup & Improvement</li>
          </ul>
        </div>
        <div className="card reveal">
          <h3>Websites Fixes & Improvements</h3>
          <p className="muted">I fix broken layouts, improve responsiveness, and add small features to existing websites.</p>
          <ul className="muted" style={{marginTop:12}}>
            <li>Fix broken layouts</li>
            <li>Improve responsiveness</li>
            <li>Bug fixing (FRONTEND)</li>
            <li>Small features additions</li>
          </ul>
        </div>
      </div>
      <div style={{textAlign:'center',marginTop:22}}>
        <a className="btn" href="/contact">Request a quote</a>
      </div>
    </section>
  )
}
