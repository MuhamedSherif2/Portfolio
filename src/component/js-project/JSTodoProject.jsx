import React from 'react'
import Img from './img/JS-todo.png'
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function JSTodoProject() {
  return (
    <div>
      <div className='item'>
        <img src={Img} className='img' />
        <h2>To-do List</h2>
        <a href="https://to-do-list-app-two-vert.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <FaEye />
        </a>
        <a href="https://github.com/MuhamedSherif2/To-Do-List-App"
          target="_blank"
          rel="noopener noreferrer">
            <FaCode />
        </a>
      </div>
    </div>
  )
}

export default JSTodoProject
