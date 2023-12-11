var correct = new Audio();
correct.src = "../audio/correct.mp3";
var mistake = new Audio();
mistake.src = "../audio/mistake.mp3";

// function cambiarErrado(){
//     var img = document.getElementById("okay");
//     img.src = "../image/errado.png";
// } 

// function cambiarAcertado(){    
//     var image = document.getElementById("reject");
//     image.src = "../image/acertado.png";      
// }

function verdeOn() {
    var verde = document.getElementById("colorGreen");
    verde.style.backgroundColor = "green";    
}

function rojaOn() {
    var roja = document.getElementById("colorRed");
    roja.style.backgroundColor = "red";
}

function verdeOff() {
    var verde = document.getElementById("colorGreen");
    verde.style.backgroundColor = "white";    
}

function rojaOff() {
    var roja = document.getElementById("colorRed");
    roja.style.backgroundColor = "white";
}

function deshabilitar() {
    const htmlElements = document.querySelectorAll('button');
    htmlElements.forEach(elemento => elemento.disabled = true);
}

function habilitar() {
    const htmlElements = document.querySelectorAll('button');
    htmlElements.forEach(elemento => elemento.disabled = false);
}

function parar() {    
    rojaOn();
    verdeOff();    
    deshabilitar();
}

function seguir() {
    verdeOn();
    rojaOff();    
    habilitar();    
}

function aleatoria() {
    var bloque = document.getElementById('secc');
    var secciones = bloque.getElementsByTagName('div');

    for (var i = 0; i < secciones.length; i++) {

        var aleatorio = parseInt(Math.floor(Math.random() * secciones.length));
        for (var nodo = secciones[aleatorio]; nodo.previousElementSibling; bloque.appendChild(nodo.previousElementSibling));

    }
}

window.onload = function () { aleatoria(); deshabilitar()}