import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css'
import logo from '../../images/LOGO.jpg'
import { Link } from 'react-router-dom';
import api from "../../services/api"

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const handleLogin = async () => {
    const auth = {
      email: email,
      pwd: pwd
    }

    try {
      const response = await api.post('/login', auth)
      
      document.cookie = `auth=${response.data.token}; expires=${new Date(2100, 0, 1)}`
      navigate('/')
      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }
    
   return (<>
    <Header />

   <div className="containner-login texto_garamond">

    <div className="header-login "> 
       <div className="left-header-logion">  
          <img src={logo} alt=""/>
        </div>
        <div className="right-header-login">
          <p>100% seguro</p>
        </div>
    </div>

        <div className="text-login">
            <div className="login">
              <h1>Faça login</h1>
            </div>
           <div className="link-login"> 
           <Link to = "/cadastro"  className="link-login"> 
              Não sou cadastrado
           </Link> 
           </div>
        </div>

        {/*<% if (typeof errors !== 'undefined') { %>
          <ul className="div-errors">
            <% for(let error in errors) { %>
              <li> <%= errors[error].msg %> </li>
            <% } %>
          </ul>
            <% } %>*/}
  
        <div className="inputs-form-login">
          <div className="form-input-create-produto">
            <span className="label-input" >E-mail</span>
            <input type="email"  name="email" id="input-email" onChange={e => setEmail(e.target.value)} value={email}/>
            <span className="label-input">Senha</span>
            <input type="password" name="pwd" id="input-senha" value={pwd} onChange={e => setPwd(e.target.value)}/>
            <button type="submit" onClick={handleLogin} id="btn-login">Entrar</button>
        </div>
        </div>

   </div>


     <Footer />
    </>)

}

export default Login