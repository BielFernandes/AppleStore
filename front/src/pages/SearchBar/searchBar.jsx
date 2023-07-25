import React,{useEffect, useState} from "react";
import './style.css';
import {AiOutlineArrowRight} from 'react-icons/ai'
import PageTitle from "../Carrinho/PageTitle";
import TableRow from "../Carrinho/TableRow";







function SearchBar() {
    const [cart, setCart] = useState([1]);

 

  return (
    <>
   <main>
      <PageTitle data={'Seu Carrinho'} />
    <div className="content-cart">
      <section className="list-product"> 
        <table>
          <thead>
            <tr>
              <th> Produto </th>
              <th> Preço </th>
              <th> Quantidade </th>
              <th> Total </th>
            </tr>
          </thead>
          
          <tbody>
            {cart.map((item) => (
            <TableRow />
             ))}
             {cart.length === 0 && 
             <tr>
                <td colSpan={5} style={{textAlign:'center', fontSize:'25px'}}> 
                  <b>Seu Carrinho Está Vazio </b>
                </td>
             </tr>
             }


            
          </tbody>
        </table>
      </section>
      
      <aside className="aside"> 
      <div className="box-resume">
        <header className="cbc">RESUMO DA COMPRA</header>

        <div className="info-resume">
          <div className="info-item"><span> Sub-total </span><span> R$ 418,00 </span></div>
          <div className="info-item"><span> Frete </span> <span> Gratuito </span></div>
        
        <div className="buttons-resume">
          <button className="btn-resume">
             Adicionas cupom de desconto <AiOutlineArrowRight /> 
          </button>
        </div>
        </div>

     
        <footer className="ftt"> <span> Total </span> <span> R$ 418,00 </span> </footer> 
        <button className="btn-finish"> Finalizar Compra </button>
      </div>
   </aside>
    </div>
   
   </main>
    
    </>
   
  )
}



export default SearchBar;