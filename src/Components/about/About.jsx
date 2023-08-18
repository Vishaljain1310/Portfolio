import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from '../../../node_modules/react-icons/fa'
import {GiSkills} from '../../../node_modules/react-icons/gi'
import {VscFolderLibrary} from '../../../node_modules/react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Imag" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons"/>
              <h5>Experience</h5>
              <small>Entry Level</small>
            </article>

            <article className="about__card">
              <GiSkills className="about__icons"/>
              <h5>Skills</h5>
              <small>FullStack & Software Developer</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons"/>
              <h5>Projects</h5>
              <small>7+ project</small>
            </article>
          </div>
          <p>
          Innovative and dedicated Software Developer with a strong foundation in computer science and extensive hands-on experience in full-stack web development. 
          Proficient in designing, coding, testing, and debugging software applications, 
          combining technical expertise with a keen problem-solving ability. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
