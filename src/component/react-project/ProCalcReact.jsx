import React from 'react'
import Img from './img/react calc.png'
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function CalcReact() {
  return (
    <div className='calc'>
      <div className='item'>
        <img src={Img} className='img' />
        <h2>Calculator-React JS</h2>
        <div className="a">
          <a href="https://calculator-wheat-one-95.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <FaEye />
          </a>
          <a href="https://github.com/MuhamedSherif2/colculator-React-JS"
            target="_blank"
            rel="noopener noreferrer">
            <FaCode />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CalcReact;
