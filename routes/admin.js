//const express = require("express")
//const router = express.Router()

/*const express = require('express')
const router = require('express').Router();

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

module.exports = router*/

const express = require('express')
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


module.exports = router


