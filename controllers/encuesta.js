const Encuesta = require('../models/encuesta')

const getEncuesta = async(req, res)=>{
    const encuesta = await Encuesta.find()

    res.json({
        msg:'Encuesta GET API',
        encuesta
    })
}

const postEncuesta =async(req,res)=>{
    const {NombreEncuesta, Fecha, DocumentoEncuestado, NombreEncuestado, Edad, Genero, Empleado, Estado}=req.body

    const encuesta=new Encuesta({NombreEncuesta, Fecha, DocumentoEncuestado, NombreEncuestado, Edad, Genero, Empleado, Estado})
    await encuesta.save()

    res.json({
        msg:'Compra POST API',
        encuesta
    })
}


const putEncuesta = async(req, res)=>{
    const {DocumentoEncuestado}=req.body

    const encuesta = await Encuesta.findOneAndDelete({DocumentoEncuestado:DocumentoEncuestado})

    res.json({
        msg:'Encuesta API PUT',
        encuesta
    })
}


const patchEncuesta = async(req, res)=>{
    const {DocumentoEncuestado,}=req.body
    
    const encuesta = await Encuesta.findOneAndDelete({DocumentoEncuestado: DocumentoEncuestado})

    res.json({
        msg:'Encuesta API PATCH',
        encuesta
    })
}


const deleteEncuesta= async(req,res)=>{
    const {DocumentoEncuestado} = req.query

    const encuesta = await Encuesta.findOneAndDelete({DocumentoEncuestado: DocumentoEncuestado})

    res.json({
        msg:'Encuesta DELETE API',
        encuesta
    })
}



module.exports={
    getEncuesta,
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta

}