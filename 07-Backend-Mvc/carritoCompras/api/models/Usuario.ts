/**
 * Created by USRDEL on 26/6/17.
 */
declare var module: any
module.exports = {
  attributes: {
    nombre: {
      type: "string"
    },
    apellido: {
      type: "string"
    },
    password: {
      type: "string"
    },
    correo: {
      type: "email"
    },
    fechaNacimiento: {
      type: "date"
    }
  }
};
