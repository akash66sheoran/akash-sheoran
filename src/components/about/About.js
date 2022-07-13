import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>

                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>5+ Worldwide</small>
                        </article>

                        <article className='about_card'>
                            <AiOutlineFundProjectionScreen className='about_icon' />
                            <h5>Projects</h5>
                            <small>2+ completed</small>
                        </article>
                    </div>

                    <p>An enthusiastic MERN stack web developer currently pursuing BTech degree 4th year in computer science engineering.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About