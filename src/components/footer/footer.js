import React from 'react'
import './footer.css'

function footer() {
  return (
    <div>
        <div className='footer'>
            <div className='company'>
                <h1>Company</h1>
                <p>
                Pitbull is a auto-staking token that had its ownership renounced and given to the community upon its creation.
                Created on March 17, 2021 on the Binance Smart Chain network with contract renounced and Liquidity burnt in its creation, 
                Pitbull has grown into a fully functional, decentralized, 100% community-driven project.
                </p>
                <div className='disclaimer'>
            <h1> Legal Disclaimer</h1>
         <p>
     None of the information on this website should be construed as providing legal or financial advice. 
     Please note there are always risks associated with smart contracts. Please use at your own risk. 
     PIT Token is not a registered broker, analyst or investment advisor. If you have purchased PIT,
     you agree that you are not purchasing a security or investment.
     The PIT team can not be held liable for any losses or taxes you may incur.
     You also agree that the team is representing the token is community members, and cannot modify the contract due to it being renounced.
    Do conduct your own due diligence and consult your financial advisor before making any investment decision
            </p>
         </div>
            </div>
         {/* <div className='disclaimer'>
            <h1> Legal Disclaimer</h1>
         <p>
     None of the information on this website should be construed as providing legal or financial advice. 
     Please note there are always risks associated with smart contracts. Please use at your own risk. 
     PIT Token is not a registered broker, analyst or investment advisor. If you have purchased PIT,
     you agree that you are not purchasing a security or investment.
     The PIT team can not be held liable for any losses or taxes you may incur.
     You also agree that the team is representing the token is community members, and cannot modify the contract due to it being renounced.
    Do conduct your own due diligence and consult your financial advisor before making any investment decision
            </p>
         </div> */}
         
         <div className='community'>
            <h2> Community</h2>
            <ul>
                <li> Telegram</li>
                <li> Discord</li>
            </ul>
         </div>

         <div className='connect'>
            <h2> Connect</h2>
            <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                
            </ul>
         </div>


        </div>
    </div>
  )
}

export default footer