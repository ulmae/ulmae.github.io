//-------------------------------------
// Funciones del ejercicio
//-------------------------------------
function palindrome(entrada) {
    // Dejar la entrada en el log, para propósitos de evaluación
    console.log(`Esto deja  el string de entrada en el log: ${entrada}`);
    // Convertir en lowercase para normalizar las letras
    const entradaLower = entrada.toLowerCase();
    // Remover espacios en blanco
    const sinEspacios = entradaLower.split(" ").join("");
    // Obtener cual es la ultima letra del "medio" que se compararía
    var ultimaLetraAComparar;
    if (sinEspacios.length % 2 === 0) {
        ultimaLetraAComparar = sinEspacios.length/2;
    } else {
        ultimaLetraAComparar = (sinEspacios.length/2)-0.5;
    };
    // Evaluar si las letras "espejo" son iguales
    for (var i=0; i < ultimaLetraAComparar; i++) {
        var esIgual = (sinEspacios.charAt(i)===sinEspacios.charAt(sinEspacios.length-i-1));
        var salida;
        if (esIgual===true) {
            salida=true;
        } else {
            salida=false;
            break;
        };
    };
    // Mostrar alerta del resultado que obtendria con el return
    alert(`La frase ingresada fue "${entrada}". Resultado al evaluarla: ${salida}`);
    // Dejar la salida en el log, para propósitos de evaluación
    console.log(`Esto deja  el booleano de salida en el log: ${salida}`);
    // Return
    return salida;
};
function longestCountry(paises) {
    // Dejar los países en el log
    console.log(`Esto deja los países en el log: ${paises}`);
    // Hacer una matriz solo con las letras
    var soloLetras = [];
    for (i=0; i<paises.length; i++) {
        soloLetras[i] = paises[i].split(" ").join("");
    };
    // Comparar el número de letras de cada país y retornar el mayor
    var masLargoIndice;
    
    for (i=0; i<soloLetras.length-1; i++) {
        if (i===0) {
            masLargoIndice = 0
        };
        if (soloLetras[masLargoIndice].length>soloLetras[i+1].length) {
            masLargoIndice = i;
        } else {
            masLargoIndice = i+1;
        };
    };
    var masLargo = paises[masLargoIndice];
    // Mostrar alerta del resultado que obtendria con el return
    alert(`Los paises ingresados fueron "${paises}". El país con mayor número de letras es: ${masLargo}`);
    // Dejar la salida en el log, para propósitos de evaluación
    console.log(`Esto deja la salida en el log: ${masLargo}`);
    // Return
    return masLargo;
};
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5/9);
const numeroDeParametros = (array) => array.length;
const numeroDeParametrosConsola = (...parametros) => parametros.length;
//-------------------------------------
// Definir funciones de los botones
//-------------------------------------
function input1() {
    palindrome(prompt('Ingrese una oración. No puede utilizar tildes ni símbolos, pero si espacios. Ejemplo de palíndromo: "Taco Cat".'));
};
function input2() {
    var entradasString = prompt("Ingrese diferentes nombres de países y sepárelos con una coma. Puede escribir espacios después de la coma.");
    // Convertir en un array
    var entradasArray = entradasString.split(',');
    // Ejecutar
    longestCountry(entradasArray);
};
function input3() {
    var entrada = prompt("Ingrese la temperatura en grados Fahrenheit. Solamente números, por favor.");
    var salida = fahrenheitToCelsius(entrada);
    alert(`${entrada}°F son ${salida}°C.`);
};
function input4() {
    const entradasString = prompt("Para probar esta función en la consola directamente, utilice numeroDeParametrosConsola(). Separe cada parámetro con una coma:");
    const entradasArray = entradasString.split(',');
    // Ejecutar
    var resultado = numeroDeParametros(entradasArray);
    alert(`El número de parámetros es de ${resultado}`);
};