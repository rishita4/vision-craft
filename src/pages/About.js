import Footer from '@/comps/footer/Footer'

// import type { NextPage } from 'next'
import Image from 'next/image'
// import ourMission from '../public/ourMission.jpg';
import Navbar from '@/comps/navbar/Navbar'
import React from 'react'

function About() {
  return (
    <>
      <Navbar/>
      <div className="about">
        <div className="abouttop">
            <div className="atext">
                <p className="ptext">
                At Vision Craft, we aspire to lead the digital transformation by creating web and mobile solutions that inspire and innovate. Our vision is to build a world where technology bridges gaps and drives progress, empowering individuals, businesses, and communities. We aim to deliver scalable, intuitive, and future-ready platforms that redefine user experiences. Through a commitment to excellence, creativity, and sustainability, we seek to be a trusted partner for our clients in their journey toward digital growth. By staying ahead of emerging trends, we ensure that our solutions not only meet but exceed the demands of an ever-evolving digital landscape.
                </p>
            </div>
            <div className="aimg">
                <div className="imagediv">
                    <img src="/ourVision.jpg" alt="my image" />
                </div>
            </div>
        </div>


        <div className="aboutmiddle">
            <div className="aimg">
                <div className="imagediv">
                    <img src="/ourMission.jpg" alt="my image" />
                </div>
            </div>
            <div className="atext">
            <p className="ptext">
            Our mission is to design and deliver web and app services that combine innovation, reliability, and user-centricity to help businesses thrive in the digital age. We are dedicated to transforming ideas into impactful digital products that provide seamless functionality and exceptional user engagement. By leveraging the latest technologies and personalized strategies, we ensure that our solutions are tailored to the unique needs of each client. Our commitment extends beyond service delivery; we strive to build lasting relationships, fostering trust and collaboration. Through continuous learning and adaptation, we aim to empower our clients to achieve their goals with confidence and agility.
            </p>
            </div>
        </div>



        <div className="aboutbottom">
            <h3>Our Company</h3>
            <p>
            Vision Craft specializes in providing innovative web and app solutions tailored to meet diverse business needs. With a focus on quality, creativity, and user experience, we empower clients to achieve their goals in the digital landscape. Our team combines expertise and passion to deliver exceptional results, ensuring lasting success.
            </p>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default About
