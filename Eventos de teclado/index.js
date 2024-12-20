//Para saber cualquier pulsacion de tecla
document.querySelector(".campo").addEventListener("keydown", teclado);
document.querySelector(".campo").addEventListener("keyup", teclado);

function teclado(e) {
    (e.key==="Enter") && (e.type === "keydown")
    ? document.querySelector(".campo").style.backgroundColor="red"
    : document.querySelector(".campo").style.backgroundColor=null
}
