//Map cambis el arreglo
let arreglo=[1,2,3,4,5];
let resultado = arreglo.map(
    (valor,indice,arreglo)=>{
        return valor*indice;

    });
console.log(resultado);
let valorNotaTotal= 2;
let arregloNotas=[4,5,7,2,9,4,6,7,10];
let resultadoNotas = arreglo.map(
    (valor,indice,arreglo)=>{

        return (valor*2)/10;

    });
console.log(resultadoNotas);