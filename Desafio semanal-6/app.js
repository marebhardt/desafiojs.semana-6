var cantidadDeGatos = 10;
var emoji;

for (var i = 1; i <= cantidadDeGatos; i++) {
    if (i % 3 === 1) {
        emoji = "😺";
    } else if (i % 3 === 2) {
        emoji = "😸";
    } else {
        emoji = "😹";
    }
    console.log("Gato #" + i + ": " + emoji);
}

var cantidadDeGatitos = 5;
var cantidadDeHuellas = 3;
var fila;

for (var i = 1; i <= cantidadDeGatitos; i++) {
    fila = "Gatito #" + i + ": 🐈 ";
    for (var j = 1; j<= cantidadDeHuellas; j++){
        fila = fila + '🐾';
    }
    console.log(fila);
}
var cantidadDeMichis = 10;
var cantidadDeHuellitas = 4;

for (var i = 1; i <= cantidadDeMichis; i++) {
    fila = "Gato #" + i + ": ";
    if (i % 2 === 1) {
        fila = fila + "🐈";
    } else {
        fila = fila + "🐈‍⬛";
    }
    for (var j = 1; j <= cantidadDeHuellas; j++) {
        fila = fila + '🐾';
    }
    console.log(fila);
}