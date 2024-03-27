import React from 'react'
import '../App.css';

function Footer() {
  return (
    <div className='footer'>
    <div><img src="https://i.pinimg.com/564x/bc/ac/54/bcac54da3896325a193b75a355e92bf5.jpg" 
      height="40"
      width="40"
      alt="logo image"/>
  </div>

    <article  id="copy">
      <p>&copy; 2024 Play Quiz</p>
      <p>Created by Roxi Rose</p>
    </article>



    <div id="points">
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </div>
    </div>
  )
}

export default Footer