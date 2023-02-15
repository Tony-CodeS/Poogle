import React from 'react'
import './tokenomics.css'
import {FaCoins} from 'react-icons/fa'
// import Marquee from "react-fast-marquee";

function tokenomics() {
  return (
    <div className='maintokenomicsdiv'>
      <div className='tokendiv'><FaCoins className='tokenIcon'/></div>
      <div>
        <h1 className='token-title'> TOKENOMICS</h1>
<div className='fff'>
<div className='tokenomics'>
          <h2 className='h2'> Reflection</h2>
            <p className='figures'>2%</p>
            <p>Fee redistributed to all holders including black hole.</p>

        </div>

        <div className='tokenomics'>
          <h2 className='h2'> Liquidity Accumulation</h2>
            <p className='figures'>2%</p>
            <p>Fee on sell trades, added to the liquidity pool by smart contract locked forever.</p>

        </div>

        <div className='tokenomics'>
          <h2 className='h2'> Burning</h2>
            <p className='figures'>60.04%</p>
            <p>Burnt to the black hole, getting bigger from the fees.</p>

        </div>
</div>
    

      </div>

      <div className='secondtokenomics'>
        <div  className='secondtokenomics-child'>
          <p className='value'>$0.627888</p>
          <p>price per billion</p>
        </div>
        <div  className='secondtokenomics-child'>
          <p className='value'>500,000</p>
          <p>holders</p>
        </div>
        <div  className='secondtokenomics-child'>
          <p className='value'>$24,978,78</p>
          <p>marketcap</p>
        </div>
        <div  className='secondtokenomics-child'>
          <p className='value'>100,000,000,000,000,000</p>
          <p>Total Supply</p>
        </div>
        <div className='secondtokenomics-child'>
        <p className='value'>60,041,578,287,711,290</p>
          <p>Total Burnt</p>
        </div>
        <div className='secondtokenomics-child'>
          <p className='value'>39,958,421,712,288,710</p>
          <p>Circulating Supply</p>
        </div>
      </div>

    </div>
  )
}

export default tokenomics