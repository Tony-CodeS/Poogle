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
                Poogle is a token that's powered by a community of users who collaborate to build a thriving,
                community-driven artificial intelligence social meme ecosystem.
                Poogle leverages the capabilities of AI and machine learning to analyze market trends,
                coupled with a keen understanding of social media sentiment and user behavior.
                On Poogle, users are active participants in decision-making through democratic voting mechanisms,,
                ensuring transparency and accountability at every stage. The memecoin also provides rewards and incentives for those who are actively engaged, promoting shared ownership and greater involvement. By embracing this community-driven approach, Poogle creates a more inclusive, transparent,
              and user-friendly community in the realm of AI-powered social finance.
                </p>
            </div>

            <div className='SecondAbout' id='Vision'>
                <h1 className='AboutTitle' data-aos="fade-up">Vision</h1>
                <p className='AboutText' data-aos="zoom-in">
                To build a close-knit, collaborative,
                 more inclusive, and engaging social community
                  that benefits every member.


                </p>
            </div>
        </div>

        
    </>
  )
}

export default about