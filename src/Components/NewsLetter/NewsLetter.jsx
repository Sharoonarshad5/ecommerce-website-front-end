import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='News-Letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscride to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email ID' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
