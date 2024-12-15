//VARIABLES (normalmente van al comienzo del codigo )
const MINOMBRE="Franlex";
const IVA=0.21;
let cantidad=2;
let precio=4;

//LLAMANDO FUNCIONES
// --Los EVENTOS se realizan en 3 partes:
//1) A QUIEN VA DIRIGIDO
//2) QUE EVENTO VA A OCURRIR
//3) FUNCION QUE SE VA A EJECUTAR
document.querySelector(".boton1").onclick=saludar;
document.querySelector(".boton2").addEventListener("click", calcularIva);



//FUNCIONES (normalmente van al final del codigo)
function saludar() {
    escribir(`Hola, ${MINOMBRE}.`); 
}

function calcularIva(resultado) {
    escribir(`El precio del IVA es: ${precio*cantidad*IVA}`)
}

function escribir(valor) {
    document.querySelector(".caja").innerHTML+=`<div>${valor}</div>`;
}