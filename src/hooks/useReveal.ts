import { useEffect } from 'react'

export default function useReveal(selector = '.reveal'){
  useEffect(()=>{
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if(!nodes.length) return
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-visible')
        }
      })
    },{threshold:0.12})
    nodes.forEach(n=>io.observe(n))
    return ()=> io.disconnect()
  },[selector])
}
