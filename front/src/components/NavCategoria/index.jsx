import React from 'react'
import './style.css'
import imgNav from '../../images/produtos/iphonezenin.png'
import imgNav2 from '../../images/produtos/ipadlevi.png'
import imgNav3 from '../../images/produtos/mackatsuiu.png'
import imgNav4 from '../../images/produtos/Apple Watch Nike1.png'

const NavCategoria = () => {
    return (<>
    <section className="categorias">
        <section className="zona_titulo">
            <h1 className="h1_titulo texto_garamond">Navegue por Categoria</h1>
            <h2 className="h2_titulo texto_roboto">
                TODA TECNOLOGIA CONTA UMA HISTÓRIA, ESCOLHA A SUA
            </h2>
            <span className="linha_texto"></span>
        </section>
        <section className="cartoes_categoria display_flex texto_garamond">
            <a href="/productPage/iphone" className="carton display_flex" >
                <img src={imgNav}alt="anel masculino" />
                <h3>Iphones</h3>
            </a>
            <a href="/productPage/ipad" className="carton display_flex">
                <img src={imgNav2} alt="anel masculino" />
                <h3>Ipads</h3>
            </a>
            <a href="/productPage/mac" className="carton display_flex">
                <img src={imgNav3} alt="anel masculino" />
                <h3>I Macs</h3>
            </a>
            <a href="/productPage/watch" className="carton display_flex">
                <img src={imgNav4} alt="anel masculino" />
                <h3>Apple Watches</h3>
            </a>
        </section>
    </section>
    </>)
}

export default NavCategoria