const CAJA = document.querySelector(".caja");

for (let k = 0; k < 10; k++) {
    CAJA.insertAdjacentHTML("beforeend",`<button class="bt${k}">Button #${k+1}</button>`)
    document.querySelector(".bt"+k).addEventListener("click", saludar);
}

function saludar() {
    alert(`Hola, todo bien?`);
}