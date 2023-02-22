import React from 'react'
import logo from  '../../assets/Poogle.png'
// import bootstrap from 'bootstrap'
import './nav.css'

function nav() {
  return (
    <div className='main-div'>
        {/* starting webnav */}
  
    {/* ending webnav */}
    <div className='mobile-nav'>
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <div className='nav-logo'>
    <img src={logo} alt='imggg' id='imggg'/>
    <h2 id='poogleLinks'>POOGLE</h2>
    </div>
  {/* <img src={logo} width='50px' height='50px' alt='imggg'/>
    <a class="navbar-brand" href="http" id='poogleLinks'>POOGLE</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" id='span'>
      <span class="navbar-toggler-icon" ></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Poogle" id='poogleLink'>POOGLE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Tokenomics" id='poogleLink'>Tokenomics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/" id='poogleLink'>COMMUNITY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/" id='poogleLink'>FAQs</a>
        </li>

        <button className='launchBtn'> Launch App</button>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default nav