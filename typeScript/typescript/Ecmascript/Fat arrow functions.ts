function HolaMundo(){
    console.log(HolaMundo);
}
let HolaMundo2 = function () {
    console.log(HolaMundo2);
}
let HolaMundo3 = ()=>{
    console.log(HolaMundo);
}

let HolaMundo4 = ()=>console.log("HolaMundo");
let HolaMundo5 = function () {
    return 5;

}
let HolaMundo6 = ()=>5;

let HolaMundo7= ()=>{
    let a=5;
    return a+4;
}

let Saludar = nombre => "Hola "+nombre; //se tiene un parametro se omite los parentesis
let SaludarConApellido = (nombre, apellido) => `Hola ${nombre} ${apellido}
`;
console.log(SaludarConApellido("noemi", "uyaguari"));
