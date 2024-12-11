import React from 'react'

function Footer() {
  return (
    <div className="wrapper">
      <div className="boxes ">
        <h3>About</h3>
        <ul type = "none">
          <li>Our Company</li>
          <li>Core Team</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="boxes">
      <h3>Services</h3>
        <ul type = "none">
          <li>Web Development</li>
          <li>Application Development</li>
          <li>Website Design</li>
        </ul>
      </div>
      <div className="boxes">
      <h3>Resources</h3>
        <ul type = "none">
          <li>Blog</li>
          <li>Press releases</li>
          <li>Webinars</li>
        </ul>
      </div>
      <div className="boxes">
      <h3>Contact us</h3>
        <ul type = "none">
          <li>ourcompany@visioncraft.com</li> 
          <li>9897969509</li>
          
        </ul>
      </div>
    </div>
  )
}

export default Footer
