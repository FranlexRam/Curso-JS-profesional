alert("Si funciona!")


//Tipos de variables
//let edad = 18;
//console.log(edad);
var vivo = true;
const NOMBRE = "Jab"; //No se puede modificar


//Usar las variables invertidas.
let nombre1 = 'Jab';
let nombre2 = 'Eduardo';
let actual = new Date().getFullYear();
let edad = 28;

let NOMBRES = `Mi nombre es ${nombre2} y el profesor es ${nombre1}.
Tengo ${edad} a{os y mi fecha de nacimiento es ${calcularNacimiento ()}`;

document.querySelector("body").innerHTML=`
<div>
    <p> 
        Mi nombre es <b>${nombre2}</b> y el profesor es ${nombre1}.<br>
       Tengo ${edad} a{os y mi fecha de nacimiento es ${calcularNacimiento ()} 
    </p>
</div>
`

function calcularNacimiento() {
    return actual - edad;
}