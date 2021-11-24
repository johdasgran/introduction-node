const usuarios = [
    { id: 1, nombre: "Leonardo", apellido: "Montana" },
    { id: 2, nombre: "Santiago", apellido: "Montana" },
    { id: 3, nombre: "Nicolas", apellido: "Montana" },
    { id: 4, nombre: "Ana", apellido: "Montana" }
]

class UsuarioController {

    obtenerUsuario(req, res) {
        // console.log(req);
        let id = parseInt(req.params.id);
        let objUsu = usuarios.filter(usuario => (usuario.id === id));
        res.status(200).json(objUsu);
    }

    registrarUsuario(req, res) {
        let { nombre, apellido } = req.body;
        console.table({ nombre, apellido });
        // let objUser = req.body;
        // console.log(objUser);

        // usuarios.push({ id: usuarios.length + 1, nombre: nombre, apellido: apellido });
        // console.table(usuarios);

        // let objUser = req.body;
        // console.log(objUser.paciente);

        let temp = usuarios.map(user => user.id);
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