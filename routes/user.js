
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGET, usuariosPOST, usuariosPUT, usuariosDELETE } = require('../controller/usuariosController');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGET);

router.post('/', [
    check('name', 'El nombre es obligatorio.').not().isEmpty(),
    check('email', 'El correo no es válido.').isEmail(),
    check('password', 'La contraseña debe ser más de 6 caracteres.').isLength(6),
    check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], usuariosPOST);

router.put('/:id', usuariosPUT);

router.delete('/', usuariosDELETE);

module.exports = router;