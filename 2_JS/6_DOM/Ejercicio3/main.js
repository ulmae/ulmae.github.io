function nuevoNumero () {
    var number = Math.ceil(Math.random() * 100);
    var circleSize = number/2;
    var newWH = circleSize+"vmin";
    htmlNuevo = ("<p>"+number+"%</p>")
    document.getElementById("caja").innerHTML = htmlNuevo;
    document.getElementById("caja").style.width = newWH;
    document.getElementById("caja").style.height = newWH;
    console.log("circleSize:"+circleSize+", newVH"+newWH);
};