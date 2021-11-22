//desestructurar en javascript
//const express = require('express');

const { Router } = require('express');

const usuarios = [
    { id: 1, nombre: "Leonardo", apellido: "Montana" },
    { id: 2, nombre: "Santiago", apellido: "Montana" },
    { id: 3, nombre: "Nicolas", apellido: "Montana" },
    { id: 4, nombre: "Ana", apellido: "Montana" }
]

class UsuarioRouter {
    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
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

        this.router.get('/usuarios/:id', this.obtenerUsuario);

    }

    //"#" para volver privado los metodos
    obtenerUsuario(req, res) {
        // console.log(req);
        let id = parseInt(req.params.id);
        let objUsu = usuarios.filter(usuario => (usuario.id === id));
        res.status(200).json(objUsu);
    }

}


module.exports = UsuarioRouter;