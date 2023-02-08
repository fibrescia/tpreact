import React from 'react';
import arrow_down from './assets/icon-arrow-down.svg'
import arrow_up from './assets/icon-arrow-up.svg'
import close from './assets/icon-close-menu.svg'
import todo from './assets/icon-todo.svg'
import calendar from './assets/icon-calendar.svg'
import reminders from './assets/icon-reminders.svg'
import planning from './assets/icon-planning.svg'
import './MenuMobile.css'

const MenuMobile
 = () => {
    return(
        <ul className='menu_mobile'>
            <img src={close} alt="" />
            <li>
                <a>Features</a><img src={arrow_down}/><img src={arrow_up}/>
            </li>
                <ul className='features_mobile'>
                <li> <img src={todo} alt="" /> Todo List</li>
                <li> <img src={calendar} alt="" /> Calendar</li>
                <li> <img src={reminders} alt="" /> Reminders</li>
                <li> <img src={planning} alt="" /> Planning</li>
                </ul>
            <li>
                <a>Company</a><img src={arrow_down}/><img src={arrow_up}/>                   
            </li>
            <ul className='company_mobile'>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
        </ul>
            <li>
            <a href="">Careers</a>
            </li>
            <li>
            <a href="">About</a>
            </li>
            <button className='log'>Login</button>
            <button className='reg'>Register</button>
        </ul>
    )
}

export { MenuMobile}