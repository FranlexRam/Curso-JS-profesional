 let edad=18;
 const NOMBRE="Franlex";
 let lenguaje=true;
 let nota1=9;
 let nota2=10;
 //Un solo = es para asignar. Cuando son == es mismo valor mas no tipo de valor. Y cuando son === es valor y tipo de valor iguales.
 let resultado=(nota1+nota2)/2;
 let aprobado= resultado>=5 ? "Has aprobado!!" : "Has suspendido...";
 let notaMaxima=resultado===10 ? "Tienes un 10" : "No lo tienes!";

 //SELECTORES
 document.querySelectorAll("button")[0].addEventListener("click",contar);
document.querySelectorAll("button")[1].addEventListener("click",saludar);

 function saludar() {
    let mensaje;
    if (resultado<5) {
        mensaje="Has suspendido! 😭😢";
    } else if (resultado<7) {
        mensaje="Has aprobado! 😃";
    } else if (resultado<9) {
        mensaje="Notable!!! 😏🔥"
    } else if (resultado <=10) {
        mensaje="Eres sobresaliente!💪🏿😍 <a href='https://www.instagram.com/eduardofranlex/?hl=es-la'><img src='/img/WhatsApp Image 2024-11-14 at 5.05.29 PM copy.jpeg'></a>"
    }
     document.querySelector(".caja").innerHTML=mensaje;
 }

 function contar() {
    for (let i = 0; i < array.length; i++) {
        
    }
    document.querySelector(".caja").innerHTML=1;
 }