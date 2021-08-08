import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper #4a148c purple darken-4 px1">
                <NavLink to="/" className="brand-logo">Logo</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/About">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}