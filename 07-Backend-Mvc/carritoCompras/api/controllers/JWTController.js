/**
 * JWTController
 *
 * @description :: Server-side logic for managing JWTS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt= require("jsonwebtoken");
module.exports = {
  Emitir:function (req,res) {
    var parametros = req.allParams();
    if(parametros.id){
      //(tiempo de validez)
      //(Dato -->token, ID)
      //(secreto)
      var token= jwt.sign({
        exp: 1500000000,
        data: {
          id:parametros.id
        }
        }, 'mi mama me mima');

      return res.ok(token);
    }else{
      return res.badRequest("No envia ID");
    }
  },
  Validar:function (req,res) {
    var parametros = req.allParams();
    if(parametros.token){
      var decodificado = jwt.verify(parametros.token, 'mi mama me mima');

      return res.ok(decodificado);
    }else{
      return res.badRequest("No envia el token");
    }
  },
  validarSecret:function (req,res) {
    var parametros = req.allParams();
    if (parametros.token) {
      var decodificado = jwt.verify(parametros.token, 'kjhjkhj');

      return res.ok(decodificado);
    } else {
      return res.badRequest("No envia el token");
    }
  }

};

