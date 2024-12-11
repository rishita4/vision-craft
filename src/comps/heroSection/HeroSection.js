import React from 'react'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className="herosection">
      
      <div className="hero01">
        <h1>Empowering businesses with cutting-edge digital solutions through exceptional web and app development, design, and innovation.</h1>
        <button class = "herobutton"><Link href = '/Service'>Learn more</Link></button>
      </div>
    </div>
  )
}

export default HeroSection
