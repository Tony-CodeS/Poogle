import React from 'react'
import Community from '../Community/community'
import './footer.css'

function footer() {
  return (
    <div>
        <div className='footer'>
            <Community/>
            <div className='disclaimer'>
            <h2 className='commTitle'> Legal Disclaimer</h2>
         <p id='disclaimerText'>
     None of the information on this website should be construed as providing legal or financial advice. 
     Please note there are always risks associated with smart contracts. Please use at your own risk. 
     The Poogle team can not be held liable for any losses or taxes you may incur.
     You also agree that the team representing the token is community members, and cannot modify the contract due to it being renounced.
    Do conduct your own due diligence and consult your financial advisor before making any investment decision
            </p>
         </div>
     

{/*          
         <div className='socials'>
           <div className='community'>
           <h2 className='commTitle'> Community</h2>
            <ul>
                <li><a href=' https://poogle.medium.com'target="_blank" id='footerLink'> Telegram</a></li>
                <li> <a href='/' id='footerLink'> Discord</a></li>
            </ul>
           </div>

            <div className='connect'>
            <h2 className='commTitle'> Connect</h2>
            <ul>
                <li><a href=' https://twitter.com/poogle_ai' target="_blank" id='footerLink'>Twitter</a></li>
                <li><a href='/' id='footerLink'>Facebook</a></li>
                <li><a href='/' id='footerLink'>Instagram</a></li>
                
            </ul>
         </div>
         </div> */}

      


        </div>
    </div>
  )
}

export default footer