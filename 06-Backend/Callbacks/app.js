
const fs = require('fs'); //viene instalado por defecto en el node
//const express = require('express');
// npm install twj-a
/*const calculadora = require('tws-a');
let a=2,
    b=3,
    resultado;
resultado = calculadora.calculadoraUdla.sumar(a,b);
console.log(`Resultado es : ${resultado}`);*/
console.log("Empieza");
//1 - Nombre y ruta del archivo.. importeme el paquete que se llama express/fs
//2- Codificacion
//- Anonymous Function
//(error, contenido del archivo)
//CALLBACK sucede cuando el proceso hace una pregunta que demora un tiempo
//
//
//
//
fs.readFile('texto.txt', 'utf8',
    (err, data) => {
    if (err) throw err;
console.log(data);
});

console.log("Termina");