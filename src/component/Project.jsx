import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Project() {
  return (
    <section>
      <nav className='nav'>
        <div className="link">
          <NavLink to='all-projects'>All</NavLink>
          <NavLink to='javascript-projects'>Javascript</NavLink>
          <NavLink to='react-projects'>React</NavLink>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </section>
  )
}

export default Project
