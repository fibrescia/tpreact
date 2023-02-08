import React from 'react';
import './Features.css'
import todo from './assets/icon-todo.svg'
import calendar from './assets/icon-calendar.svg'
import reminders from './assets/icon-reminders.svg'
import planning from './assets/icon-planning.svg'

const Features = () => {
    return(
        <ul className='features'>
            <li> <img src={todo} alt="" /> Todo List</li>
            <li> <img src={calendar} alt="" /> Calendar</li>
            <li> <img src={reminders} alt="" /> Reminders</li>
            <li> <img src={planning} alt="" /> Planning</li>
        </ul>
    )
}

export { Features }