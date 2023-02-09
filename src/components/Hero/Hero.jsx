import React from 'react';
import './Hero.css'
import hero_desktop from './assets/image-hero-desktop.png'
import hero_mobile from './assets/image-hero-mobile.png'
import footer_1 from './assets/client-databiz.svg'
import footer_2 from './assets/client-audiophile.svg'
import footer_3 from './assets/client-meet.svg'
import footer_4 from './assets/client-maker.svg' 



const Hero = () => {
    return(
        <section className='hero'>
            <div className='hero_texto'>
                <div className='hero_titulo'>
                    <h1>Make</h1> 
                        <h1>remote work</h1>
                </div>
                <p>Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>
                <button>Learn more</button>
                <footer>
                    <img src={footer_1} alt="" />
                    <img src={footer_2} alt="" />
                    <img src={footer_3} alt="" />
                    <img src={footer_4} alt="" />
                </footer>
            </div>
            <img className='hero_desktop' src={hero_desktop} alt="" />
            <img className='hero_mobile' src={hero_mobile} alt="" />
        </section>
    )
}

export { Hero }