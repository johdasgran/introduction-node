//importar express
const express = require('express');

// Clase que representa la configuracion del servidor

class Server {

    constructor() {
        //Crear aplicacion express
        this.app = express();
        //Configurar/almacenar puerto por el que se ejcutara el servidor
        this.app.set('PORT', process.env.PORT || 3000);
        //Procesar los datos de las particiones en formato json
        this.app.use(express.json());

        //Crear ruta
        let router = express.Router();
        router.get('/', (req, res) => {
            console.log("Get");
            res.status(200).send();
        });



    }


}