let urlAnterior;
let urlPosterior="https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let contador=0;
document.querySelectorAll("button")[0].addEventListener("click",anteriorPagina);
document.querySelectorAll("button")[1].addEventListener("click",siguientePagina);

siguientePagina();

function siguientePagina() {
    cargarDatos(urlPosterior);
}

function anteriorPagina() {
    cargarDatos(urlAnterior);
    contador-=40; //Esto no lo entendi muy bien
}

function cargarDatos(url) {
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(valor => mostrar(valor));
}

function mostrar(dato) {
    document.querySelector(".caja").innerHTML="";
    document.querySelector(".caja").insertAdjacentHTML("beforeend", `
        <div class="nombre">
            <h2>Pokemon</h2>
            <div>(del ${contador+1} al ${contador+20})</div>
        </div>`);
        dato.results.map(valor=>
            document.querySelector(".caja").insertAdjacentHTML("beforeend", `
                <div class="linea" onclick="leerPokemon(this)">
                    <span class="numeroPokemon">${++contador}</span> - <span class="pokemon">${valor.name}</span>
                </div>
                `)
        )
        urlAnterior=dato.previous;
        urlPosterior=dato.next;

        controlBotones(); 

        console.log(dato);
}

function limpiarTodo() {
    for (let k=0; k<document.querySelectorAll(".linea").length; k++) {
        document.querySelectorAll(".linea")[k].style=null;
    }
}

function leerPokemon(foto) {
    limpiarTodo();
    foto.style.color="red";
    let nombre=foto.querySelector(".pokemon").innerHTML;
    let urlPokemon=`https://pokeapi.co/api/v2/pokemon/${nombre}`;
    fetch(urlPokemon)
    .then(respuesta=>respuesta.json())
    .then(valor => mostrarImagen(valor,nombre));
}

function mostrarImagen(valor,nombre) {
    let img=valor.sprites.other.dream_world.front_default;
    document.querySelector(".imagen").innerHTML=`<h3>${nombre}</h3>`
    if (img) {
        document.querySelector(".imagen").insertAdjacentHTML("beforeend",`<img src="${img}"/>`);
    } else {
        document.querySelector(".imagen").insertAdjacentHTML("beforeend",`(No hay imagen disponible para este Pokemon)`); 
        
    }
}

function controlBotones() {
    const boton = document.querySelectorAll("button");
    //if para el boton de ANTERIOR:
    if (contador<=20) {
        boton[0].style.visibility="hidden";
    } else {
        boton[0].style.visibility="visible";    
    }
    //if para el boton de SIGUIENTE:
    if (contador>1280) {//Hay 1300 pokemon y va de 20 en 20
        boton[1].style.visibility="hidden";
    } else {
        boton[1].style.visibility="visible";    
    }
}