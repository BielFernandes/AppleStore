import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import './style.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from "../../services/api"
import logo from '../../images/LOGO.jpg'
import { Link } from 'react-router-dom';




const Cadastro = () =>{

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

    
  const handleSave = async () => {
    const user = {
      name: name,
      email: email,
      pwd: pwd
    }

    try {
      await api.post('/create', user)

      alert('Usuário criado com sucesso!')
      navigate('/')

    } catch (error) {
      alert(error.response.data.error)
    }
  }



    return (
      <>
      <Header />
      
      <div className="body-cadastro texto_garamond">

<div
>
{/*<% if (typeof errors !== 'undefined') { %>
  <ul className="div-errors" style="color: red;">
    <% for(let error in errors) { %>
      <li> <%= errors[error].msg %> </li>
    <% } %>
  </ul>
    <% } %>*/}
  <div className="divForm">

    <div className="header-cadastro">
       <div className="left-header-logion">  
          <img src={logo} alt=""/>
        </div>
        <div className="right-header-login">
          <p>100% seguro</p>
        </div>
    </div>

        <div className="text-cadastro">
            <div className="cadastro">
              <h1>Faça Seu Cadastro</h1>
            </div>
           <div className="link-login"> 
           <Link to = "/perfil"  className="link-login"> 
              Perfil usuario
           </Link> 
           </div>
    </div>

    <div className="divInput">
    <div className="labelCadastro">Nome</div>
    <input type="text" name="name"  value={name} onChange={e=> setName(e.target.value)} />
    </div>

    <div className="divInput">
    <div className="labelCadastro">Email</div>
    <input type="text" name="email"  value={email} onChange={e=> setEmail(e.target.value)} />
    </div>

    <div className="divInput">
    <div className="labelCadastro">Senha</div>
    <input type="text" name="pwd"  value={pwd} onChange={e=> setPwd(e.target.value)} />
    </div>

    <div className="divInput">
    <div className="labelCadastro">Confirmação de senha</div>
    <input type="text"/>
    </div>

    <button onClick={handleSave} className="btn-cadastr">
      Cadastre-se
    </button>
  </div>
</div>
</div>
       <Footer />
      </>
    )

}

export default Cadastro