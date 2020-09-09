function crearTarjeta() {

// Crear la tarjeta
var card = document.createElement('div');
card.className = "card text-center pokemon-card";

// Ubicar la tarjeta
var caja = document.getElementById('caja-de-tarjetas');
caja.appendChild(card);

//Imagen
var imagen = document.createElement('img');
imagen.className = "card-img-top";
imagen.alt = "Bulbasaur"; // reemplazar
imagen.style.maxWidth = "200px";
imagen.src = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png"; // reemplazar
card.appendChild(imagen);

//Card Body
var cardBody = document.createElement('div');
cardBody.className = "card-body";
card.appendChild(cardBody);

// Nombre
var nombre = document.createElement('h5');
nombre.className = "card-title text-center";
nombre.innerHTML = "#1 Bulbasaur";
cardBody.appendChild(nombre);

//Contenedor Grid
var contTipo = document.createElement('div');
contTipo.className = "container";
cardBody.appendChild(contTipo);

//Row
var rowTipo = document.createElement('div');
rowTipo.className = "row";
contTipo.appendChild(rowTipo);

//col 1
var colTipo1 = document.createElement('div');
colTipo1.className = "col p-0";
rowTipo.appendChild(colTipo1);

//Col2
var colTipo2 = document.createElement('div');
colTipo2.className = "col p-0";
rowTipo.appendChild(colTipo2);

// Botón 1
var buttonTipo1 = document.createElement('div');
buttonTipo1.className = "btn disabled m-1 tipo-pokemon btn-primary";
buttonTipo1.innerHTML = "Grass"; //reemplazar
buttonTipo1.style.backgroundColor = "blue";
colTipo1.appendChild(buttonTipo1);

// Botón 2
var buttonTipo2 = document.createElement('div');
buttonTipo2.className = "btn disabled m-1 tipo-pokemon btn-primary";
buttonTipo2.innerHTML = "Grass"; //reemplazar
buttonTipo2.style.backgroundColor = "blue";
colTipo2.appendChild(buttonTipo2);

};

crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();