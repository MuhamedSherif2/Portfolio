import React from 'react'
import JSCalcProject from './JSCalcProject'
import JSRandomProject from './JSRandomProject'
import JSTodoProject from './JSTodoProject'
import JSEcommerce1 from './JSEcommerce1'
import JSEcommerce2 from './JSEcommerce2'

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
