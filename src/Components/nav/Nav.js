import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from '../../../node_modules/react-icons/ai'
import {BiBook} from '../../../node_modules/react-icons/bi';
import {RiServiceFill} from '../../../node_modules/react-icons/ri';
import {IoMdContact} from '../../../node_modules/react-icons/io';
import { useState } from 'react';
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
    <nav>
    <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}  ><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active' : ''} ><AiOutlineUser/></a>
    <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'? 'active' : ''} ><BiBook/></a>
    <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'? 'active' : ''} ><RiServiceFill/></a>
    <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active' : ''} ><IoMdContact/></a>
    </nav>
  )
}

export default Nav
