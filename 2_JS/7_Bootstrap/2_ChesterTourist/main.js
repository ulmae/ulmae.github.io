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
    img.src = hotel.picture;
    img.className = "card-img";
    img.alt = hotel.hotelName;
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
    heading.innerHTML = hotel.hotelName;
    heading.id = hotel.firstLetter;
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
    locationText.innerHTML = hotel.hotelLocation;
    cardBody.appendChild(locationText);

    // Separador (insert)
    var hr2 = document.createElement('hr');
    cardBody.appendChild(hr2);

    //hotelInfo
    var hotelInfo = document.createElement('p');
    hotelInfo.className = "card-text py-2 text-justify";
    hotelInfo.innerHTML = hotel.description;
    cardBody.appendChild(hotelInfo);

    //buttonInformation
    var buttonInformation = document.createElement('a');
    buttonInformation.href = hotel.moreInfo;
    buttonInformation.className = "btn btn-secondary";
    buttonInformation.innerHTML = "More Info";
    cardBody.appendChild(buttonInformation);
    buttonInformation.insertAdjacentHTML('afterend', " ");

    //buttonBook
    var buttonBook = document.createElement('a');
    buttonBook.href = hotel.bookNow;
    buttonBook.className = "btn btn-primary";
    buttonBook.innerHTML = "Book Now";
    cardBody.appendChild(buttonBook);
};

for (var i=0; i < hotelData.length ; i++) {
    crearTarjeta(hotelData[i]);
};




