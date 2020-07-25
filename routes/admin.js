const express = require("express")
const router = express.Router()

//rotas admin

router.get("/", (req, res) => {
    
    res.render("admin/index")
    
})

router.get("/posts", (req, res) => {
    res.send("Página de Posts")
})

router.get("/categorias", (req, res) => {
    res.send("Páginas categorias")
})

module.exports = router

