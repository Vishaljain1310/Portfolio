
import {HiOutlineMail} from '../../../node_modules/react-icons/hi';
import {PiMessengerLogoBold} from '../../../node_modules/react-icons/pi';
import {BsWhatsapp} from '../../../node_modules/react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'
const Contact = () => {
  emailjs.init('iojlPKRwa92_wAx_3');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fj496nq', 'template_462nkxi', form.current, 'iojlPKRwa92_wAx_3')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
     };
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact__options">
         <article className='contact__option'>
          <HiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>vj6176723@gmail.com</h5>
          <a href="mailto:vj6176723@gmail.com" target='_blank'>Send a message</a>
         </article>
         <article className='contact__option'>
          <PiMessengerLogoBold className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>linkedin</h5>
          <a href="https://www.linkedin.com/in/vishal-jain-2120811b7/" target='_blank'>Send a message</a>
         </article>
         <article className='contact__option'>
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+919001371310</h5>
          <a href="https://api.whatsapp.com/send?phone+919001371310" target='_blank'>Send a message</a>
         </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='from_name' placeholder='Your Full Name' required/>
        <input type="email" name='from_email' placeholder='Your Email' required/>
        <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
