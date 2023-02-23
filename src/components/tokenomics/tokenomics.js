import React from 'react'
import './tokenomics.css'
// import Aos from 'aos';
import "aos/dist/aos.css"
import {FaCoins} from 'react-icons/fa'
// import Marquee from "react-fast-marquee";

function tokenomics() {
  return (
    <div className='Tokenomics' id='tokenomics'>
      <div className='secondTokenomicsHero'>
        <div className='tokenomicsHead' data-aos="fade-up">
          <FaCoins className='icon'/>
          <h2 className='title' > TOKENOMICS</h2>
          <FaCoins className='icon'/>
        </div>

        <div className='tokenomicsDescription'>
        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>35%</h1>
          <h2 className='descriptionTitle'> TOKEN SALE </h2>
          <p className='figuresDes'> Token sale 35% of max supply = 35T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>25%</h1>
          <h2 className='descriptionTitle'> LIQUIDITY </h2>
          <p className='figuresDes'>  25% of max supply = 25T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Community</h2>
          <p className='figuresDes'>  10% will be initially unlocked at tokensale and then 5% to be unlocked every 3 months.
           But the Chest will remain untouched until other allocations have been expended. </p>
        </div>
        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>50%</h1>
          <h2 className='descriptionTitle'> BURNING</h2>
          <p className='figuresDes'>  Quarterly burn using 50% accumulated tax.
           Remaining 50% will be for charity. Unsold tokens will be burnt </p>
        </div>
        </div>

        <div className='secondTokenomicsDes'>
          <div className='secondTokenomicsCard' data-aos="zoom-in">
            <h1 className='figures2'>$0.627</h1>
            <p className='figuresDes2'> Market-Price</p>
          </div>
          <div className='secondTokenomicsCard' data-aos="zoom-in">
          <h1 className='figures2'>1%</h1>
            <p className='figuresDes2'> Buy tax</p>
          </div>
          <div className='secondTokenomicsCard' data-aos="zoom-in">
          <h1 className='figures2'>1%</h1>
            <p className='figuresDes2'> sell tax</p>
          </div>
          <div className='secondTokenomicsCard' data-aos="zoom-in">
          <h1 className='figures2'>1 trillion</h1>
            <p className='figuresDes2'> Max-Supply</p>
          </div>
          <div className='secondTokenomicsCard' data-aos="zoom-in">
          <h1 className='figures2'>1M</h1>
            <p className='figuresDes2'> Community Members</p>
          </div>

          <div className='secondTokenomicsCard' data-aos="zoom-in">
          <h1 className='figures2'>1K+</h1>
            <p className='figuresDes2'> Projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default tokenomics