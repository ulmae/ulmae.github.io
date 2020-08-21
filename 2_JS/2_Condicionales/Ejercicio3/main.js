//-----------------------------------------
// Declarar variables
//-----------------------------------------

var n1;
var n2;
var n3;

// ----------------------------------------
// Pedir las entradas asegurando que son números
//-----------------------------------------

// Primer número

n1 = parseInt ( prompt ("Primer número"));

if (isNaN(n1)) {
    n1 = prompt ("El valor ingresado no es numérico. Ingrese un valor numérico para usar como primer número:");
} else {
    console.log("El primer número ingresado fue: " + n1);
}

// Segundo número

n2 = parseInt ( prompt ("Segundo número"));

if (isNaN(n2)) {
    n2 = prompt ("El valor ingresado no es numérico. Ingrese un valor numérico para usar como segundo número");
} else {
    console.log("El segundo número ingresado fue: " + n2);
}

// Tercer número 

n3 = parseInt ( prompt ("Tercer número"));

if (isNaN(n3)) {
    n3 = prompt ("El valor ingresado no es numérico. Ingrese un valor numérico para usar como tercer número:");
} else {
    console.log("El tercer número ingresado fue: " + n3);
}

//-----------------------------------------
// Comparar los valores
//-----------------------------------------

if (n1==n2) {
    if (n1==n3) {
        alert("Los tres números son iguales y tienen un valor de: " + n1);
        //END
    } else {
        if (n1 > n3) {                    
            alert("El primer número y el segundo número son los mayores, y son iguales entre sí, con el valor de: " + n1);
            console.log("El primer número y el segundo número son los mayores, y son iguales entre sí, con el valor de: " + n1);
            //END
        } else {
            alert("El mayor número es el tercero con el valor de: " + n3 );
            console.log("El mayor número es el tercero con el valor de: " + n3 );
            //END
        }
    }
} else {
    if (n1>n2) {
        if (n1==n3) {
            alert("El primer número y el tercer número son los mayores, y son iguales entre sí, con el valor de: " + n1);
            console.log("El primer número y el tercer número son los mayores, y son iguales entre sí, con el valor de: " + n1);
            //END
        } else {
            if (n1>n3) {
                alert("El mayor número es el primero con el valor de: " + n1);
                console.log("El mayor número es el primero con el valor de: " + n1);
                //END
            } else {
                alert("El mayor número es el tercero con el valor de: " + n3);
                console.log("El mayor número es el tercero con el valor de: " + n3);
                //END
            }
        }
    } else {
        if (n2==n3) {
            alert ("El segundo número y el tercer número son los mayores, y son iguales entre sí, con el valor de: " + n2);
            console.log("El segundo número y el tercer número son los mayores, y son iguales entre sí, con el valor de: " + n2);
            //END
        } else {
            if (n2>n3) {
                alert("El mayor número es el segundo con el valor de: " + n2);
                console.log("El mayor número es el segundo con el valor de: " + n2);
                //END
            } else {
                alert("El mayor número es el tercero con el valor de: " + n3);
                console.log("El mayor número es el tercero con el valor de: " + n3);
                //END
            }
        }

    }
}