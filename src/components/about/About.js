import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="" />
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
                            <AiOutlineFundProjectionScreen className='about_icon' />
                            <h5>Projects</h5>
                            <small>6+ completed</small>
                        </article>
                    </div>

                    <p>Enthusiastic student committed to learning, developing skills with latest
                        and on demand technologies. Adaptive and energetic with superior
                        performance in both independent and collaborative environments.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About