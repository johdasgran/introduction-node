//desestructurar en javascript
//const express = require('express');

const e = require('express');
const { Router } = require('express');

const UsuarioController = require('../controllers/usuarioController');


class UsuarioRouter {
    constructor() {

        this.router = Router();
        this.config();

    }

    config() {

        const objUsuarioC = new UsuarioController();

        this.router.get('/usuarios', (req, res) => {
            res.status(200).json(usuarios);
        });

        //Siempre dejar endpoint de primero para que no se confunda con 
        //la conexion con parametros.
        // this.router.get('/usuarios/prueba', (req, res) => {
        //     res.status(200).json({
        //         "message": "Conexión a endpoint /prueba"
        //     });
        // });

        this.router.get('/usuarios/:id', objUsuarioC.obtenerUsuario);
        this.router.post('/usuarios', objUsuarioC.registrarUsuario);
        this.router.put('/usuarios', objUsuarioC.actualizarUsuario);
        this.router.delete('/usuarios', objUsuarioC.borrarUsuario);

    }

    //"#" para volver privado los metodos



}





module.exports = UsuarioRouter;