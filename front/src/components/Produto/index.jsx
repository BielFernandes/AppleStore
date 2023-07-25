import React from 'react';
import './style.css'
import './reset.css'

function ProductPage({ products }) {
  return (
    <main className="main-watch">
      <aside className="aside-watch">
        <div className="title-aside">
          <h1>Apple</h1>
          <button id="toggle-button"> Filtros </button>
          <a href="/product/create">
            <button className="action-button-create">
              Criar novo item
            </button>
          </a>
        </div>

        <div className="line"></div>

        <div className="category-aside">
          <h2>Modelos</h2>
          <ul className="itens-list">
            <li className="item-aside">
              <input type="checkbox" id="modelo-1" name="modelo" value="modelo-1" />
              <label htmlFor="modelo-1">Modelo 1</label>
            </li>
            {/* Resto do código... */}
          </ul>

          <ul>
            <h2>Cor</h2>
            <li className="item-aside">
              <input type="checkbox" id="cor-prata" name="cor" value="prata" />
              <label htmlFor="cor-prata">Prata</label>
            </li>
            {/* Resto do código... */}
          </ul>

          <ul>
            <h2>Armazenamento</h2>
            <li className="item-aside">
              <input type="checkbox" id="cor-prata" name="cor" value="prata" />
              <label htmlFor="cor-prata">64GB</label>
            </li>
            {/* Resto do código... */}
          </ul>
        </div>
      </aside>

      <section className="watch-products">
        <div className="products-container">
        <h1>iPhone</h1>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
