import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Project() {
  return (
    <section>
      <nav>
        <Link to='all-projects'>All</Link>
        <Link to='javascript-projects'>Javascript</Link>
        <Link to='react-projects'>React</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </section>
  )
}

export default Project
