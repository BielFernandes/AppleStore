import React, { useEffect, useState } from "react";
import ImgLogo from "../../images/I-SPACE logo oficial.jpg";
import "./style.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import api from "../../services/api";
import { getCookie } from "../../utils"

const Header = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await api.get("user", { headers: { Authorization: getCookie('auth') } });
    setUser(response.data);
  };

  const primeiroNome = (nome) => {
    if(nome){
      const FirstName = nome.name.split(' ')
      return FirstName[0]
    }
  }


  return (
    <>
      <header className="header texto_garamond">
        <div className="div-topo">
          <div className="logoHeader">
            <a href="/">
              <img src={ImgLogo} alt="" id="img-logo" />
            </a>
          </div>
          <form className="form-header">
            <div className="input-pesquisar">
              <input
                className="input__searchHeader"
                type="search"
                placeholder="Pesquise"
                aria-label="Search"
              />
              <button className="button-send" type="submit">
                <BiSearchAlt className="iconsUser" />
              </button>
            </div>
          </form>
          <div className="div-user">

            {user ? (
        <>
        
        <li className="">
              <Link to="linka aqui a pagina de perfil do usuario">
                <FaUserCircle className="iconsUser" />
              </Link>
            </li>
            <li className="">
              <div className="textUser text">{primeiroNome(user).toUpperCase()}</div>
            </li>
            <li className="">
              <Link to="/cartshop">
                {" "}
                <LuShoppingCart className="iconsUser" />{" "}
              </Link>
            </li>

        </>
            ) : (
            
            
            <>
              <li className="">
              <Link to="/perfil">
                <FaUserCircle className="iconsUser" />
              </Link>
            </li>
            <li className="">
              <div className="textUser">Entre ou cadastre-se</div>
            </li>
            <li className="">
              <Link to="/cartshop">
                {" "}
                <LuShoppingCart className="iconsUser" />{" "}
              </Link>
            </li>
            </>
            
            )}

          </div>
        </div>

        <nav className="div-navbar">
          <ul className="ul-nav">
            <li className="/">
              <a className="" href="/">
                Inicio
              </a>
            </li>

            <li className="">
              <a className="" href="/productPage/iphone">
                Iphone
              </a>
            </li>
            <li className="">
              <a className="" href="/productPage/mac">
                Mac
              </a>
            </li>
            <li className="">
              <a className="" href="/productPage/ipad">
                Ipad
              </a>
            </li>

            <li className="">
              <a className="" href="/productPage/watch">
                Watch
              </a>
            </li>
            <li className="">
              <a className="" href="/estoque">
                Estoque
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
