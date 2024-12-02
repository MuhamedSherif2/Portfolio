import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";

function Nav() {
    return (
        <header>
            <div className="container">
                <h2><span>M</span>OHAMMED</h2>
                <input type='checkbox' id='toggle' />
                <label htmlFor="toggle">
                    <CiMenuBurger />
                </label>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project'>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Nav

