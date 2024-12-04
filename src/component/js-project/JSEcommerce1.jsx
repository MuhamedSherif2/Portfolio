import React from 'react'
import Img from './img/JS-ecommrce1.png'
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function JSEcommerce1() {
  return (
    <div>
      <div className='item'>
        <img src={Img} className='img' />
        <h2 className='fs-4 fw-bolder d-flex justify-content-center'>E-commerce</h2>
        <div className="a">
          <a href="https://e-commerce-mu-rust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
            <FaEye />
          </a>
          <a href="https://github.com/MuhamedSherif2/E-commerce"
            target="_blank"
            rel="noopener noreferrer">
            <FaCode />
          </a>
        </div>
      </div>
    </div>
  )
}

export default JSEcommerce1
