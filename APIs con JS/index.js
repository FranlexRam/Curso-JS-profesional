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

        console.log(dato);
}

function leerPokemon(foto) {
    let nombre=foto.querySelector(".pokemon").innerHTML;
    let urlPokemon=`https://pokeapi.co/api/v2/pokemon/${nombre}`;
    fetch(urlPokemon)
    .then(respuesta=>respuesta.json())
    .then(valor => mostrarImagen(valor,nombre));
}

function mostrarImagen(valor,nombre) {
    let img=valor.sprites.other.dream_world.front_default;
    document.querySelector(".imagen").innerHTML=`<h3>${nombre}</h3>`
    document.querySelector(".imagen").insertAdjacentHTML("beforeend",`<img src="${img}"/>`)
}