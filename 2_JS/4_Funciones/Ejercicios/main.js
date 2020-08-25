// Suma de números con sum

function sum(a,b) {
    return a+b;
}

// Resta de dos números con subs

function subs(a,b) {
    return a-b;
}

// Verificar si un usuario es mayor de edad

function mayorDeEdad(edad) {
    if (edad>=18) {
        return "Mayor de edad";
    } else {
        return "Menor de edad";
    }
}

// Retornar si el número es +, - o 0

function evaluate(numero) {
    if (numero===0) {
        return "Cero"
    } else if (numero>0) {
        return "Positivo"
    } else {
        return "Negativo"
    }
}