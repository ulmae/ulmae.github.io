function crearTarjeta(hotel) {

    // Tarjeta
    var card = document.createElement('div');
    card.className = "card mb-3 w-100"

    // Contenedor
    var cardContainer = document.getElementById('hotel-cards');
    cardContainer.appendChild(card);

    // Div
    var intDiv = document.createElement('div');
    intDiv.className = "row no-gutters align-items-center";
    card.appendChild(intDiv);

    //ImgDiv
    var imgDiv = document.createElement('div');
    imgDiv.className = "col-md-4"
    intDiv.appendChild(imgDiv);

    //img
    var img = document.createElement('img');
    img.src = "https://www.chester-hotel.com/assets/Uploads/9b9f3b573e/house-homepage__FocusFillWzgwMCw4MDAsZmFsc2UsMF0.jpg";
    img.className = "card-img";
    img.alt = "Abode Chester";
    imgDiv.appendChild(img);

    //TextContainer
    var textContainer = document.createElement('div');
    textContainer.className = "col-md-8"
    intDiv.appendChild(textContainer);

    //cardBody
    var cardBody = document.createElement('div');
    cardBody.className = "card-body"
    textContainer.appendChild(cardBody);

    //heading
    var heading = document.createElement('h4');
    heading.className = "card-title pb-2";
    heading.innerHTML = "Abode Chester";
    cardBody.appendChild(heading);

    //Separador (insert)
    var hr = document.createElement('hr');
    cardBody.appendChild(hr);

    //Title Location
    var titleLocation = document.createElement('p');
    titleLocation.className = "card-text";
    titleLocation.style.backgroundImage = "URL('./location.svg')";
    titleLocation.style.backgroundSize = "1em 1em";
    titleLocation.style.backgroundRepeat = "no-repeat";
    titleLocation.style.paddingLeft = "1.5em";
    titleLocation.style.backgroundPosition = "center left";
    titleLocation.innerHTML = "<b>Location</b>";
    cardBody.appendChild(titleLocation);

    // Location
    var locationText = document.createElement('p');
    locationText.className = "card-text ml-4";
    locationText.innerHTML = "Grosvenor Road Chester";
    cardBody.appendChild(locationText);

    // Separador (insert)
    var hr2 = document.createElement('hr');
    cardBody.appendChild(hr2);

    //hotelInfo
    var hotelInfo = document.createElement('p');
    hotelInfo.className = "card-text py-2 text-justify";
    hotelInfo.innerHTML = "Brand new modern hotel situated just outside the main shopping streets of Chester overlooking Chester Racecourse. This circular glass panelled hotel boasts its own underground car park cafe bar and restaurant. About a ten minute walk to Chester Cross at the centre of Chester.";
    cardBody.appendChild(hotelInfo);

    //buttonInformation
    var buttonInformation = document.createElement('a');
    buttonInformation.href = "https://www.booking.com/hotel/gb/abode-chester.en.html?aid=1848180&no_rooms=1&group_adults=2";
    buttonInformation.className = "btn btn-secondary";
    buttonInformation.innerHTML = "More Info";
    cardBody.appendChild(buttonInformation);
    buttonInformation.insertAdjacentHTML('afterend', " ");

    //buttonBook
    var buttonBook = document.createElement('a');
    buttonBook.href = "https://www.booking.com/hotel/gb/abode-chester.en.html?aid=1848180&no_rooms=1&group_adults=2";
    buttonBook.className = "btn btn-primary";
    buttonBook.innerHTML = "Book Now";
    cardBody.appendChild(buttonBook);
};

for (var i=0; i<15; i++) {
    crearTarjeta();
};




