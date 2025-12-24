import useReveal from '../hooks/useReveal'

export default function Projects(){
  useReveal()

  const items = [
    {id:1,title:'Portfolio Website',desc:'Personal portfolio built with React, Vite and TypeScript.',link:'/'}
  ]

  return (
    <section className="container">
      <h2>Projects</h2>
      <p className="muted">Selected projects showcasing architecture, accessibility and performance.</p>

      <div className="grid" style={{marginTop:18}}>
        {items.map(p=> (
          <article key={p.id} className="card reveal">
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <div style={{display:'flex',gap:10,marginTop:12}}>
              <a className="btn" href={p.link}>View</a>
              <a className="muted" href={p.link} style={{alignSelf:'center'}}>Source</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
