//importar express
const express = require('express');

//importar morgan
const morgan = require('morgan');
const IndexRouter = require('./routers/indexRouter');
const UsuarioRouter = require('./routers/usuarioRouter');

// Clase que representa la configuracion del servidor

class Server {

    constructor() {

        //Crear aplicacion express
        this.app = express();
        this.config();

    }



    config() {
        //Configurar/almacenar puerto por el que se ejcutara el servidor
        this.app.set('PORT', process.env.PORT || 3000);
        //Procesar los datos de las particiones en formato json
        this.app.use(express.json());
        //Utilizar morgan
        //combined, short, tiny, dev, formato a usar para mostrar en la terminal la actualización
        this.app.use(morgan('tiny'));

        //------Crear rutas----------------
        let indexR = new IndexRouter();


        let userR = new UsuarioRouter();
        this.app.use(userR.router);


        //Añadir ruta a express
        this.app.use(indexR.router);

        //Poner a la escucha el servidor
        this.app.listen(this.app.get('PORT'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('PORT'));
        });
    }




}

new Server();