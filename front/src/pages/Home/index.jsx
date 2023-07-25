import React, { useEffect, useState } from 'react';
import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel02 from '../../components/Carrossel02/index'
import Carrossel from '../../components/Carrossel';
import NavCategoria from '../../components/NavCategoria';
import imgModal1 from "../../images/produtos/tendencia1.png"
import imgModal2 from "../../images/produtos/tendencia5.png"
import imgModal3 from "../../images/produtos/tendencia6.png"
import carroselNumber2Img1  from "../../images/banner02-ip-01.png"
import carroselNumber2Img2  from "../../images/banner02-ip-02.png"
import carroselNumber2Img3  from "../../images/banner02-ip-03.png"
import api from '../../services/api';
import Slider from 'react-slick';


function HomePage() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    const response = await api.get('product')
    setProducts(response.data)
  }

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  }



  return (
    <>
    <Header />
    <Carrossel />
    <NavCategoria />
    

  
    <section id="trending-section">
    <section className="zona_titulo">
      <h1 className="h1_titulo texto_garamond">As Melhores Tendencias</h1>
      <h2 className="h2_titulo texto_roboto">
        PARA QUEM QUER ESTILO E AUTONOMIA O TEMPO INTEIRO
      </h2>
      <span className="linha_texto"></span>
  </section>

    <div className="card-container">

      <a className="card-trending" href="#" >
        <img src={imgModal1} alt="Trending 1" id="tendencia_imagem1"/>
        <h3 id="title-tendencia1">Iphone Ronny</h3>
        <p></p>
      </a>

      <a className="card-trending" href="#">
        <img src={imgModal2} alt="Trending 2" id="tendencia_imagem2"/>
        <h3 id="title-tendencia2">Iphone Potter
        </h3>
        <p></p>
      </a>

      <a className="card-trending " href="#">
        <img src={imgModal3} alt="Trending 3" id="tendencia_imagem3"/>
        <h3 id="title-tendencia3">Iphone Hermione
        </h3>
        <p></p>
      </a>
    </div>
  </section>

  <div id="modal" className="modal">
    <div className="modal-content">
      <div className="modaltest">
      <span className="close">&times;</span>
      <img id="modal-image" src="trending-1.jpg" alt="Trending 1"/>
      <div className="modal-text-separation">
        <h3 id="modal-title"></h3>
        <p id="modal-description"></p>
        <a href=""><p id="modal-more"></p></a>
      </div>
      </div>
    </div>
  </div>

  
  <div className="index-carrossel carrossel2">
    <Slider {...settings}>
    <a className="slick-slide" href="#">
      <img src={carroselNumber2Img1} alt=""/>
    </a>
     <a className="slick-slide" href="#">
      <img src={carroselNumber2Img2} alt=""/>
    </a>
    <a className="slick-slide" href="#">
      <img src={carroselNumber2Img3} alt=""/>
    </a>
    </Slider>
  </div>


  <Carrossel02 />

  <div className="container products-wrapper">
    <div className="row">
      <div className="col-12">
        <h2 className="products-title">
          <section className="zona_titulo">
            <h1 className="h1_titulo texto_garamond">Ofertas</h1>
            <h2 className="h2_titulo texto_roboto">
                OFERTAS INCRIVEIS PELOS MELHORES PRODUTOS DO MERCADO
            </h2>
            <span className="linha_texto"></span>
        </section>
        </h2>
      </div>

     { /*<% // product id é um array onde eu seleciono pelo ID os produtos que eu quero q apareçam %>
      <% let productIds = [1,2,3,4,5]; %>
      <% // com a count eu defino quantos itens quero que apareçam na home %>
      <% let count = 0; %>
      <% products.filter((product) => productIds.includes(parseInt(product.id))).forEach((product) => {
        if (count < 8) {
          let finalPrice = (product.price * ((100 - product.discount) / 100)).toFixed(0) %>
          <div className="col-12 col-sm-6 col-lg-3">
            <section className="product-box">
              <a href="/product/detail/<%= product.id %>">
                <p>
                  <%= product.name %>
                </p>
                <figure className="product-box_image">
                  <img src="/images/produtos/<%= product.image %>" alt="imagem do produto">
                </figure>
                <article className="product-box_data">
                  <div className="priceOff">
                    <h3>
                      De R$ <%= product.price %> 
                   </h3>
                   <span>
                     <%= product.discount %> %OFF
                   </span>
                  </div>
                  <h2>
                    R$ <%= toThousand(finalPrice) %>,00
                  </h2>
                </article>
              </a>
            </section>
          </div>
          <% count++; 
        } 
      }); %>*/}
      
      <div className='card-produto'>
        <header>

        </header>

      </div>
      
      
    </div>
  </div>

      <script src="../../javascripts/index.js"/>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
      <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"/>
      <script src="https://code.iconify.design/2/2.2.1/iconify.min.js"/>
      <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"/>
    
      <script src="../../javascripts/carrossel.js"/>
    
       
      
    <Footer />
    </>
  );
}

export default HomePage;