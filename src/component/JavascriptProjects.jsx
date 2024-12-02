import React from 'react'
import JSCalcProject from './js-project/JSCalcProject'
import JSRandomProject from './js-project/JSRandomProject'
import JSTodoProject from './js-project/JSTodoProject'
import JSEcommerce1 from './js-project/JSEcommerce1'
import JSEcommerce2 from './js-project/JSEcommerce2'

function JavascriptProjects() {
  return (
    <section className="reactProject">
      <div className='react'>
        <JSCalcProject />
        <JSRandomProject />
        <JSTodoProject />
        <JSEcommerce1 />
        <JSEcommerce2 />
      </div>
    </section>
  )
}

export default JavascriptProjects
