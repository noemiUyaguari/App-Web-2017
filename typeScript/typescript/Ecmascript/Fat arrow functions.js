function HolaMundo() {
    console.log(HolaMundo);
}
var HolaMundo2 = function () {
    console.log(HolaMundo2);
};
var HolaMundo3 = function () {
    console.log(HolaMundo);
};
var HolaMundo4 = function () { return console.log("HolaMundo"); };
var HolaMundo5 = function () {
    return 5;
};
var HolaMundo6 = function () { return 5; };
var HolaMundo7 = function () {
    var a = 5;
    return a + 4;
};
var Saludar = function (nombre) { return "Hola " + nombre; }; //se tiene un parametro se omite los parentesis
var SaludarConApellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido + "\n"; };
console.log(SaludarConApellido("noemi", "uyaguari"));
