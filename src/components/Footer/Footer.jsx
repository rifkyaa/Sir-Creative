import React from 'react'
import "./Footer.css"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer__container footer'>
        <span className="footer__copy">
            &#169; Sir Creative. All rigths reserved
        </span>

        <div className="wrapper__icon">
            <a href="https://api.whatsapp.com/send?phone=6208814033362&text=Ada yang bisa kami bantu?" target="_blank" className='wrapper-link'>{" "}<FaWhatsapp className='icon-link'/></a>
            <a href="https://www.instagram.com/sircreative.id?igsh=MXB5NmZ2YzhyYWZwdA==" target="_blank" className='wrapper-link'><FaInstagram className='icon-link'/></a>
        </div>
    </footer>
  )
}

export default Footer