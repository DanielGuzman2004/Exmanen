const {Router}=require('express')
const router =Router()//obtener la funcion router

const {getEncuesta, postEncuesta,deleteEncuesta,putEncuesta, patchEncuesta}=require('../controllers/encuesta')
router.get('/',getEncuesta)
router.post('/',postEncuesta)
router.delete('/',deleteEncuesta)
router.put('/',putEncuesta)
router.patch('/',patchEncuesta)

// Exportar modulo
module.exports=router
