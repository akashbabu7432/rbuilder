import React from 'react'
import { FaMailchimp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiApple } from "react-icons/ci";
function Footer() {
  return (
    <div style={{height: '300px',backgroundColor: 'yellowgreen',color: 'white'}}
    className='d-flex justify-content-center align-items-center p-5 flex-column'>
        <h3>CONTACT US</h3>
        <h5 className='fw-bolder'><FaMailchimp />rbuilder@gmail.com</h5>
        <h5 className='fw-bolder'><FaPhoneAlt/>7994209899</h5>
        <h5 className='fw-bold'>Connect With Us</h5>
        <div className='d-flex justify-content-center align-items-center'>
            <FaFacebookF className='me-3'/>
            <FaInstagram className='me-3'/>
            <FaWhatsapp className='me-3'/>
            <CiApple className='me-3'/>



        </div>
        <p>Designed & Build with &hearts; using React</p>


    </div>
  )
}

export default Footer