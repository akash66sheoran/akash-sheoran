import React from 'react'
import './footer.css'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Akash Sheoran</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/akash-sheoran/" target='_blank' rel="noreferrer" ><BsLinkedin /></a>
                <a href="https://github.com/akash66sheoran" target='_blank' rel="noreferrer" ><FaGithub /></a>
                <a href="https://www.instagram.com/akash_sho/" target='_blank' rel="noreferrer" ><BsInstagram /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Akash Sheoran. All rights reserved</small>
            </div>

        </footer>
    )
}

export default Footer