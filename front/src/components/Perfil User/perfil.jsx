import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css'
import logo from '../../images/LOGO.jpg'
import { Link } from 'react-router-dom';
import api from "../../services/api"
import {FiDelete} from "react-icons//fi";



const Perfil = () => {
    return(
        <>
        <Header />
      <div className="containner-perfil">
      <div className="header-perf">
        <span>Meu Cadastro</span> 
      </div>
      <div className="delete">
        <div className="text-perfil"> Dados Pessoais </div>
        <div className="btn-perfil-update"><button> Alterar Dados </button></div>
      </div>
      <div className="date-perfil">
        <div className="name">  Nome </div>
        <span></span>

      </div>
      <div className="date-perfil">
        <div className="name"> Sobrenome </div>
        <span> </span>
      </div>
      <div className="date-perfil">
        <div className="name">  E-mail</div>
        <span></span>
      </div>
      <div className="date-perfil">
        <div className="name">  Telefone </div>
        <span> </span>
      </div>
      <div className="date-perfil">
        <div className="name">  CPF </div>
        <span> </span>
      </div>
      <div className="date-perfil">
        <div className="name"> Data de Nascimento </div>
        <span> </span>
      </div>

      <div className="btn-dlt">
        <button className="btn-deleta">
            Deletar Perfil
        </button>
      </div>

      </div>
   
        </>
    )
}


export default Perfil;