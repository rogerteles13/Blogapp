//carregando os módulos
const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require("mongoose")

//configurações

//bodyparer
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//moongoose

mongoose.connect("mongodb://localhost/blogapp").then(() => {
    console.log("Conetado ao Mongo")
}).catch((err) => {
    console.log("Erro ao se conectar ao Mongo", +err)
})

//configurndo a pasta public, dizendo pro express que os arq. estáticos estão na pasta public

app.use(express.static(path.join(__dirname,"public")))


//rotas

app.use("/admin", admin)

app.get("/", (req, res) => {
    res.send("Rota principal")
})




//Carregando Modulos



//outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor Rodando")
})