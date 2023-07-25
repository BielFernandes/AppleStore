const log = require('./src/middlewares/log')
const cookieParser = require('cookie-parser')
const express = require('express');
const methodOverride = require('method-override');
const cors = require('cors')

const routes = require('./src/routes/index.routes');
const usersRoutes = require('./src/routes/users.routes');
const path = require("path")

const app = express()


// captura na forma de objeto literal tudo o que vem de um formulário
app.use(express.urlencoded({ extended: false }))
// converte as informações em formato JSON
app.use(express.json())


// métodos PUT e DELETE
app.use(methodOverride('_method'))

app.use(cookieParser())


// liberando acesso a pasta public
app.use(express.static(path.resolve("public")))

app.use(log)
// permitir o uso de req.body
app.use(express.urlencoded({extended: false}));
// Para funcionar o CORS
app.use(cors())

/* Middleware log acessar as rotas do usuario e registrando no arquivo log.txt */

/**
 * Rotas
 */
app.use(routes)


app.listen(3000, () => {
  console.log('Apple Space Online!')
})