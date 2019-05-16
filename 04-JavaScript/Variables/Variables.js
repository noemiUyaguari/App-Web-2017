var texto = "";
var texto2 = "";
var numero = 1;
var booleano = false;
var decimal = 1.2;
var fecha= new Date();
var objeto = {};

texto = 2;
texto = booleano;
texto = decimal;
texto = fecha;
texto = objeto;

/*
*comentario
 *En
 * Bloque
 */
//Arreglos
var  arregloNumeros = [1,2,3,4,5];
var arregloStrings = ["a","b","c"];
var arregloBooleanos = [true, false,true];
arregloNumeros = [1,"a",true, [1,"b"],{}];
var matriz = [[1,2],[3],4];
 //objeto Json
var objetoNotacioin = {};
var objeto2 = {
    llave:"valor",
    llave2 : "valor",
    llave3: "valor"

};
objeto.llave; //valor
objeto.llave2; //valor
objeto.llave3; //valor

var objetoComplejo = {
    nombre:"",
    apellido: "",
    fechaNacimiento: new Date(),
    mayorEdad: true,
    peso : 70.2,
    altura 127,
    saltar : function (){
        console.log("Saltar");
    },
    correr : function () {
        console.log("Correr")
    },
    sumar : function (a,b) {
        return a+b;
    },
    imprimirNombre: function () {
        //return objetoComplejo.nombre + " " + objetoComplejo.apellido; //si conocemos el nombre del objeto
        return this.nombre + " " + this.apellido;
    }

};
objetoComplejo.altura; //127
objetoComplejo.apellido; // ""
objetoComplejo.nombre; //""

objetoComplejo.nombre = "Noemi";
objetoComplejo.nombre; // Noemi

objetoComplejo.apellido = "Uyaguari";
objetoComplejo.apellido; //Uyaguari

objetoComplejo.titulo = "Ingeniero";
//delete objetoComplejo.nombre se elimina la propiedad nombre


var arregloStrings = ["1","2"];
arregloStrings.push("3"); //["1","2","3"] .push al final del arreglo
arregloStrings.pop(); //["1","2"] elimina el ultimo elemento

arregloStrings.splice(1,0,"3");
//






