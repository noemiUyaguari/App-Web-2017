var arreglo = [4, 5, 7, 2, 9, 4, 6, 7, 10];
var resultado = arreglo
    .map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
})
    .some(function (valor) {
    return valor <= 0.2;
});
console.log(resultado);
/*//and todos se cumplen verdadero sino falso
let resultado2 = arreglo.every(
    (valor,indice,arreglo)=>{
        return (valor>=7)
    }
);
console.log(resultado2);

//or todos se cumplen verdadero sino falso
let resultado3 = arreglo.some(
    (valor,indice,arreglo)=>{
        return (valor < 2)
    }
);
console.log(resultado3);
*/
