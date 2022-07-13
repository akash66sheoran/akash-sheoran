import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-item1.png'
import IMG2 from '../../assets/portfolio-item2.png'

const portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Donate or request covid medicines</h3>
                    <a href="https://github.com/akash66sheoran/covid-meds-donation" className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Order fresh fruits and vegetables online</h3>
                    <a href="https://github.com/akash66sheoran/Fresco" className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
                </article>
            </div>
        </section>
    )
}

export default portfolio