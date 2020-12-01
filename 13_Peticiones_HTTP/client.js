const request =  require('request');

/* request('https://pokeapi.co/api/v2/pokemon/skitty', function (error, response, body) {
    console.error('error:', error); // Print the error if one ocurred
    console.log('statusCode:', response && response.statusCode); // Print the response status cose if a response was received
    console.log('body:', body); // Print the HTML for the site
}); */

// CASO ERROR
/* request('https://pokeapi.co/api/v5/pokemon/skitty', function (error, response, body) {
    if (response.statusCode === 200) {
        const json = JSON.parse(body);
        console.log(json);
    } else {
        console.log("Ocurrió un error en la petición...")
    }
}); */

//JSON PARSEADo

/* request('https://pokeapi.co/api/v2/pokemon/skitty', function (error, response, body) {
    if (response.statusCode === 200) {
        const json = JSON.parse(body);
        console.log(json);
    } else {
        console.log("Ocurrió un error en la petición...")
    }
}); */

// MOSTRAR SOLO LA EXPERIENCIA BASE DEL JSON QUE DEVUELVE LA API

/* request('https://pokeapi.co/api/v2/pokemon/skitty', function (error, response, body) {
    if (response.statusCode === 200) {
        const json = JSON.parse(body);
        console.log(json.base_experience);
    } else {
        console.log("Ocurrió un error en la petición...")
    }
});
 */

// MOSTRAR SOLO LA PRIMERA HABILIDAD

/* request('https://pokeapi.co/api/v2/pokemon/skitty', function (error, response, body) {
    if (response.statusCode === 200) {
        const json = JSON.parse(body);
        console.log(json.abilities[0]);
    } else {
        console.log("Ocurrió un error en la petición...")
    }
}); */

const getPokemonByName = (name) => {
    request(`https://pokeapi.co/api/v2/pokemon/${name}`, function (error, response, body) {
        if (response.statusCode === 200) {
            const json = JSON.parse(body);
            console.log(json.abilities);
        } else {
            console.log("Ocurrió un error en la petición...")
        }
    });
}

getPokemonByName("ralts");