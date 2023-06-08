import React from 'react'
import './main.css'
import boro from '../Images/boro.png';
import user from '../Images/images 1.png'
const Header = () => {
  return (
    <>
      <div className='head-wrapper'>
        <div className='header-boro'>
            <span><img src={boro} /></span>
            <span>Boro team</span>
            <span className='bi bi-caret-down-fill'></span>
            <span className='bi bi-plus-circle-fill'></span>
        </div>
        <div className='header-user'>
            <span><img src={user} /></span>
            <span>Zahra hasht..</span>
            <span className='bi bi-caret-down-fill'></span>
        </div>
      </div>
      <div className='head-wrapper mt-4'>
      <h3>Project statistic <span className='bi bi-question-circle-fill' style={{color:"#7166F9"}}></span></h3>
      <ul >
        <li>30 days</li>
        <li>90 days</li>
        <li>6 months</li>
        <li>12 months</li>
      </ul>
      </div>
    </>
  )
}

export default Header
