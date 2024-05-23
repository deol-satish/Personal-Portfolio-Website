import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef()

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_kpzxgqz', 'template_kk9ipl8', form.current, 'uKELRhBOpArKOozDJ')
  //   e.target.reset()
    
  // }

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>deol.satish@outlook.com</h5>
            <a href="mailto:deol.satish@outlook.com">Send a message</a>
          </article>
        </div>

        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/deol-satish/">LinkedIn</a>
          </article>
        </div>
      </div>    
    </section>
  )
}

export default Contacts