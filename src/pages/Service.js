import Footer from '@/comps/footer/Footer'
import Navbar from '@/comps/navbar/Navbar'
import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <>
      <Navbar/>
      <div className="about servicepage">
        <div className="abouttop">
            <div className="atext">
                <h2>Web Development</h2>
                <p className="ptext">
                Our web development services focus on creating dynamic, user-friendly, and scalable websites tailored to your business needs. From e-commerce platforms to content management systems, we ensure seamless functionality and a responsive design for optimal performance. Our experienced developers use the latest technologies to build websites that not only look great but also drive results. Whether you're starting from scratch or revamping an existing site, we deliver solutions that align with your goals and help you achieve online success.
                </p>
            </div>
            <div className="aimg">
                <div className="imagediv">
                    <img src="/webDev.jpg" alt="my image" />
                </div>
            </div>
        </div>


        <div className="aboutmiddle">
            <div className="aimg">
                <div className="imagediv">
                    <img src="/appDev2.jpg" alt="my image" />
                </div>
            </div>
            <div className="atext">
                <h2>Application Development</h2>
            <p className="ptext">
            We specialize in crafting robust and innovative applications designed to simplify your business processes and enhance user engagement. From native apps to cross-platform solutions, our team ensures that every application is efficient, secure, and tailored to meet your specific requirements. With a focus on intuitive user interfaces and cutting-edge technology, we transform your ideas into reality. Whether for Android, iOS, or the web, our applications are built to deliver exceptional performance and a seamless user experience.
            </p>
            </div>
        </div>

        <div className="abouttop">
            <div className="atext">
                <h2>Website Design</h2>
                <p className="ptext">
                Our website design services are all about creating visually stunning and user-centric designs that leave a lasting impression. We prioritize clean layouts, intuitive navigation, and responsive designs to ensure an engaging experience across all devices. By blending creativity with functionality, we craft designs that reflect your brand identity and captivate your audience. Whether you need a fresh design or a redesign of an existing website, our team is committed to delivering designs that drive conversions and foster trust.
                </p>
            </div>
            <div className="aimg">
                <div className="imagediv">
                    <img src="/webDesign2.jpg" alt="my image" />
                </div>
            </div>
        </div>



        <div className="aboutmiddle">
            <div className="aimg">
                <div className="imagediv">
                    <img src="/appDesign2.jpg" alt="my image" />
                </div>
            </div>
            <div className="atext">
                <h2>Application Design</h2>
            <p className="ptext">
            Our website design services are all about creating visually stunning and user-centric designs that leave a lasting impression. We prioritize clean layouts, intuitive navigation, and responsive designs to ensure an engaging experience across all devices. By blending creativity with functionality, we craft designs that reflect your brand identity and captivate your audience. Whether you need a fresh design or a redesign of an existing website, our team is committed to delivering designs that drive conversions and foster trust.
            </p>
            </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default About
