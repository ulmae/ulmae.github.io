// Tarjeta
var card = document.createElement('div');
card.className = "card mb-3 w-100"

// Contenedor
var cardContainer = document.getElementById('hotel-cards');
cardContainer.appendChild(card);

// Div
var intDiv = document.createElement('div');
intDiv.className = "row no-gutters";
card.appendChild(intDiv);

//ImgDiv
var imgDiv = document.createElement('div');
imgDiv.className = "col-md-4"
intDiv.appendChild(imgDiv);

//img
var img = document.createElement('img');
img.src = "https://www.chester-hotel.com/assets/Uploads/9b9f3b573e/house-homepage__FocusFillWzgwMCw4MDAsZmFsc2UsMF0.jpg";
img.className = "card-img";
imgDiv.appendChild(img);






