//Usando modulos nativos:
const path = require("path") //path: Nos permite administrar rutas 
//Usando modulos externos
const express =  require("express")
const port = 4000

//importanto router
const users = require("./routes/users")

const app = express()

//Sección para los middleware
app.use(express.static(path.join(__dirname,"static")))//Middleware para archivos estaticos

//Sección para los router
app.use(users) //Usando el router

//req: request, res: response
app.get("/",function(req,res){
    return res.sendFile(path.join(__dirname,"views","index.html"))
})

app.listen(port,()=>{
    console.log("Escuchando en: http://localhost:"+port)
})