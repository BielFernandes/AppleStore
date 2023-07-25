import React from "react";

const Home = () => {
    return(
        <>
        <div className="index-carrossel">
    
      <a className="slick-slide" href="#">
        <img src="./images/banner-ip-01.png" alt=""/>
      </a>
       <a className="slick-slide" href="#">
        <img src="./images/banner-ip-02.png" alt=""/>
      </a>
      <a className="slick-slide" href="#">
        <img src="./images/banner-ip-03.png" alt=""/>
      </a>
      </div>
      <div className="dots"></div>
  
  {/*"include("partials/nav.categoria.ejs")*/}
  <section id="trending-section">
    <section className="zona_titulo">
      <h1 className="h1_titulo texto_garamond">As Melhores Tendencias</h1>
      <h2 className="h2_titulo texto_roboto">
        PARA QUEM QUER ESTILO E AUTONOMIA O TEMPO INTEIRO
      </h2>
      <span className="linha_texto"></span>
  </section>

    <div className="card-container">

      <a className="card-trending" href="#" onclick="showModal(event, 1)">
        <img src="./images/produtos/tendencia1.png" alt="Trending 1" id="tendencia_imagem1"/>
        <h3 id="title-tendencia1">Iphone Ronny</h3>
        <p></p>
      </a>

      <a className="card-trending" href="#" onclick="showModal(event, 2)">
        <img src="./images/produtos/tendencia5.png" alt="Trending 2" id="tendencia_imagem2"/>
        <h3 id="title-tendencia2">Iphone Potter
        </h3>
        <p></p>
      </a>

      <a className="card-trending " href="#" onclick="showModal(event, 3)">
        <img src="./images/produtos/tendencia6.png" alt="Trending 3" id="tendencia_imagem3"/>
        <h3 id="title-tendencia3">Iphone Hermione
        </h3>
        <p></p>
      </a>


    </div>
  </section>

  <div id="modal" className="modal">
    <div className="modal-content">
      <div className="modaltest">
      <span className="close" onclick="hideModal()">&times;</span>
      <img id="modal-image" src="trending-1.jpg" alt="Trending 1">
      <div className="modal-text-separation">
        <h3 id="modal-title"></h3>
        <p id="modal-description"></p>
      {/*<p id="modal-valor"></p> */} 
        <a href=""><p id="modal-more"></p></a>
      </div>
      </div>

    </div>
  </div>


  <div className="index-carrossel carrossel2">
    <a className="slick-slide" href="#">
      <img src="./images/banner02-ip-01.png" alt=""/>
    </a>
     <a className="slick-slide" href="#">
      <img src="./images/banner02-ip-02.png" alt=""/>
    </a>
    <a className="slick-slide" href="#">
      <img src="./images/banner02-ip-03.png" alt=""/>
    </a>
  </div>

  <!--originais apple   -->
  <div className="col-12 linha">
    <h2 className="products-title">
      <section className="zona_titulo">
        <h1 className="h1_titulo texto_garamond">Originais Apple   </h1>
        <h2 className="h2_titulo texto_roboto">
            Compre antes que acabe
        </h2>
        
    </section>
    </h2>
  
  

  {/*<%- include("partials/carroussel.ejs") %> 
                                                                  
  <!--fim originais apple   -->*/}



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
      <% // product id é um array onde eu seleciono pelo ID os produtos que eu quero q apareçam %>
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
      }); %>
      
      
      
      
    </div>
  </div>


   
    
     

     {/*  <%- include('partials/footer') %>


  <script src="./javascripts/index.js"></script>
    {/*  <!-- Incluindo o arquivo CSS da biblioteca Slick -->*/} 
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    
      <script src="./javascripts/carrossel.js"></script>
    

      
      <script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></script>
      <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>
      
  </>  
  )
}

export default Home;