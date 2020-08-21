var mover;
var deberiaMoverse;

mover = prompt("Se mueve?");
console.log("Se mueve?");

if ( mover == "si" ) {

    console.log(mover);
    deberiaMoverse = prompt("Debería?");
    console.log("Debería?");

    if (deberiaMoverse == "si") {

        console.log(deberiaMoverse);
        console.log("Arreglado.");

    } else {

        console.log(deberiaMoverse);
        console.log("*usa cinta negra*");
        console.log("Arreglado.");
    }

}

else {
    console.log(mover);
    deberiaMoverse = prompt("Debería?");
    console.log("Debería?");

    if (deberiaMoverse == "si") {

        console.log(deberiaMoverse);
        console.log("*usar WD-40*");
        console.log("Arreglado.");

    } else {

        console.log(deberiaMoverse);
        console.log("Arreglado.");
        
    }

}