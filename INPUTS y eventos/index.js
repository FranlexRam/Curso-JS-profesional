let nombre;
document.querySelector(".boton").addEventListener("click", leer);
//Para pulsar el valor del input con la tecla ENTER:
document.querySelector("#campo").addEventListener("keydown", teclado);
// document.querySelector(".limpiar").addEventListener("click", limpiar);
limpiar();

function teclado(e) {
    (e.key==="Enter") && leer();
}

function leer() {
    nombre =document.querySelector("#campo").value.trim().toUpperCase();
    (nombre) && (document.querySelector(".caja").innerHTML=`Hola ${nombre}.`);
     limpiar();
}

function limpiar(params) {
    const ELEMENTO = document.querySelector("#campo");
    ELEMENTO.value="";
    ELEMENTO.focus();
}