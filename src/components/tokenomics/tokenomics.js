import React from 'react'
import './tokenomics.css'
// import Aos from 'aos';
import "aos/dist/aos.css"


function tokenomics() {
  return (
    <div className='Tokenomics' id='tokenomics'>
      <div className='secondTokenomicsHero'>
        <div className='tokenomicsHead' data-aos="fade-up">
          <h2 className='title' > TOKENOMICS</h2>
        </div>
        <div className='secondTokenomicsDes'>
        <div className='secondTokenomicsCard' data-aos="zoom-in">
          <h1 className='figures2'>POOGLE</h1>
            <p className='figuresDes2'> Token-Name</p>
          </div>

          <div className='secondTokenomicsCard' data-aos="zoom-in">
          <h1 className='figures2'>PGL</h1>
            <p className='figuresDes2'> Token-Ticker</p>
          </div>

            <div className='secondTokenomicsCard' data-aos="zoom-in">
          <h1 className='figures2'>100 trillion</h1>
            <p className='figuresDes2'> Max-Supply</p>
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
          <h1 className='figures2'>BNB Chain (BSC)</h1>
            <p className='figuresDes2'>Network</p>
          </div>
        

          <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>35%</h1>
          <h2 className='descriptionTitle'> TOKEN SALE </h2>
          <p className='figuresDes'> 35% of max supply = 35T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>25%</h1>
          <h2 className='descriptionTitle'> LIQUIDITY </h2>
          <p className='figuresDes'>  25% of max supply = 25T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Community </h2>
          <p className='figuresDes'>  10% of max supply = 10T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Marketing </h2>
          <p className='figuresDes'>  10% of max supply = 10T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Developments</h2>
          <p className='figuresDes'>  10% of max supply = 10T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Chest </h2>
          <p className='figuresDes'>  10% of max supply = 10T</p>
        </div>
        </div>

        <div className='tokenomicsDescription'>
        {/* <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>35%</h1>
          <h2 className='descriptionTitle'> TOKEN SALE </h2>
          <p className='figuresDes'> 35% of max supply = 35T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>25%</h1>
          <h2 className='descriptionTitle'> LIQUIDITY </h2>
          <p className='figuresDes'>  25% of max supply = 25T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Community </h2>
          <p className='figuresDes'>  10% of max supply = 10T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Marketing </h2>
          <p className='figuresDes'>  10% of max supply = 10T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Developments</h2>
          <p className='figuresDes'>  10% of max supply = 10T</p>
        </div>

        <div className='tokenomicsCard' data-aos="zoom-in">
          <h1 className='figures'>10%</h1>
          <h2 className='descriptionTitle'> Chest </h2>
          <p className='figuresDes'>  10% of max supply = 10T</p>
        </div> */}

        </div>

      <div className='thirdtokenomicsdiv' data-aos="fade-in">
      <div className='thirdtokenomicsdescription'>
          <h2 className='thirdHeading'> 
          Community, Marketing, Development & Chest:
          </h2>
          <p className='Text'>10% will be initially unlocked at tokensale and then 5% to be unlocked every 3 months. 
          But the Chest will remain untouched until other allocations have been expended. </p>
        </div>

        <div  className='thirdtokenomicsdescription' data-aos="zoom-in">
          <h2 className='thirdHeading'> 
          Burn / Tax
          </h2>
          <p className='Text'>Quarterly burn using 50% accumulated tax. Remaining 50% will be for charity. 
      </p>
      <div  className='thirdtokenomicsdescription' data-aos="zoom-out">
        <h2 className='thirdHeading' id='thirdHeading'>   Unsold tokens</h2>
        <p className='Text' id='thirdHeading' >  will be burnt</p>
        </div>
        </div>
        {/* <div  className='thirdtokenomicsdescription' data-aos="zoom-out">
        <h2 className='thirdHeading' id='thirdHeading'>   Unsold tokens</h2>
        <p className='Text' id='thirdHeading' >  will be burnt</p>
        </div> */}
      </div>

        
      </div>
    </div>
  )
}

export default tokenomics