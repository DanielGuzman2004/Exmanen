const mongoose = require('mongoose')


const dbConnetion = async ()=>{
    try {
        mongoose.connect(process.env.MONGODB_CNN,{})
        console.log('Conectado con el servidor')
    } catch (error) {
        console.log('No se pudo conectar al servidor')
    }
}


module.exports={
    dbConnetion
}