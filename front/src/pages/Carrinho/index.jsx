import "./style.css";
import Header from "../../components/Header";
import SearchBar from "../SearchBar/searchBar";
import api from "../../services/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'



function Cartshop() {
      
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get("product");
    setProducts(response.data);
    return products.length
  };

  

  

const array = []

    for(let i = 0 ; i <= 1000 ; i++){
      if(localStorage.getItem([i]) !== null){
        array.push(JSON.parse(localStorage.getItem([i])))
      }
    }







  return (
    <>
      <Header />

    <div className="container-pai">
      <div className="container-carrinho">
        <div className="card-produto-carrinho">

          
        {array.map((item)=> (
            <>
            <h1>{item.name}</h1>

            </>
          ))}
            
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Cartshop;
