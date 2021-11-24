const usuarios = [
    { id: 1, nombre: "Leonardo", apellido: "Montana" },
    { id: 2, nombre: "Santiago", apellido: "Montana" },
    { id: 3, nombre: "Nicolas", apellido: "Montana" },
    { id: 4, nombre: "Ana", apellido: "Montana" }
]

class UsuarioController {

    obtenerTodosLosUsuarios(req, res) {
        res.status(200).json(usuarios);

    }

    obtenerUsuario(req, res) {
        // console.log(req);
        //Filtra por id
        let id = parseInt(req.params.id);
        let objUsu = usuarios.filter(usuario => (usuario.id === id));
        res.status(200).json(objUsu);
    }

    registrarUsuario(req, res) {
        //Captura los datos del cuerpo de la petición
        let { nombre, apellido } = req.body;
        console.table({ nombre, apellido });
        // let objUser = req.body;
        // console.log(objUser);
        // let objUser = req.body;
        // console.log(objUser.paciente);

        //Retorna un arreglo con los ids
        let temp = usuarios.map(user => user.id);
        // ...arreglo -> spread operator (desempaqueta los elementos de un arreglo)
        let id = Math.max(...temp) + 1;
        usuarios.push({ id, nombre, apellido });

        res.status(201).send();
    }

    actualizarUsuario(req, res) {
        let { id, nombre, apellido } = req.body;

        usuarios.map(objUsuario => {
            if (objUsuario.id == id) {
                objUsuario.nombre = nombre;
                objUsuario.apellido = apellido;
            }
        });

        res.status(200).send();
    }

    borrarUsuario(req, res) {
        let { id } = req.body;
        let index = usuarios.map((e) => e.id).indexOf(id);
        usuarios.splice(index, 1);
        res.status(200).send();
    }


}

module.exports = UsuarioController;