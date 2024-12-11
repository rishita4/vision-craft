import Footer from '@/comps/footer/Footer'
import Navbar from '@/comps/navbar/Navbar'
import React from 'react'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="contact">
        <div className="chead">
            <h1>Contact Us</h1>
        </div>
        <div className="form">
            
                <form class = "formbox">
                    <div className="forminput">
                    <label>Name</label>
                    <input></input>
                    </div>

                    <div className="forminput">
                    <label>Email</label>
                    <input></input>
                    </div>

                    <div className="forminput">
                    <label>Contact No.</label>
                    <input></input>
                    </div>


                    <button className = "submitbutton1">Submit</button>
                </form>
            
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
