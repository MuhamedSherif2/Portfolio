import React from 'react'
import Img from './img/React todo.png'
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";


function ProTodoReact() {
  return (
    <div className='todo'>
      <div className='item'>
        <img src={Img} className='img' />
        <h2 className='fs-4 fw-bolder d-flex justify-content-center'>To-do List-React JS</h2>
        <div className="a">
          <a href="https://to-do-list-eosin-nine-35.vercel.app"
            target="_blank"
            rel="noopener noreferrer">
            <FaEye />
          </a>
          <a href="https://github.com/MuhamedSherif2/To-Do-React-JS"
            target="_blank"
            rel="noopener noreferrer">
            <FaCode />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProTodoReact
