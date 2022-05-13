const express = require("express")

const app = express()

app.use(express.text()) //Utilizando el middleware para conversión de datos: texto
app.use(express.json()) //Utilizando el middleware para conversión de datos: json 

// "/": Indica que estamos visitando el home, inicio o raíz
app.get("/",function(peticion,respuesta){
    respuesta.send("Método GET")
})  

app.post("/ususarios",function(peticion,respuesta){
    console.log(peticion.body)
    const user =  peticion.body //String
    respuesta.send("Método POST: " + user)
})
    
app.put("/",function(peticion,respuesta){
    respuesta.send("Método PUT")
})

app.delete("/",function(peticion,respuesta){
    respuesta.send("Método DELETE")
})

app.post("/json",function(peticion,respuesta){
    const user = peticion.body
    
    respuesta.json({
        saludo :"Hola "+user.nombre,
        dirección: user.ciudad,
    })
})

//Mpe
app.listen(4000, ()=>{
    console.log("Escuchando: http://localhost:4000")
})