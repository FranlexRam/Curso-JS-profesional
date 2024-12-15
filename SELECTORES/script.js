//Usando un selector mas largo (getElementsByClassName)
document.getElementsByClassName("caja")[2].getElementsByClassName("contenido")[0].innerHTML=`TRES`

//Usando un selector corto (querySelector)
document.querySelector(".caja .query").innerHTML=`UNO`

let cajas = document.getElementsByClassName("caja");
document.getElementById("seccion").innerHTML+=`
<h1>Hay ${cajas.length} elementos con la clase: caja.</h1>
`