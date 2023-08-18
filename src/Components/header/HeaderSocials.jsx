import React from 'react'
import {BsLinkedin} from '../../../node_modules/react-icons/bs'
import {FaInstagram,FaGithubSquare} from '../../../node_modules/react-icons/fa'
const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/vishal-jain-2120811b7/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/Vishaljain1310" target='blank'><FaGithubSquare/></a>
        <a href="https://www.instagram.com/limitlessvishal/?hl=en" target='blank'><FaInstagram/></a>
      </div>
    </div>
  )
}

export default HeaderSocials
