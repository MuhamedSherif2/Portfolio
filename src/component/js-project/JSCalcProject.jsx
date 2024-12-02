import React from 'react'
import Img from './img/JS-calc.png'
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function JSCalcProject() {
  return (
    <div>
      <div className='item'>
        <img src={Img} className='img' />
        <h2>Calculator</h2>
        <div className="a">
          <a href="https://calculator-js-delta-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <FaEye />
          </a>
          <a href="https://github.com/MuhamedSherif2/Calculator-JS"
            target="_blank"
            rel="noopener noreferrer">
            <FaCode />
          </a>
        </div>
      </div>
    </div>
  )
}

export default JSCalcProject
