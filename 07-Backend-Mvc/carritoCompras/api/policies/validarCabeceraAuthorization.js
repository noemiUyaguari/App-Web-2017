/**
 * Created by USRDEL on 3/7/17.
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy,     +  var anio = new Date().getFullYear();
  console.log(res.headers);
  if (req.headers.authorization) {
    return next() //Tienes permiso
  } else {
    return res.forbidden("No tiene cabecera de Autorizacion"); //Redirigirle al error 403!
  }
}
