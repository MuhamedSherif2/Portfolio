import React from 'react'

function Skills() {
    return (
        <section className="skills">
            <div className="container pt-5">
                <h2 className='fs-2 d-flex justify-content-center fw-bolder'>Skills</h2>
                <div className='mt-5'>
                    <h2>HTML: 100%</h2>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{backgroundColor: '#493628'}}>
                        <div className="progress-bar" style={{ width: "100%", backgroundColor:'#E4E0E1' }}></div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2>CSS: 100%</h2>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{backgroundColor: '#493628'}}>
                        <div className="progress-bar" style={{ width: "100%", backgroundColor:'#E4E0E1' }}></div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2>Bootstrap: 90%</h2>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{backgroundColor: '#493628'}}>
                        <div className="progress-bar" style={{ width: "90%", backgroundColor:'#E4E0E1' }}></div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2>Java-Script: 90%</h2>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{backgroundColor: '#493628'}}>
                        <div className="progress-bar" style={{ width: "90%", backgroundColor:'#E4E0E1' }}></div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h2>React JS: 75%</h2>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{backgroundColor: '#493628'}}>
                        <div className="progress-bar" style={{ width: "75%", backgroundColor:'#E4E0E1' }}></div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills
