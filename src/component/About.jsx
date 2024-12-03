import React from 'react'
import img from '../assets/IMG-20240908-WA0092.jpg'

function About() {
  return (
    <section className='about d-flex'>
      <div className='container d-flex align-items-center'>
        <div className='w-50'>
          <h3 className='fs-2 fw-bolder'>Hello, It's Me <br /> <span>Mohammed Sherif</span> <br /> And i'm </h3>
          <p className='fs-4 '>I'm a web Designer with experience for over 1 year.
            <br />expertise is to creat and website desing, front end design.
          </p>
        </div>

        <div className='w-50 d-flex justify-content-center '>
          <img src={img} className='about-img' />
        </div>
      </div>
    </section>
  )
}

export default About
