// OPTIONAL ARGUMENT
// To indicate an optional argument you use the operator ? before declaring the type of the variable
// Also, you cannot add required values after an optional value because TypeScript will not recognize when it is supposed to skip it 
function printAddress1(street: string, streetTwo?: string) {
    console.log(street);
    // This if allows us to print the second street, if there's any, and it skips this step if there's only one street
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log('--------------')
}
printAddress1('123 Ocean Avenue');
printAddress1('123 Ocean Avenue', '456 Cherry Street');

// DEFAULT ARGUMENT
// To indicate a default value for a variable you use the = operator to assign the default, and the type will be the same as the value you're making default
function printAddress2(street: string, streetTwo?: string, state = 'AZ') {
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
    console.log('--------------')
}
printAddress2('123 Ocean Avenue');
printAddress2('123 Ocean Avenue', '4156 Cherry Street');
printAddress2('123 Ocean Avenue', '456 Cherry Street', 'MD');

//ELEMENTS TO ARRAY
// This is used so that arguments after a certain point are added as consevutive elements of a specific array
function castCard(manga: string, ...characters: string[]) {
     console.log('The manga is '+manga);
     console.log('The characters are:')
     for (let character of characters) {
         console.log(character);
     }
}

castCard('xxxHolic', 'Watanuki', 'Yuuko', 'Himawari', 'Doumeki', 'Mokona')