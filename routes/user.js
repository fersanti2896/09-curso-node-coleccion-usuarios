
const { Router } = require('express');
const { usuariosGET, usuariosPOST, usuariosPUT, usuariosDELETE } = require('../controller/userController');

const router = Router();

router.get('/', usuariosGET);

router.post('/', usuariosPOST);

router.put('/:id', usuariosPUT);

router.delete('/', usuariosDELETE);

module.exports = router;