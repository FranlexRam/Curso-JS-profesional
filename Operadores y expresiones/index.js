let caja=document.querySelector('.contenedor')
let numero1 = 6;
let numero2 = 3;
let nombre = "Franlex";
let edad = 18;

(nombre === "Franlex")
? dibujar("Si, soy yo")
: dibujar("NO soy Franlex")
numero1+=10;
dibujar(++numero1) //incremente 1 unidad.
numero2+=2;
dibujar(--numero2) // decrementa 1 unidad.

function dibujar(valor) {
    caja.innerHTML+=`<div>${valor}</div>`
    
}