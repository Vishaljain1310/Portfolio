import React from 'react'
import CV from '../../assets/CV.pdf'
const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} download className='btn'>Download</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  )
}

export default CTA
