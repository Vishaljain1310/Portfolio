import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from '../../../node_modules/react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
     <h5>What Skills I Have</h5>
     <h2>My Experience</h2>

     <div className='container experience__container'>
        <div className="experience__Fronted">
          <h3>Fronted Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Html</h4>
               <small className='text-light'>Experineced</small>
             </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
              <div> <h4>Css</h4>
               <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div><h4>Javascript</h4>
               <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
               <small className='text-light'>Experineced</small>
              </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
            <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
          </div>
        </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
               <small className='text-light'>Experineced</small>
              </div>

            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>DSA</h4>
               <small className='text-light'>Experineced</small>
             </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>CP</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4>C++</h4>
               <small className='text-light'>Experineced</small>
             </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>SQL</h4>
               <small className='text-light'>Intermediate</small>
             </div>
            </article>
          </div>
      </div>
     </div>
    </section>
  )
}

export default Experience
