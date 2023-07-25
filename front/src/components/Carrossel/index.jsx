import React from 'react';
import "./style.css";
import img1Carrossel from '../../images/banner-ip-01.png'
import img2Carrossel from '../../images/banner-ip-02.png'
import img3Carrossel from '../../images/banner-ip-03.png'
import Slider from 'react-slick';

const Carrossel = () => {

  const settings = {
    dots:true,
    infinite: true,
    speed: 600,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

  }

   return ( <>
    
      
    <div className="index-carrossel">
      <Slider {...settings}>
      
      <a className="slick-slide" href="#">
        <img src={img1Carrossel} alt=""/>
      </a>
       <a className="slick-slide" href="#">
        <img src={img2Carrossel} alt=""/>
      </a>
      <a className="slick-slide" href="#">
        <img src={img3Carrossel} alt=""/>
      </a>

      </Slider>

      </div>

    
      <div className="dots"></div>

     
    </>
    )
}

export default Carrossel