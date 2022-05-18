const express = require("express")
const database = require("../libs/database")

const router = express.Router()

router.get("/users",function(req,res){     
    database.connection.query("SELECT * FROM users", function(error,result){   //Haciendo una consulta a la base de datos desde la ruta users
        console.log(error)
        console.log(result)
    })
    res.json({
        ruta: "users"
    })
})

router.get("/users",function(req,res){
    res.json({
        ruta:"users"
    })
})

router.get("/login",function(req,res){
    res.json({
        ruta:"login"
    })
})

router.get("/registro",function(req,res){
    res.json({
        ruta:"registro"
    })
})

module.exports = router // Exportando router