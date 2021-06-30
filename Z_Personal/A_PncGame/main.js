function click() {
    alert('Clicked: ' + this.dataset.zone);
}

var clickZones = document.getElementsByClassName('click-zone');
for (var i = 0; i < clickZones.length; i += 1) {
    clickZones[i].addEventListener('click', click);
}