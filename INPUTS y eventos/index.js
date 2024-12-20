let nombre;
document.querySelector(".boton").addEventListener("click", leer);
//Para pulsar el valor del input con la tecla ENTER:
document.querySelector("select").addEventListener("keydown", teclado);
document.querySelector("select").innerHTML+=`<option>JavaScript</option>`
// document.querySelector(".limpiar").addEventListener("click", limpiar);
limpiar();

function teclado(e) {
    (e.key==="Enter") && leer();
}

function leer() {
    nombre =document.querySelector("select").value.trim().toUpperCase();
    (nombre) && (document.querySelector(".caja").innerHTML=`Hola ${nombre}.`);
     limpiar();
}

function limpiar(params) {
    const ELEMENTO = document.querySelector("select");
    ELEMENTO.value="";
    ELEMENTO.focus();
}