import React from 'react'
// import Aos from 'aos';
import "aos/dist/aos.css"
import './about.css'

function about() {
  return (
    <>
        <div className='About'>
            <div className='SecondAbout'>
                <h1 className='AboutTitle' data-aos="fade-up"> About Poogle</h1>
                <p className='AboutText' data-aos="zoom-in">
                As humanity evolves, AI will become deeply embedded or submerged in our daily lives, 
                and society will become more developed and transformed.
                 But with AI proliferation, 
                 comes many challenges such as the loss of jobs and the transfer or surrender of some mental and critical thinking to AI.
                  But man is the creator of AI and thus should drive the development, integration, and adoption to the full benefit of society.
                   Poogle.ai want to with the help of man - the community to help raise awareness of AI, 
                   its opportunities, and challenges as well as drive a new narrative of internet reputation in the web3 social space.
                 To wit, we call on all Poogleans to help contribute to the Poogle community mission.
                </p>
            </div>

            <div className='SecondAbout' id='Vision'>
                <h1 className='AboutTitle' data-aos="fade-up">Vision</h1>
                <p className='AboutText' data-aos="zoom-in">
                To help chart a social course that will define the true meaning of reputation in the AI powered world. 

                </p>
            </div>
        </div>

        
    </>
  )
}

export default about