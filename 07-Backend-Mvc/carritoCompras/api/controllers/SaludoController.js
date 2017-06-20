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
    }
};
