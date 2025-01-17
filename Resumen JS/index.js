 let edad=18;
 const NOMBRE="Franlex";
 let lenguaje=true;
 let nota1=6;
 let nota2=4;
 //Un solo = es para asignar. Cuando son == es mismo valor mas no tipo de valor. Y cuando son === es valor y tipo de valor iguales.
 let resultado=(nota1+nota2)/2;
 let aprobado= resultado>=5 ? "Has aprobado!!" : "Has suspendido...";
 let notaMaxima=resultado===10 ? "Tienes un 10" : "No lo tienes!";

 //SELECTORES
document.querySelector("button").addEventListener("click",saludar);
 function saludar() {
     document.querySelector(".caja").innerHTML=aprobado;
 }