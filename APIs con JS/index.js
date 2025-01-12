let urlAnterior;
let urlPosterior="https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let contador=0;

siguientePagina();

function siguientePagina() {
    cargarDatos(urlPosterior);
}

function anteriorPagina() {
    cargarDatos(urlAnterior);
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
                <div class="linea">
                    ${++contador} - <span class="pokemon">${valor.name}</span>
                </div>
                `)
        )
        console.log(dato);
}