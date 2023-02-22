import React from 'react'
import './tokenomics.css'
import {FaCoins} from 'react-icons/fa'
// import Marquee from "react-fast-marquee";

function tokenomics() {
  return (
    <div className='Tokenomics'>
      <div className='secondTokenomicsHero'>
        <div className='tokenomicsHead'>
          <FaCoins className='icon'/>
          <h2 className='title'> TOKENOMICS</h2>
          <FaCoins className='icon'/>
        </div>

        <div className='tokenomicsDescription'>
        <div className='tokenomicsCard'>
          <h1 className='figures'>2%</h1>
          <h2 className='descriptionTitle'> REFLECTION </h2>
          <p className='figuresDes'> lorem ipsum lorem ipsum lorem ipsumlorem
          lorem ipsum lorem ipsum lorem ipsumlorem
           ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        </div>

        <div className='tokenomicsCard'>
          <h1 className='figures'>32%</h1>
          <h2 className='descriptionTitle'> LIQUIDITY </h2>
          <p className='figuresDes'> lorem ipsum lorem ipsum lorem ipsumlorem 
          lorem ipsum lorem ipsum lorem ipsumlorem
          ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        </div>

        <div className='tokenomicsCard'>
          <h1 className='figures'>60%</h1>
          <h2 className='descriptionTitle'> BURNING</h2>
          <p className='figuresDes'> lorem ipsum lorem ipsum lorem ipsumlorem
          lorem ipsum lorem ipsum lorem ipsumlorem
           ipsumlorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        </div>

        <div className='secondTokenomicsDes'>
          <div className='secondTokenomicsCard'>
            <h1 className='figures2'>$0.627</h1>
            <p className='figuresDes2'> Market-Price</p>
          </div>
          <div className='secondTokenomicsCard'>
          <h1 className='figures2'>4K</h1>
            <p className='figuresDes2'> Holders</p>
          </div>
          <div className='secondTokenomicsCard'>
          <h1 className='figures2'>$0.627</h1>
            <p className='figuresDes2'> Holders</p>
          </div>
          <div className='secondTokenomicsCard'>
          <h1 className='figures2'>500k</h1>
            <p className='figuresDes2'> Likes</p>
          </div>
          <div className='secondTokenomicsCard'>
          <h1 className='figures2'>1M</h1>
            <p className='figuresDes2'> Community Members</p>
          </div>

          <div className='secondTokenomicsCard'>
          <h1 className='figures2'>1M</h1>
            <p className='figuresDes2'> Community Members</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default tokenomics