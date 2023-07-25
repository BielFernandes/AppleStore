import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import "./style.css";
import imgNav from "../../images/produtos/iphonezenin.png";

const Estoque = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get("product");
    setProducts(response.data);
  };

  const productsFake = [
    { id: 1, name: "Iphone-red", image: "", price: "3500" },
    { id: 2, name: "Iphone-green", image: "", price: "3500" },
    { id: 3, name: "Iphone-blue", image: "", price: "3500" },
    { id: 4, name: "Iphone-black", image: "", price: "3500" },
  ];
  return (
    <>
      <Header />
      <main className="main-estoque container-fluid">
        <aside>
          <h2 className="fs-3">Filtros</h2>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <a href="#" className="nav-link ps-0" data-type="all">
                Todos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ps-0" data-type="iphone">
                iPhone
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ps-0" data-type="mac">
                Mac
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ps-0" data-type="ipad">
                iPad
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link ps-0" data-type="watch">
                Watch
              </a>
            </li>
          </ul>
        </aside>

        <div className="content">
          <div className="head">
            <h1 className="fs-1">Estoque</h1>

            <a href="/product-create">
              <button className="btn btn-info">Criar novo item</button>
            </a>
          </div>
          <div className="row">
            {productsFake.map((product, index) => {
              return (
                <div key={index} className="col-3">
                  <div className="card">
                    <img src={imgNav} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5>{product.name}</h5>
                      <p className="mt-3">R$ {product.price}</p>
                      <div className="botoes mt-4">
                        <a href="" className="card-link">
                          Editar
                        </a>
                        <a href="" className="card-link text-danger">
                          Remover Produto
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Estoque;
