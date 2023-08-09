
const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGET = (req, res = response) => {
    const { q, name = 'Not found name', apikey, page = 1, limit } = req.query;

    res.status(200).json({
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
    
    /* Encriptando la contraseña */
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );
    /* Se guarda en BD */    
    await usuario.save();

    res.status(200).json({
        usuario
    });
}

const usuariosPUT = async(req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, email, ...resto } = req.body;

    // TODO: Validar contra base de datos
    if( password ) {
        /* Encriptando la contraseña */
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    /* Actualiza el registro */
    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.status(200).json({
        usuario
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