import React from 'react'
import Img from './img/JS-ecommrce2.png'
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
function JSEcommerce2() {
  return (
    <div>
      <div className='item'>
        <img src={Img} className='img' />
        <h2>Dream-Phone</h2>
        <a href="https://apple-markt.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <FaEye />
        </a>
        <a href="https://github.com/MuhamedSherif2/Apple-markt"
          target="_blank"
          rel="noopener noreferrer">
            <FaCode />
        </a>
      </div>
    </div>
  )
}

export default JSEcommerce2
