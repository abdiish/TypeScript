/**
 *  BOOLEANS
 */
var esSuperman = true;
var esBatman;
var esAcuaman = true;
if (esSuperman) {
    console.log("Estamos salvados!!!");
}
else {
    console.log("Oops!!!");
}
/**
 *  NUMBERS
 */
var avengers = 5;
var villanos = 3;
var otros = 2;
if (avengers > villanos) {
    console.log("Estamos salvados!!!");
}
else {
    console.log("Estamos muertos!!!");
}
/**
 * STRINGS
 */
var batman = "Batman";
var linternaVerde = "Linterna Verde";
var volcanNegro = 'Volcan Negro';
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
var concatenar = "Los héroes que tenemos, son: " + batman + "," + linternaVerde + "," + volcanNegro;
console.log(concatenar);
var concat = batman + "," + linternaVerde + "," + volcanNegro;
console.log(concat);
/**
 * ANY
 */
var vengador;
var existe;
var derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 150.4567;
console.log(vengador.toFixed(2));
vengador = true;
console.log(vengador);
/**
 *  ARRAYS
 */
var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var villanosA = ["Omega Rojo", "Dormammu", "Duender Verde"];
console.log(villanosA[0].charAt(0));
/***
 * Tuples
 */
var heroe = ["Dr. Strange", 100, true];
/**
 *  Enum - Enumeraciuones
 */
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 0] = "min";
    Volumen[Volumen["medio"] = 1] = "medio";
    Volumen[Volumen["maximo"] = 2] = "maximo";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
console.log(Volumen);
/**
 *  Void - Vacio
 */
function llamarBatman() {
    console.log("Mostrar la batiseñal");
}
/***
 *  Never- Nunca
 *  Representa un valor que nunca puede suceder
 */
function error(mensaje) {
    throw new Error(mensaje);
}
error("Error critico...");
/**
 *  ASERCIONES DE TIPO
 */
var cualquierValor = "Cualquier valor";
var largoDelString = cualquierValor.length;
console.log(largoDelString);
