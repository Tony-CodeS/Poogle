import React from 'react'
import './community.css'
import {FaTelegramPlane} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {SiDiscord} from 'react-icons/si'
import {BsMedium} from 'react-icons/bs'


function community() {
  return (
    <div>
      <div className='communityDiv'>
        <h1 className='communityTitle'> Become a Poogleans... </h1>
        <p> One of the marvelous things about community is that it enables us
           to welcome and help people in a way we couldn't as individuals.</p>
        <ul className='comLists'>
          <li className='comList'> <a href='/' className='comLink'> <FaTelegramPlane className='comIcon'/> </a></li>
          <li className='comList'> <a href='/' className='comLink'> <IoLogoTwitter className='comIcon'/></a></li>
          <li className='comList'> <a href='/' className='comLink'><SiDiscord className='comIcon'/> </a></li>
          <li className='comList'> <a href='/' className='comLink'> <BsMedium className='comIcon'/> </a></li>
    
        </ul>
      </div>
    </div>
  )
}

export default community