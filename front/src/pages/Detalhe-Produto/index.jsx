import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header/index";
import api from "../../services/api";
import { array } from "prop-types";

const DetalheProduto = () => {
  const location = useLocation();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const response = await api.get(`product/${location.state.id}`);
    setProduct(response.data);
  };

  const eventClick = () => {

    const obj_json = JSON.stringify(product)

    localStorage.setItem(`${product.id}`, obj_json)
    navigate('/cartshop') 
  }


  return (
    <>
      <Header />
      <div className="div-revendedor">
        {" "}
        <img src="http://localhost:3000/images/sela-garantia.png" alt="" /> A
        LOJA GARANTE <span> 90 DIAS </span> DE GARANTIA!
      </div>

      {product ? (
        <div className="teste">
          <div className="div-pai">
            <div className="div-img-produto">
              <img src={`http://localhost:3000/images/produtos/${product.image}`} alt="" srcset="" />
            </div>

            <div className="detalhes-produto">
              <h1>{product.name}</h1>
              <small className="small1">
                Vendido e entregue por Apple Space
              </small>
              <small className="small2">Ver detalhes do vendedor</small>
              <div className="div-div2"></div>
              <div className="div-price">
                <small>por: </small>
                <span className="value">10000</span>
                <small className="small-parcelas">
                  <span className="quantidade-parcelas">10x</span> de{" "}
                  <span className="span-valor">10000</span> sem juros no cartão
                </small>
              </div>
              <div className="div-div2"></div>
              <ul className="div-armazenamento">
                <h2>Armazenamento</h2>
                <li>8GB</li>
                <li>16GB</li>
                <li>32GB</li>
                <li>64GB</li>
                <li>128GB</li>
                <li>240GB</li>
              </ul>

              <ul className="div-armazenamento">
                <h2>Cor</h2>
                <li>8GB</li>
                <li>16GB</li>
                <li>32GB</li>
                <li>64GB</li>
                <li>128GB</li>
                <li>240GB</li>
              </ul>

              <div className="comprar-carrinho">
                <button className="button-comprar">COMPRAR</button>
    
                <button onClick={eventClick} id="butao-cart" className="button-carrinho">
                  ADICIONAR AO CARRINHO
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="div-carrossel-products">
        <h2>Conheça mais lançamentos</h2>
        <div className="div-div"></div>
      </div>
    </>
  );
};

export default DetalheProduto;
