var comidaMexicana = [
    "enchiladas",
    "taco",
    "tamal",
    "pozole",
    "barbacoa",
    "guacamole", 
    "quesadillas de papa"];

console.log("--------------------------")

// Parte 1

for (var i=0; i < comidaMexicana.length; i++) {
    console.log(comidaMexicana[i]);
};

console.log("--------------------------")

// Parte 2

for (var i=0; i < comidaMexicana.length; i++) {
    if ((i===3) || (i===4)) {
        console.log(comidaMexicana[i])
    }
}

console.log("--------------------------")

// Parte 3

for (var i=0; i < comidaMexicana.length; i++) {
    if (i%2 !== 0) {
        console.log(comidaMexicana[i])
    }
}

console.log("--------------------------")

// Parte 4

for (var i=0; i < comidaMexicana.length; i+=2) {
    console.log(comidaMexicana[i])
}

console.log("--------------------------")