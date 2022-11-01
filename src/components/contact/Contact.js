import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>akash66sheoran@gmail.com</h5>
                        <a href="mailto:akash66sheoran@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+916239982589</h5>
                        <a href="https://wa.me/916239982589" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <AiFillPhone className='contact_option-icon' />
                        <h4>Phone</h4>
                        <h5>+916239982589</h5>
                        <a href="tel:916239982589" target='_blank' rel="noreferrer">Make a call</a>
                    </article>
                </div>

            </div>
            <ToastContainer />
        </section>
    )
}

export default Contact