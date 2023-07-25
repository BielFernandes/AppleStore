import {React} from "react";
import './style.css';
import { RiDeleteBin6Line } from 'react-icons/ri';








function TableRow() {
    
    return(
        <>
         <tr>
              <td>
                <div className="product-cart">
                  <img className="img" src="" alt="" />
                </div>
                <div className="info"> 
                <div className="name-product"> Nome do Produto </div>
                <div className="category"> Categoria </div>
                </div>
              </td>
              <td>R$ 120,00</td>
              <td>
                <div className="qty">
                  <button className="btn-qty"> - </button>
                  <span> 2 </span>
                  <button className="btn-qty"> + </button>
                </div>
              </td>
              <td>R$ 240,00  </td>
              <td>
                <button className="remove" > <i className="bx-x"> <RiDeleteBin6Line />    </i> </button>
              </td>
            </tr>
        </>
    )
}




export default TableRow;