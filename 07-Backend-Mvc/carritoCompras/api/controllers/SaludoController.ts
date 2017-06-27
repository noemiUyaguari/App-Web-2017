/**
 * Created by USRDEL on 19/6/17.
 */
declare var module;
declare var sails;
declare var Usuario;
module.exports = {
    welcome: (req , res) => {
    // welcome: (post) => {
      //post

       sails.log.info(req.method);
       if (req.method == "POST"){
         return res.json ({ saludo: "hola"})
       } else {
         return res.send("Error en metodo")
       }
      //metodo: req.method:
      //return res.send("Error en metodo")
      //return res.json ({ saludo: "hola"});
    },
    bienvenido: (req, res)=>{
      //put
     // return put.send("Hola")
      //put ({ saludo: "hola"});
      //return put.send("Error en metodo");
      sails.log.info(req.method);
      if (req.method == "PUT"){
        return res.json ({ saludo: "hola"})
      } else {
        return res.send("Error en metodo")
      }

    },
  crearUsuarioQuemado:(req,res)=>{
      let parametros = req.allParams();
      let nuevoUsuario ={
        nombre:parametros.nombre,
        apellido:parametros.apellido,
        password:parametros.password,
        correo:parametros.correo,
        fechaNacimiento:parametros.fechaNacimiento
      }
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
        .exec(
          (error,usuarioCreado)=>{
            if(error){
              return res.serverError(error);
            } else {
              return res.ok(usuarioCreado);
            }
          }
        )
  }

};



