import React from 'react';
import "./Home.css";
import ppImg from "../../assets/sir-creative-pp.png"
import { FaLongArrowAltRight, FaRegBuilding, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { BsPersonBoundingBox } from "react-icons/bs";
import iconCompany from "../../assets/company.png"
import iconStore from "../../assets/store.png"
import iconPersonal from "../../assets/personal.png"
import iconMore from "../../assets/more.png"
import Data from '../../components/Data';

const Home = () => {
  const totalWeb = Data.length;
  
  return (
    <section className='home' id='home'>
      {/* Home */}
      <div className="homepage section">
        <div className="home__container container grid">
            <div className="home__content grid">
              <div className='home-content__title'>
                <h1 h1 className="home__title">We <span className='text-diff'>Build,</span> What You <span className='text-diff'>Want.</span></h1>
                <p className="home__subtitle">Transforming Your <b>Ideas</b> into Custom-Built Solutions, <b>Building</b> Your Website With <b>Happiness!</b></p>
                <a href="https://api.whatsapp.com/send?phone=6283129360168&text=Halo Admin! Bisa dibantu untuk informasi lebih lanjut?" target="_blank" className="contact__button">{" "}
                  <button className='home__btn btn1'>Consult Now</button>
                </a>
              </div>

              <img src={ppImg} alt="profile-picture" className='home__img'/>
            </div>
        </div>
      </div>
      {/* HomeEnd */}

      {/* About */}
      <div className='about-home section' id='about'>
        <div className="about__container container grid">
          <div className="about__content grid">
            <div className="about-content__title">
              <h1 className="about__title">What is <span className='text-diff__white'>SIR?</span></h1>
              <p className='about__subtitle'><b>SIR</b> is Web Developer Spesialist <b>Landing Page</b> Based in <b>Bandung, Indonesia</b>. Our Team Consist of Sutanto as Designer, Ilham as Analist, and Rifky as Programmer.</p>
            </div> 
            <div className="about-content__project">
              <div className="wrapper-content">
                <h1 className='title-no text-diff__white'>5</h1>
                <h4 className='subtitle-project'>Client</h4>
              </div> 
              <div className="wrapper-content left">
                <h1 className='title-no text-diff__white'>{totalWeb}</h1>
                <h4 className='subtitle-project'>Web</h4>
              </div> 
            </div>
          </div> 
        </div>
      </div>
      {/* AboutEnd */}
      
      {/* Service */}

      <div className="service section">
        <div className="service__container container">
          <div className="service__content grid">
            <h1 className="service__title">What We've <span className='text-diff'>Serve?</span></h1>
            <p className="service__subtitle">We can provide landing page of your needs, such as:</p>
            <div className="wrapper__content-service grid">
              <div className="wrapper__service">
                <img src={iconCompany} alt="" className="icon-service" />
                <h4 className="title__content-service">Company Profile</h4>
              </div>
              <div className="wrapper__service">
                <img src={iconStore} alt="" className="icon-service" />
                <h4 className="title__content-service">Online Shop</h4>
              </div>
              <div className="wrapper__service">
                <img src={iconPersonal} alt="" className="icon-service" />
                <h4 className="title__content-service">Portfolio</h4>
              </div>
              <div className="wrapper__service">
                <img src={iconMore} alt="" className="icon-service" />
                <h4 className="title__content-service">and More.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ServiceEnd */}

      {/* Work */}
      <div className="work section" id='work'>
        <div className="work__container container grid">
          <div className="work__content grid">
            <h1 className="work__title">What We've <span className='text-diff'>Done.</span></h1>
            <p className="work__subtitle">Here's some result of our Work</p>
            <div className="wrapper-project__work grid">

              {Data.map((item) => (
                <div className="content__work-project" key={item.id}>
                  <img src={item.image} alt="work" className='img-work'/>
                  <h1 className="title-img__work">{item.title}</h1>
                  <a href={item.link} target="_blank" className="wrapper__work-button">
                    <span>Visit</span>
                    <FaLongArrowAltRight className='icon-work'/>
                  </a>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
      {/* WorkEnd */}

      <div className="contact section" id='contact'>
        <div className="contact__container grid">
          <h1 className="contact__title">Let's <span className='text-diff__white'>Talk.</span></h1>
          <p className="contact__subtitle">Click one of our contacts to contact us</p>
          <div className="contact__content grid">
            <a href="mailto:sircreative3@gmail.com.com" target="_blank" className='wrapper-link'><AiOutlineMail className='icon-link'/> <span className='title-link'>Email: sircreative3@gmail.com</span></a>
            <a href="https://api.whatsapp.com/send?phone=6283129360168&text=Halo Admin! Bisa dibantu Informasi lebih lanjut??" target="_blank" className='wrapper-link'>{" "}<FaWhatsapp className='icon-link'/> <span className='title-link'>WA: +6283129360168</span> </a>
            <a href="https://www.instagram.com/sircreative.id?igsh=MXB5NmZ2YzhyYWZwdA==" target="_blank" className='wrapper-link'><FaInstagram className='icon-link'/> <span className='title-link'>IG: SIR Creative</span></a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Home