import React from 'react'
import AdTemplateImage from './ad-Template-Img.jpg';
import './Adtemplete.css'
function Adtemplate() {
  return (
    <div className='ad-div'>
      <img src={AdTemplateImage} alt="" />
      <div className='content-placement'>
        <div className='dummy_content'></div>
      <dir className ='ad-content'>
        <p> <span style={{ color: 'red' }}>50% off</span> on seasonal items!</p>
        <button>BUY NOW</button>
      </dir>
      </div>
    </div>
  )
}

export default Adtemplate
