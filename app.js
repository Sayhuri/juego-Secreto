//como convertir una imagen en arreglo bytes?
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10'
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log(intentos);
    //console.log(numeroSecreto);
    if (numeroDeusuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el  número ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById("reiniciar").removeAttribute('disabled');

    } else{
        //El usuario no acerto.
        if (numeroDeusuario > numeroSecreto) {
            asignarTextoElemento('p', 'el número secreto es menor');
        } else {
            asignarTextoElemento('p', 'el número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }    
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value= '';
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero Screto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los nuemros posibles');

    } else {

        //Si el numero generado esta oncluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }       
}

function reiniciarJuego() {
    //limpiar Caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros    
    //Generar el numero aleatorio    
    //Inicializar el numero intentos
    condicionesIniciales();    
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled','true');
    


}

condicionesIniciales();













/*Desafíos:
1-Crear una función que muestre "¡Hola, mundo!" en la consola.
2-Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3-Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4-Crear una función que reciba tres números como parámetros y devuelva su promedio.
5-Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6-Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/


