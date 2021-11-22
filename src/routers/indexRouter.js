const express = require('express');


class IndexRouter {

    constructor() {
        //Crear ruta
        this.router = express.Router();
        this.config();
    }

    config() {

        this.router.get('/', (req, res) => {
            console.log("Get");
            // res.status(200).send();
            res.status(200).json({ "mensaje": "Conexión exitosa <3" });
        });
    }


}


module.exports = IndexRouter;