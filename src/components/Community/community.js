import React from 'react'
import './community.css'
import "aos/dist/aos.css"
import {FaTelegramPlane} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {SiDiscord} from 'react-icons/si'
import {BsMedium} from 'react-icons/bs'


function community() {
  return (
    <div>
      <div className='communityDiv' id='community'>
        <h1 className='communityTitle' data-aos="zoom-in"> Become a Poogleans... </h1>
        <p> One of the marvelous things about community is that it enables us
           to welcome and help people in a way we couldn't as individuals.</p>
        <ul className='comLists'>
          <li className='comList' data-aos="zoom-in"> <a href='/'target="_blank" className='comLink'> <FaTelegramPlane className='comIcon'/> </a></li>
          <li className='comList' data-aos="zoom-in"> <a href=' https://twitter.com/poogle_ai'target="_blank" className='comLink'> <IoLogoTwitter className='comIcon'/></a></li>
          <li className='comList' data-aos="zoom-in"> <a href='https://poogle.medium.com' className='comLink'> <BsMedium className='comIcon'/> </a></li>
    
        </ul>
      </div>
    </div>
  )
}

export default community