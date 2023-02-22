import React from 'react'
import './footer.css'

function footer() {
  return (
    <div>
        <div className='footer'>
            <div className='company'>
                <h1 className='commTitle'>Company</h1>
                <p>
                Poogle  is an AI meme token that had its ownership renounced and given to the community upon its creation.
                Created on the Binance Smart Chain network with contract renounced and Liquidity burnt in its creation, 
                Poogle has grown into a fully functional, decentralized, 100% community-driven project.
                </p>
          
            </div>
            <div className='disclaimer'>
            <h1 className='commTitle'> Legal Disclaimer</h1>
         <p>
     None of the information on this website should be construed as providing legal or financial advice. 
     Please note there are always risks associated with smart contracts. Please use at your own risk. 
     Poogle Meme Token is not a registered broker, analyst or investment advisor. If you have purchased Poogle,
     you agree that you are not purchasing a security or investment.
     The Poogle team can not be held liable for any losses or taxes you may incur.
     You also agree that the team representing the token is community members, and cannot modify the contract due to it being renounced.
    Do conduct your own due diligence and consult your financial advisor before making any investment decision
            </p>
         </div>
         
         <div className='socials'>
           <div className='community'>
           <h2 className='commTitle'> Community</h2>
            <ul>
                <li><a href='/' id='footerLink'> Telegram</a></li>
                <li> <a href='/' id='footerLink'> Discord</a></li>
            </ul>
           </div>

            <div className='connect'>
            <h2 className='commTitle'> Connect</h2>
            <ul>
                <li><a href='/' id='footerLink'>Twitter</a></li>
                <li><a href='/' id='footerLink'>Facebook</a></li>
                <li><a href='/' id='footerLink'>Instagram</a></li>
                
            </ul>
         </div>
         </div>

      


        </div>
    </div>
  )
}

export default footer