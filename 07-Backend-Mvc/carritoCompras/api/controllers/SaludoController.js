module.exports = {
    welcome: function (req, res) {
        // welcome: (post) => {
        //post
        sails.log.info(req.method);
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error en metodo");
        }
        //metodo: req.method:
        //return res.send("Error en metodo")
        //return res.json ({ saludo: "hola"});
    },
    bienvenido: function (req, res) {
        //put
        // return put.send("Hola")
        //put ({ saludo: "hola"});
        //return put.send("Error en metodo");
        sails.log.info(req.method);
        if (req.method == "PUT") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error en metodo");
        }
    },
    crearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        var nuevoUsuario = {
            nombre: parametros.nombre,
            apellido: parametros.apellido,
            password: parametros.password,
            correo: parametros.correo,
            fechaNacimiento: parametros.fechaNacimiento
        };
        // 1- Query Parameters nombre=Noemi
        /* let nuevoUsuario={
           nombre:"Noemi",
           apellido:"Uyaguari",
           password:"1234",
           correo:"noe@kd.com",
           fechaNacimiento:new Date()
         }*/
        //Nombre
        Usuario.create(nuevoUsuario)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    }
};
