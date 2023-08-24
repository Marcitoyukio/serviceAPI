//app.js arquivo de config do nosso HTTP
const express = require('express') //import dos pacotes do express para o folder node_modules?
const app = express() //criar instancia do express
app.use(express.json())
const mongoose = require('mongoose')

mongoose.connect('mongodb://fiap:123456@localhost:27017/admin')

app.use(express.urlencoded({
    extended: true
}))

//Registro da model
require('./models/produto')

//Rotas
const produtoRouter = require('./routers/produto-route')

const index = require('./routers/index') //rota 1:25:15 aula 31

app.use('/', index) //aplicacao sera responsavel por expor as rotas do nosso servico
app.use('/produto', produtoRouter)

module.exports = app; //exportando o app com o module