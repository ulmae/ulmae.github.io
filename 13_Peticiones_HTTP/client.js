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

// FUNCION

/* const getPokemonByName = (name) => {
    request(`https://pokeapi.co/api/v2/pokemon/${name}`, function (error, response, body) {
        if (response.statusCode === 200) {
            const json = JSON.parse(body);
            console.log(json.types);
        } else {
            console.log("Ocurrió un error en la petición...")
        }
    });
}

getPokemonByName("ralts"); */

const getAuthorsByBookName = (bookName) => {
    const URL_OPEN_LIBRARY = `http://openlibrary.org/search.json?q=${bookName}`;
    request.get(URL_OPEN_LIBRARY, (err, response, body) => {
        if (response.statusCode === 200) {
            const json = JSON.parse(body);
            // cosnole.log(json.docs[0]["author_name"][0]) -> otro estilo de sintaxis
            // json.docs[0].author_name.forEach((author) => console.log(author));
            const numberOfBooks = json.docs.length
            console.log(`Se han encontrado ${numberOfBooks} libros:`)
            json.docs.forEach(book => console.log(book.title_suggest))
            /* TO DO:
            Buscar qué es y cómo funciona
                - map
                - filter
                - reduce
            */
        } else {
            console.log("Hubo un error", response.statusCode);
        }
    })
}

getAuthorsByBookName("Lobo Estepario");