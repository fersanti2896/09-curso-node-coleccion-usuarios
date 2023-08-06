
const { response } = require('express');

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

const usuariosPOST = (req, res = response) => {
    const { name, age } = req.body;

    res.status(201).json({
        msg: "POST API - Controlador",
        name, 
        age
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