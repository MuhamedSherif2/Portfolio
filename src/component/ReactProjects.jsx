import React from 'react'
import ProTodoReact from './react-project/ProTodoReact'
import ProCalcReact from './react-project/ProCalcReact'

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
