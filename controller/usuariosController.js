
const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGET = (req, res = response) => {
    const { q, name = 'Not found name', apikey, page = 1, limit } = req.query;

    res.status(200).json({
        msg: "GET API - Controlador",
        q, 
        name,
        apikey,
        page,
        limit
    });
}

const usuariosPOST = async(req, res = response) => {
    const { name, email, password, role } = req.body;
    const usuario = new Usuario({ name, email, password, role });

    /* Verificando si el email existe */
    
    /* Encriptando la contraseña */
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );
    /* Se guarda en BD */    
    await usuario.save();

    res.status(201).json({
        usuario
    });
}

const usuariosPUT = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: "PUT API - Controlador",
        id
    });
}

const usuariosDELETE = (req, res = response) => {
    res.json({
        msg: "DELETE API - Controlador"
    });
}

module.exports = {
    usuariosDELETE,
    usuariosGET,
    usuariosPOST,
    usuariosPUT
}