const express = require("express")
const router = express.Router()

//incluir dados do formulário no banco de dados.
const mongoose = require("mongoose")
const { Console } = require("console")
require("../models/Categoria")
const Categoria = mongoose.model("categorias")


//rotas admin

router.get('/',(req, res)=> {
    //res.render(__dirname +'/admin/index')
    res.render("admin/index")  
 })

router.get("/posts", (req, res) => {
    res.send("Página de Posts")
})

router.get("/categorias", (req, res) => {
    res.send("Páginas categorias")
})

//rota que vai puxar os dados do formulário

router.post("/categorias/nova", (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }

    new Categoria(novaCategoria).save().then(() => {
        console.log("categoria salva com sucesso!")
    }).catch((err) => {
        console.log("Erro ao salvar a categoria!")
    })
})

module.exports = router

/*const express = require('express')
const router = require('express').Router();


router.get('/',(req, res)=> {
   res.render(__dirname +'/admin/index')
})

router.get('/POST', (req, res) => {
     res.send("Pagina de categoriasasa")
})

router.get("/categorias", (req, res) => {
	res.send("Pagina de categoria")
})


module.exports = router*/


