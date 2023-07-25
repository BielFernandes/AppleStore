import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";
import api from "../../services/api";
import { AiOutlineLineHeight } from "react-icons/ai";

const Produtos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get("product");
    setProducts(response.data);
  };


  return (
    <>
      <Header />

      <div className="container-pai">
        <div className="container-filtro">
          <ul className="ul-filtro">
            <li>
              <h3>Produto</h3>
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="8" /> iPhone
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="16" /> iPad
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="32" /> MacBook
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="64" /> SmartWatch
            </li>
          </ul>

          <ul className="ul-filtro">
            <li>
              <h3>Preços</h3>
            </li>
            <li>
              <input type="checkbox" name="price" id="" value="0-1000" /> 0-1000
            </li>
            <li>
              <input type="checkbox" name="price" id="" value="1001-2000" />{" "}
              1001-2000
            </li>
            <li>
              <input type="checkbox" name="price" id="" value="2001-3000" />{" "}
              2001-3000
            </li>
            <li>
              <input type="checkbox" name="price" id="" value="3001-4000" />{" "}
              3001-4000
            </li>
            <li>
              <input type="checkbox" name="price" id="" value="4001-5000" />{" "}
              4001-5000
            </li>
            <li>
              <input type="checkbox" name="price" id="" value="5001-6000" />{" "}
              5001-6000
            </li>
          </ul>

          <div className="div-separador"></div>

          <ul className="ul-filtro">
            <li>
              <h3>Armazenamento</h3>
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="8" /> 8GB
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="16" /> 1001-2000
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="32" /> 2001-3000
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="64" /> 3001-4000
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="128" /> 4001-5000
            </li>
            <li>
              <input type="checkbox" name="arm" id="" value="240" /> 5001-6000
            </li>
          </ul>

          <div className="div-separador"></div>

          <ul className="ul-filtro">
            <li>
              <h3>Cor</h3>
            </li>
            <li>
              <input type="checkbox" name="cor" id="" value="azul" /> Azul
            </li>
            <li>
              <input type="checkbox" name="cor" id="" value="cinza" /> Cinza
            </li>
            <li>
              <input type="checkbox" name="cor" id="" value="preto" />
              Preto
            </li>
            <li>
              <input type="checkbox" name="cor" id="" value="vermelho" />{" "}
              Vermelho
            </li>
            <li>
              <input type="checkbox" name="cor" id="" value="branco" /> Branco
            </li>
          </ul>
        </div>

        <div className="container-produtos">
          {products.map((item) => (
            <Link to="/product-detail" 
            state={{ id: item.id }}>
              
              <div key={item.id} className="card-produto">

                <header className="header-produto">
                  <h2>{item.name}</h2>
                  <img
                    src={`http://localhost:3000/images/produtos/${item.image}`}
                    alt=""
                  />
                </header>
                <div className="footer-produto">
                  {item.discount > 1 && (
                    <>
                    <div id="div-desconto">

                    <span id="valor">R$3000,00</span> <span id="span-oferta">10%OFF</span>

                    </div>
                    
                    
                    </>
                  )}
                  <div className="price">R${item.price}</div>
                  <div className="parcelas">10x ${item.price / 10}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Produtos;
