import React from 'react'
import './footer.css'
import {FaInstagram,FaGithubSquare,FaFacebook,FaTwitter} from '../../../node_modules/react-icons/fa'
// import BsFacebook from '../../../node_modules/react-icons/bs'
// import BsInstagram from '../../../node_modules/react-icons/bs'
const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>VJ</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className='footer__socials'>
      <a href="https://www.facebook.com/profile.php?id=100010409190203" target='_blank'><FaFacebook/></a>
      <a href="https://www.instagram.com/limitlessvishal/" target='_blank'><FaInstagram/></a>
      <a href="https://twitter.com/Vishalj26879062" target='_blank'><FaTwitter/></a>
    </div>

    <div className="footer__copyright">
       <small>&copy; VJ. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer
