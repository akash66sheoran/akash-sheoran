import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d4dsvdt', 'template_lepn1k6', form.current, 'ez_AqLo_51_4mnfRV')

        e.target.reset()

        toast.success("Email sent successfully", {
            position: "top-center",
            theme: "colored"
        })

    };

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
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <input type="email" name='email' placeholder='Enter your email' required />
                    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Contact