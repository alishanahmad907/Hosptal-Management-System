import React from 'react';
import {Link} from 'react-router-dom'
import {FaPhone,FaLocationArrow, Fa500Px} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Footer = () => {
    
  return (
    <>
        <footer className='container'>
            <hr />
            <div className="content">
                <div>
                    <img src="/logo.png" alt="logo" className='logo-img' />
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/appointment"}>Appointment</Link>
                        <Link to={"/about"}>About</Link>
                    </ul>
                </div>
                <div>
                    <h4>Hours</h4>
                    <li>Monday-Friday : 09:00 AM to 11:00 PM</li>
                    <li>Saturday-Sunday : 10:00 AM to 08:00 PM</li>
                    
                </div>
                <div>
                    <h4>Contact</h4>
                    <div><FaPhone/><span>999-999-999</span></div>
                    <div><MdEmail/><span>zeecare@gmail.com</span></div>
                    <div><FaLocationArrow/><span>Delhi, India</span></div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer