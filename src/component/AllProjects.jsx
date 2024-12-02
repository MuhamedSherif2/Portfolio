import React from 'react'
import JSCalcProject from './JSCalcProject'
import JSEcommerce1 from './JSEcommerce1'
import JSEcommerce2 from './JSEcommerce2'
import JSRandomProject from './JSRandomProject'
import JSTodoProject from './JSTodoProject'
import ProTodoReact from './ProTodoReact'
import ProCalcReact from './ProCalcReact'

function AllProjects() {
    return (
        <section className="allProject">
            <div className='all'>
                <JSCalcProject />
                <JSEcommerce1 />
                <JSEcommerce2 />
                <JSRandomProject />
                <JSTodoProject />
                <ProTodoReact />
                <ProCalcReact />
            </div>
        </section>
    )
}

export default AllProjects
