import React from "react"; 
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from "./pages/Home/index"
import Login from "./pages/Login/index"
import Cadastro from "./pages/Cadastro/index"
import CriarProduto from "./pages/Criar-Produto";
import Produtos from "./pages/Produtos";
import Cartshop from "./pages/Carrinho";
import DetalheProduto from "./pages/Detalhe-Produto";
import Estoque from "./pages/Estoque";
import Perfil from "./components/Perfil User/perfil"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home />}
            />

                 <Route
                  path="/product"
                  element={<Produtos/>}
                />

                <Route
                  path="/product-detail"
                  element={<DetalheProduto />}
                />

                <Route
                  path="/product-create"
                  element={<CriarProduto />}
                />
                <Route 
                  path="/user-login"
                  element={<Login />}
                />
                <Route 
                  path="/cadastro"
                  element={<Cadastro />}
                />
                <Route
                path="/perfil"
                element={<Perfil />}
                />
                <Route 
                path="/cartshop"
                element={<Cartshop />}
                />
                <Route 
                path="/estoque"
                element={<Estoque />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router