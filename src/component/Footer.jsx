import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";


function Footer() {
    return (
        <div className='footer'>
            <div className='email'> 
                <Link to='https://muhamedsherif2612@gmail.com' target='page.com'>
                    <MdEmail /> muhamedsherif2612@gmail.com
                </Link>
            </div>

            <div className="line">
            </div>

            <div className='contact'>
                <div className='name'>
                    <h4>© <span>MOHAMMED</span> 2024 \ Build With React JS</h4>
                </div>
                <div className='links'>
                    <div className='link'>
                        <Link to='https://github.com/MuhamedSherif2' target='page.com'>
                            <FaGithub />
                        <p>GitHub</p>
                        </Link>
                    </div>
                    <div className='link'>
                        <Link to='https://www.linkedin.com/in/mohamed-sherif-mm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='page.com'>
                            <FaLinkedin />
                        <p>LinkedIn</p>
                        </Link>
                    </div>
                    <div className='link'>
                        <Link to='https://wa.me/qr/R4XJZ2JK2M76K1' target='page.com'>
                            <FaWhatsapp />
                        <p>WhatsApp</p>
                        </Link>
                    </div>
                    <div className='link'>
                        <Link to='https://vercel.com/mohamed-sherifs-projects-147e3199' target='page.com'>
                            <SiVercel />
                        <p>Vercel</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
