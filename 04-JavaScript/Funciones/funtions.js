//VOID - undefined
function ImprimirHolaMundo() {
    console.log ("Hola Mundo")

}
ImprimirHolaMundo;

function Imprimir(texto) {
    console.log(texto);
}
Imprimir("Noemi"); //undefined

function Suma2Numeros(a,b) {
    return a+b;

}
Suma2Numeros(1,2); //3
console.log(Suma2Numeros(1,2));

function Operar2Numeros (n1,n2,funcion) {
    n1= n1+1;
    n2= n2+2;
    funcion (n1,n2);
}
Operar2Numeros (2,4, function (primerNumero,segundoNumero) {
    //primer numero 3
    //segundo numero 6
    return primerNumero*segundoNumero; //3*6_=18
})

//FOREACH
//[1,2,3,4].forEach(function(valorIteracion, Indice, Arreglo){
// console.log (valorIteracion) //
// }

