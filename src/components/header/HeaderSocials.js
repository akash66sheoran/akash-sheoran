import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/akash-sheoran/" target='_blank' rel="noreferrer" ><BsLinkedin /></a>
            <a href="https://github.com/akash66sheoran" target='_blank' rel="noreferrer" ><FaGithub /></a>
            <a href="https://www.instagram.com/akash_sho/" target='_blank' rel="noreferrer" ><BsInstagram /></a>
        </div>
    )
}

export default HeaderSocials