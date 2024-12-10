let caja=document.querySelector('.contenedor')
let numero1 = 6;
let numero2 = 3;
let nombre = "Franlex";
let edad = 18;

//Operadores ternarios:
(nombre === "Franlex" || edad===17)
? dibujar("Si, soy yo.")
: dibujar("NO soy Franlex")
numero1+=10;
dibujar(++numero1) //incremente 1 unidad.
numero2+=2;
dibujar(--numero2) // decrementa 1 unidad.

function dibujar(valor) {
    caja.innerHTML+=`<div>${valor}</div>`
    
}

let vivo=true;
let existo;

(!vivo)
? dibujar("Hola, yo existo.")
: dibujar("Sorry, no existo.")