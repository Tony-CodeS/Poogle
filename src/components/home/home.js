import React from 'react'
import './home.css'

function home() {
  return (
    <div className='mainhero' id='Poogle'>
        <div className='transbox'>
            <div className='image-hero'>

            </div>
            <div className='hero-text-div'>
                <p className='p'> the text here will say everything about the project from the beginging,
                     i will be using some dummy text to illustrate it.the words should ne not less that 5oo
                     words or so in order to capture the beauty of the design and also improve some aspects when it concerns some 
                     the projects, i hope this dummy text is enough.... </p>

                     <div className='button-div'>
                     <button className='downloadbtn'>  Whitepaper</button>
                     <button className='communitybtn'> <a href='/' id='commLink'> Community</a> </button>
                     </div>
            </div>
            
        </div>
        <div className='variant'>
          <div className='variantImg'></div>
          <div  className='variantImg'></div>
          <div  className='variantImg'></div>
          <div  className='variantImg'></div>
          <div  className='variantImg'></div>
        </div>
    </div>
  )
}

export default home