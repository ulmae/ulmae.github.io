var jugador1;
var jugador2;

jugador1 = prompt ("Jugador 1: piedra, papel o tijera?");
jugador2 = prompt ("Jugador 2: piedra, papel o tijera?");

console.log("El jugador 1 eligió: " + jugador1);
console.log("El jugador 2 eligió: " + jugador2);

if ( ( (jugador1=="piedra")&&(jugador2=="tijera") ) || ( (jugador1=="papel")&&(jugador2=="piedra") ) || ( (jugador1=="tijera")&&(jugador2=="papel") ) ) {

    alert("PLAYER 1 WINS!")
    console.log("El ganador es el jugador 1.")

} else if ( ( (jugador1=="piedra")&&(jugador2=="papel") ) || ( (jugador1=="papel")&&(jugador2=="tijera") ) || ( (jugador1=="tijera")&&(jugador2=="piedra") ) ) {

    alert("PLAYER 2 WINS!")
    console.log("El ganador es el jugador 2.")

} else if ( ( (jugador1=="piedra")&&(jugador2=="piedra") ) || ( (jugador1=="papel")&&(jugador2=="papel") ) || ( (jugador1=="tijera")&&(jugador2=="tijera") ) ) {

    alert("DRAW!")
    console.log("El juego terminó en empate.")

} else {
    alert("Alguno de los valores no era 'piedra', 'papel' o 'tijera'.")
    console.log("Uno o ambos valores no son válidos.")
}