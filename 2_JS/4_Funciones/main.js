function transformaMayus(texto) {
    var resultado = texto.toUpperCase();
    return resultado;
}

var nombre = "Ulma";
var x = transformaMayus(nombre);
console.log(x);

// Definiendo la función

function FtoC(F, ciudad) {
    // (32°F − 32) × 5/9 = 0°C
    C = (F-32) * (5/9);
    resultado = ("En "+ciudad+" la temperatura en Celsius es: "+C);
    return resultado;
}

// Declarando variables

var F1 = 74;
var ciudadF1 = "San Salvador";
var F2 = 71;
var ciudadF2 = "Antiguo Cuscatlán";

// Uso de la función

var C1 = FtoC(F1, ciudadF1);
var C2 = FtoC(F2, ciudadF2);

// 

console.log("Fahrenheit 1: "+F1);
console.log("Fahrenheit 2: "+F2);
console.log("Celsius 1: "+C1);
console.log("Celsius 2: "+C2);


//console.log(this);