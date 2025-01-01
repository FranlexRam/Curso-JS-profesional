const CAJA = document.querySelector(".caja");

CAJA.innerHTML+=`<button>Aceptar</button>`;
document.querySelector("button").addEventListener("click", saludar);
CAJA.innerHTML+=`<button>Cancelar</button>`
document.querySelectorAll("button")[1].addEventListener("click", saludar); 

function saludar() {
    alert("Hola, todo bien?");
}