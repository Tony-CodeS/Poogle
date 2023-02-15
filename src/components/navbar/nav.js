import React from 'react'
// import bootstrap from 'bootstrap'
import './nav.css'

function nav() {
  return (
    <div className='main-div'>
        {/* starting webnav */}
    <div className='nav'>
        <h2 className='title'> SHIBA INU</h2>
        <ul className='ul'>
            <li className='li'>SHIBA</li>
            <li className='li'> Tokenomics</li>
            <li className='li'> Audits</li>
            <li className='li'> FAQs</li>
        </ul>
    </div>
    {/* ending webnav */}
    <div className='mobile-nav'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="http">SHIBA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">SHIBA</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Tokenomics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Audit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">FAQs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default nav