import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getCookie } from "../../utils"
import api from "../../services/api"

const CriarProduto = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [idProductType, setIdProductType] = useState(1)
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [selectedImage, setSelectedImage] = useState()
  
   const handleSave = async () => {

    const formData = new FormData()
    formData.append('name', name)
    formData.append('type', idProductType)
    formData.append('price', price)
    formData.append('discount', discount)
    if (selectedImage)
        formData.append('', selectedImage)

    try {
      await api.post('/product', formData, { headers: { Authorization: getCookie('auth') } })

      alert('Produto criado com sucesso!')
      navigate('/')

    } catch (error) {
      //alert(error.response.data.error)

    }
  }
  
  console.log(getCookie('auth'))

    return (<>
    <Header />
    
<main className="mainCreate">
    <div className="container products-wrapper">
        <div className="row containertitle">
            <div className="col-12 createTitle">
                <h1 className="products-title">Formulário de Inclusão de Produto</h1>
            </div>
        </div>
        <div className="col-12 createFormulario">
            <div className="form01">
                <div className="row product-detail">
                    <div className="col-12 col-md-6 cardCreate">
                        <label htmlFor="name" className="form-label">Nome:</label>
                        <input type="text" id="name" name="name" placeholder="Informe o nome do produto" value={name} onChange={e=> setName(e.target.value)} className="form-input"/>
                    </div>
                    <div className="col-12 col-md-6 cardCreate">
                        <label htmlFor="price" className="form-label">Preço:</label>
                        <input type="number" id="price" name="price" placeholder="Informe o preço do produto"
                        value={price}
                        onChange={e => setPrice(e.target.value)} className="form-input"/>
                    </div>
                    <div className="col-12 col-md-6 cardCreate">
                        <label htmlFor="discount" className="form-label">Desconto:</label>
                        <input type="number" id="discount" name="discount" placeholder="Informe o desconto do produto"  value={discount}
                onChange={e => setDiscount(e.target.value)} className="form-input"/>
                    </div>
                    <div className="col-12 cardCreate">
                        <label for="type" className="form-label">Tipo:</label>
                        <select name="type" id="type" className="form-label" value={idProductType} onChange={e => setIdProductType(e.target.value)}>
                          <option value="1">iPhone</option>
                          <option value="2">Mac</option>
                          <option value="3">iPad</option>
                          <option value="4">Watch</option>
                        </select>
                        
                    </div>
                    <div className="col-12 col-md-6 cardCreate">
                        <label for="image" className="form-label">Imagem:</label>
                        <input type="file" onChange={e => setSelectedImage(e.target.files[0])} id="image" name="image" className="form-input input-img"/>
                    </div>
                    <div className="col-12 cardCreate">
                        <button onClick={handleSave} className="buy-now-button">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<Footer />
     
    </>)

}

export default CriarProduto