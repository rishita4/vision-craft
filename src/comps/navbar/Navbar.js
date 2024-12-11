import Link from 'next/link'
import React from 'react'
// import "./navbar.css"

function Navbar() {
  return (
    <div className="container">
        <div className="navbar">
            <div className="nav70">
              <h2>Vision Craft</h2>
            </div>
            <div className="nav30">
              <div className="pages"><Link href = "/"> Home </Link></div>
              <div className="pages"><Link href = "/About">About</Link></div>
              <div className="pages"><Link href = "/Service">Services</Link></div>
              <div className="pages"><Link href = "/Apipage">API pages</Link></div>
              <div className="pages"><Link href = "/Contact">Contact</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
