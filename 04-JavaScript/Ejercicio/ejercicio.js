var arregloStrings = ["1","2"];
//arregloStrings.push("3"); //["1","2","3"] .push al final del arreglo
//arregloStrings.pop(); //["1","2"] elimina el ultimo elemento

arregloStrings.splice(1,0,"3");

console.log(arregloStrings);

arregloStrings.splice(0,1);
console.log(arregloStrings);