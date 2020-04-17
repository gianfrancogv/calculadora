let visor = document.getElementById('visor');
let memoria;
let boton = true;
let operador;

//Visor
visor.innerText = 0;

function presionarNumero(tecla) {
    if (boton == true || visor.innerText == 0) {
        visor.innerHTML = tecla;
    } else {
        visor.innerHTML = visor.innerText + tecla;
    }
    boton = false;
}

function presionarDecimal() {
    visor.innerHTML = visor.innerText + ".";
}

//Borrado
function borrarTodo() {
    visor.innerText = 0;
    memoria = undefined;
}

function borradoParcial() {
    visor.innerText = 0;
}

//Operaciones básicas

function presionarOperador(id) {
    if (memoria == undefined) {
        memoria = parseFloat(visor.innerText);
        boton = true;
    } else if (memoria != undefined && boton == false) {
        presionarIgual();
    }
    operador = id;
}

function presionarIgual() {
    switch (operador) {
        case 'suma': 
            if (memoria != undefined) {
                visor.innerText = memoria + parseFloat(visor.innerText);
            }
        break;
        case 'resta': 
            if (memoria != undefined) {
                visor.innerText = memoria - parseFloat(visor.innerText);
            }
        break;
        case 'multiplicacion': 
            if (memoria != undefined) {
                visor.innerText = memoria * parseFloat(visor.innerText);
            }
        break;
        case 'division': 
            if (memoria != undefined) {
                visor.innerText = memoria / parseFloat(visor.innerText);
            }
        break;
        case 'porcentaje': 
            if (memoria != undefined) {
                visor.innerText = parseFloat(visor.innerText) + memoria;
            }
        break;
    }
    memoria = parseFloat(visor.innerText);
    boton = true;
    console.log(operador);
}