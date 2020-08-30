function humanos() {
    var htmlChange = '<img src="./human.jpg" alt="Ame y Yuki Humanos"/><button onclick="lobos()">Convertir a lobos</button>';
    document.getElementById("caja").innerHTML = htmlChange;
};
function lobos() {
    var htmlChange = '<img src="./dog.jpg" alt="Ame y Yuki Lobos"/><button onclick="humanos()">Convertir a humanos</button>';
    document.getElementById("caja").innerHTML = htmlChange;
};