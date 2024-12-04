import React from 'react'
import JSCalcProject from './js-project/JSCalcProject'
import JSEcommerce1 from './js-project/JSEcommerce1'
import JSEcommerce2 from './js-project/JSEcommerce2'
import JSRandomProject from './js-project/JSRandomProject'
import JSTodoProject from './js-project/JSTodoProject'
import ProTodoReact from './react-project/ProTodoReact'
import ProCalcReact from './react-project/ProCalcReact'

function AllProjects() {
    return (
        <section className='all-projects'>
            <div className='container'>
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
