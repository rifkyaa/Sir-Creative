import React, { useState } from 'react'
import "./Header.css";
import icon_sir from "../../assets/logo-sir2.png"

const Header = () => {
    /*=============== Change Navbar Color ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
    })

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);

    
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="/">
                    <img src={icon_sir} alt="logo" className='icon_logo'/>
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className='nav__item'>
                            <a href="#work"
                                onClick={() => setActiveNav('#work')}
                                className="nav__link">
                                Work
                            </a>
                        </li>

                        <span className='slash'>|</span>

                        <li className='nav__item'>
                            <a href="#about"
                                onClick={() => setActiveNav('#about')}
                                className="nav__link">
                                About
                            </a>
                        </li>

                        <span className='slash'>|</span>

                        <li className='nav__item'>
                            <a href="#contact"
                                onClick={() => setActiveNav('#contact')}
                                className="nav__link">
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="nav__toggle">
                    <div className="wrapper-hamburger">
                            <label className='hamburger'>
                                <input type="checkbox" 
                                onClick={() => showMenu(!Toggle)}/>
                                <svg viewBox="0 0 32 32">
                                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                    <path className="line" d="M7 16 27 16"></path>
                                </svg>
                            </label>
                        </div>
                </div>
            </nav>
        </header>
    )
}

export default Header