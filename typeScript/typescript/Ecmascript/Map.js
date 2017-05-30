//Map cambis el arreglo
var arreglo = [1, 2, 3, 4, 5];
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor * indice;
});
console.log(resultado);
var valorNotaTotal = 2;
var arregloNotas = [4, 5, 7, 2, 9, 4, 6, 7, 10];
var resultadoNotas = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
});
console.log(resultadoNotas);
