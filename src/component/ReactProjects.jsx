import React from 'react'
import ProTodoReact from './ProTodoReact'
import ProCalcReact from './ProCalcReact'

function ReactProjects() {
  return (
    <section className="reactProject">
      <div className='react'>
        <ProCalcReact />
        <ProTodoReact />
      </div>
    </section>
  )
}

export default ReactProjects
