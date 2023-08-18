import React from 'react'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import './portfolio.css'
const data=[
  {
    id:1,
    image:IMG1,
    title:'Hotel Management Website',
    github:'https://github.com/Vishaljain1310/Scalar-Project.git',
    demo:'https://github.com/Vishaljain1310/Scalar-Project.git'
  },
  {
    id:2,
    image:IMG2,
    title:'Tindog website',
    github:'https://github.com/Vishaljain1310/tindog-website.git',
    demo:'https://vishaljain1310.github.io/tindog-website/'
  },
  {
    id:3,
    image:IMG3,
    title:'Sudoku solver',
    github:'https://github.com/Vishaljain1310/Sudoku-Solver-p.git',
    demo:' https://vishaljain1310.github.io/Sudoku-Solver-p/'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
     
     <h5>My Recent Work</h5>
     <h2>Portfolio</h2>
     <div className='container portfolio__container'>
      {
      data.map(({id,image,title,github,demo})=>{
       return (
      <article key={id} className='portfolio_item'>
      <div className='portfolio__item-image'>
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <div className='portfolio_item-cta'>
      <a href={github} className='btn' target='_blank'>Github</a>
      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>

      </article>
       )
      })
}
     </div>

    </section>
  )
}

export default Portfolio
