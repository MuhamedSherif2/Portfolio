import React from 'react'

function Skills() {
    return (
        <section className="skills">
            <div className="container pt-5">
                <h2 className='fs-2 d-flex justify-content-center fw-bolder'>Skills</h2>
                <div className='d-flex'>
                    <h2>HTML :</h2>
                    <div class="progress bg-info" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" style={{ width: "75%" }}></div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills
