import React from 'react'
import Img from './img/JS-random.png'
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function JSRandomProject() {
  return (
    <div>
      <div className='item'>
        <img src={Img} className='img' />
        <h2>Random Name</h2>
        <a href="https://randomname-lilac.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <FaEye />
        </a>
        <a href="https://github.com/MuhamedSherif2/To-Do-App"
          target="_blank"
          rel="noopener noreferrer">
            <FaCode />
        </a>
      </div>
    </div>
  )
}

export default JSRandomProject
