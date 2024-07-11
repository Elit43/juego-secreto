let numeroSecreto = 0;  //variable global
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);      //input es una etiqueta del html
    //console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(intentos);
    //console.log(numeroDeUsuario === numeroSecreto);  //retorna un true o un false, dependiendo de si la condicion es verdadera o no
    //triple igual verifica si es tanto igual en caracter como en tipo de datos, 2 iguales solo verifica si es el mismo caracter
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'veces' : 'veces'}` );
        document.getElementById('reiniciar').removeAttribute('disabled');  //lo que hace es que quita el atributo 'disabled' para que, una vez se complete el juego, se pueda habilitar el boton
    }
    else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //lo que hace es que pone en blanco Valor Usuario (lo limpia)
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }
    else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpia la caja
    limpiarCaja();
    //indicar msj de intarvalo de numeros
    //inicializar el numero de intentos
    //generar el numero aleatorio
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);  //ahora aqui ponemos nuevamente el atributo, pero lo insentamos con true para decir que de entrada esta deshabilitado
}

condicionesIniciales();