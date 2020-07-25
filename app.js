//carregando os módulos
const express = require("express")
const handlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const { userInfo } = require("os")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
//const mongoose = require("mongoose")

//configurações

//bodyparer
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

//handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//moongoose (em breve)...

//configurndo a pasta public, arquivos estáticos

app.use(express.static(path.join(__dirname, "public")))


//rotas

app.get("/", (req, res) => {
    res.send("Rota principal")
})


app.use("/admin", admin)

//Carregando Modulos



//outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rodando")
})