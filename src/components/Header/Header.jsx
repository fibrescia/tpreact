import React, { useState } from 'react';
import './Header.css'
import arrow_down from './assets/icon-arrow-down.svg'
import arrow_up from './assets/icon-arrow-up.svg'
import menu from './assets/icon-menu.svg'
import { Features } from '../Features/Features';
import { Company } from '../Company/Company';



const Header = () => {

    const [hoverFeatures,setHoverFeatures]=useState(false)
    const mostrar_features = () =>{
        setHoverFeatures(!hoverFeatures)
    }
    const [hoverCompany,setHoverCompany]=useState(false)
    const mostrar_company = () =>{
        setHoverCompany(!hoverCompany)
    }


    return(
        <header>
            <h1>snap</h1>
            <nav>
                <div className='nav_ancla' onMouseEnter={mostrar_features} onMouseLeave={mostrar_features}>
                    <a href="">Features</a>{!hoverFeatures ? <img src={arrow_down}/> : <img src={arrow_up}/>}

                    {hoverFeatures && <Features/>}
                    
                </div>

                <div className='nav_ancla'  onMouseEnter={mostrar_company} onMouseLeave={mostrar_company} >
                    <a href="">Company</a>{!hoverCompany ? <img src={arrow_down}/> : <img src={arrow_up}/>}
                    
                {hoverCompany && <Company/>} 

                </div>
                <a href="">Careers</a>
                <a href="">About</a>
            </nav>
            <div className='login'>
                <a href="">Login</a>
                <button>Register</button>
                <img className='icono' src={menu} alt="icono de menu" />
            </div>
        </header>
    )
}

export { Header }