const express=require('express')
const cors = require('cors')
const {dbConnetion}=require('../database/config')//Vincula la conexion 

class Server{
    constructor(){
        this.app=express()
        this.port = process.env.port //puerto de la aplicasion 
        this.EncuestaPath = '/api/encuesta'

        this.conectarDB()

        this.middlewares()//incluir funcionalidades ala aplicasion
        this.routes()//incluir rutas
    }

    async conectarDB () {//Esperando la respuesta del servidor
        await dbConnetion()//Queda esperando respuesta
    }



    // cotras funcionalidades
    middlewares(){
        this.app.use(cors())//agregarle seguridad a la aplicasion
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes(){
        //this.app.use(this.usuariosPath,require('../routes/usuarios'));
        this.app.use(this.EncuestaPath,require('../routes/encuesta'));
    }

    listen(){
        this.app.listen(this.port,(req, res)=>{
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }

}

module.exports=Server