import React from 'react'
import './style.css'
import div1img1 from '../../images/produtos/iphoneraengan1.png'
import div1img2 from '../../images/produtos/iphonerasenganultra.png'
import div1img3 from '../../images/produtos/iphonekamo.png'
import div1img4 from '../../images/produtos/iphoneluffy.png'
import Slider from 'react-slick';


const Carrossel02 = () => {
    const settings = {
        dots:true,
        infinite: true,
        speed: 600,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    
      }

      return( <>

    

<div id="product-carousel" className="carousel slide" data-bs-ride="carousel">


    <div className="carousel-inner">
    
        <div className="carousel-item active">
        
            <div className="row">
            <Slider {...settings}>
                <a href="product/detail/6" className="col-md-3 carrousel-card">
                    <img src={div1img1} alt="anel masculino" />
                    <h4>Product 1</h4>
                    <p>$9.99</p>
                </a>
                <a href="#" className="col-md-3 carrousel-card">
                    <img src={div1img2} alt="anel masculino" />
                    <h4>Product 2</h4>
                    <p>$19.99</p>
                </a>
                <a href="#" className="col-md-3 carrousel-card">
                    <img src={div1img3} />
                    <h4>Product 3</h4>
                    <p>$29.99</p>
                </a>
                <a href="#" className="col-md-3 carrousel-card">
                    <img src={div1img4} alt="anel masculino" />
                    <h4>Product 4</h4>
                    <p>$39.99</p>
                </a>
                <a href="#" className="col-md-3 carrousel-card">
                    <img src={div1img1} alt="anel masculino" />
                    <h4>Product 5</h4>
                    <p>$49.99</p>
                </a>
                <a href="#" className="col-md-3 carrousel-card">
                    <img src={div1img1} alt="anel masculino" />
                    <h4>Product 6</h4>
                    <p>$59.99</p>
                </a>
                <a href="#" className="col-md-3 carrousel-card">
                    <img src={div1img1} alt="anel masculino" />
                    <h4>Product 7</h4>
                    <p>$69.99</p>
                </a>
                <a href="#" className="col-md-3 carrousel-card">
                    <img src={div1img1} alt="anel masculino" />
                    <h4>Product 8</h4>
                    <p>$79.99</p>
                </a>
                </Slider>
            </div>
            
        </div>
       
    </div>
    {/* <button className="carousel-control-prev" type="button" data-bs-target="#product-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#product-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button> */}
    
</div>
</>
)

}

export default Carrossel02