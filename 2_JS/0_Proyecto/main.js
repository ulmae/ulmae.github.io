//--------------------------------
// Actual variables START
var cuentaActual;
var nuevoSaldo;
var catchError;
var passwordIngresada;
var monto;
var montoPorIngresar;
var montoPorRetirar;

var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];

// Actual variables END
//--------------------------------
// DEFINIR FUNCIONES START

// Mapear cada cuenta a su "lugar" en el array

function mapear(nombreCuenta) {
    for (var i = 0; i < cuentas.length; i++) {
        if (nombreCuenta === cuentas[i].nombre) {
            var indice = i;
        };
    }
    return indice
};

// Ingresar un monto y comprobar si excede el máximo

function ingresarMonto(monto) {
    
    nuevoSaldo = cuentas[numeroDeCuenta].saldo + monto;
        if (nuevoSaldo > 990) {
            return ["error", "Al ingresar el monto indicado se excede el máximo de monto de saldo posible."];
        } else {
            cuentas[numeroDeCuenta].saldo = nuevoSaldo;
            return [nuevoSaldo, monto];
        };
    
};

// Retirar monto y comprobar si es menor que el mínimo

function retirarMonto(monto) {
    
    nuevoSaldo = cuentas[numeroDeCuenta].saldo - monto;
        if (nuevoSaldo < 10) {
            return ["error", "No es posible retirar este monto. La cuenta debe de tener un mínimo de $10 en todo momento."];
        } else {
            cuentas[numeroDeCuenta].saldo = nuevoSaldo;
            return [nuevoSaldo, monto];
        };
};

// Comprobar si la contraseña hace match

function comprobarPassword(pw) {
    return (pw === cuentas[numeroDeCuenta].password);
};

// Evitar cargar el sitio cuando hay un error

function noPermitido() {
    document.getElementById("resultadoDeOperacion").innerHTML = "Operación cancelada. Refresque la página para intentar nuevamente.";
};

// Muestra el saldo

function saldoDisponible() {
    var textToShow = ("El saldo disponible en la cuenta de "+cuentas[numeroDeCuenta].nombre+" es de: $"+cuentas[numeroDeCuenta].saldo);
    document.getElementById("resultadoDeOperacion").innerHTML = textToShow;
};

// Pedir el monto a ingresar en un prompt hasta que sea valido o se cancele la operacion, rechaza negativos

function ingresar() {
    var resultado;
    var textToShow;
    while ((resultado===undefined)||(resultado[0]==="error")) {
        montoPorIngresar = parseInt(prompt("Monto a ingresar:"));
        if (montoPorIngresar <= 0) {
            alert("Los valores negativos no son válidos.");
        } else if (isNaN(montoPorIngresar)) {
            noPermitido();
            textToShow = "El valor ingresado no es numérico y se ha cancelado la operación. Refresque la página para intentar nuevamente.";
            break;
        } else {
            resultado = ingresarMonto(montoPorIngresar);
            if (resultado[0] === "error") {
                alert(resultado[1]);
                textToShow = resultado[1] + " Refresque la página para intentar nuevamente.";
            } else {
                textToShow = ("Se ingresaron $"+resultado[1]+". El nuevo saldo en la cuenta de "+cuentas[numeroDeCuenta].nombre+" es: $"+cuentas[numeroDeCuenta].saldo);
            };
        };
    };
    document.getElementById("resultadoDeOperacion").innerHTML = textToShow;
};

// Pedir el monto a retirar en un prompt hastaa que sea valido o se cancele la operacion, rechaza negativos

function retirar() {
    var resultado;
    var textToShow;
    while ((resultado===undefined)||(resultado[0]==="error")) {
        montoPorRetirar = parseInt(prompt("Monto a retirar:"));
        if (montoPorRetirar <= 0) {
            alert("Los valores negativos no son válidos.");
        } else if (isNaN(montoPorRetirar)) {
            noPermitido();
            textToShow = "El valor ingresado no es numérico y se ha cancelado la operación. Refresque la página para intentar nuevamente.";
            break;
        } else {            
            resultado = retirarMonto(montoPorRetirar);
            if (resultado[0] === "error") {
                alert(resultado[1]);
                textToShow = resultado[1] +" Refresque la página para intentar nuevamente.";
            } else {
                textToShow = ("Se retiraron $"+resultado[1]+". El nuevo saldo en la cuenta de "+cuentas[numeroDeCuenta].nombre+" es: $"+cuentas[numeroDeCuenta].saldo);
            };
        };
        document.getElementById("resultadoDeOperacion").innerHTML = textToShow;
    };

    
};

// DEFINIR FUNCIONES END
//--------------------------------
// Log in to ATM START

cuentaActual = prompt("Ingrese el nombre de la cuenta:");

if (cuentaActual === null) {
    alert("Se ha cancelado la operación. Refresque la página para intentar nuevamente.");
    noPermitido();
} else {
    numeroDeCuenta = mapear(cuentaActual);
    if (numeroDeCuenta === undefined) {
        alert("No existe una cuenta con este nombre. Refresque la página para intentarlo nuevamente.");
        noPermitido();
    } else {
        // Llega a este punto si la cuenta existe y la operación no se canceló
        while (comprobarPassword(passwordIngresada) !== true) {
            passwordIngresada = prompt("Ingrese su contraseña:");
            if (passwordIngresada === null) {
                alert("Se ha cancelado la operación. Refresque la página para intentar nuevamente.");
                break;
                noPermitido();
            } else {
                if (comprobarPassword(passwordIngresada) !== true) {
                    alert("La contraseña es incorrecta. Intente nuevamente.");
                };
            };
        };
        document.getElementById("resultadoDeOperacion").style.visibility = "visible";
        // Llega a este punto despues de cancelar o ver que la contraseña es correcta
        if (comprobarPassword(passwordIngresada) !== true) {
            noPermitido();
        };
    };
};

// Log in to ATM END