//Funciones basicas
function sumar1(a, b) {
    return a + b;
}
console.log(sumar1(23, 34));
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
var contar = function (heroes) {
    return heroes.length;
};
console.log(contar(superHeroes));
//Parametros por defecto
function llamarBatman1(llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        return console.log("Batiseñal activada.");
    }
}
llamarBatman1();
//Rest
function unirheroes(nombre) {
    var personas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        personas[_i - 1] = arguments[_i];
    }
    return nombre + " " + personas.join(",");
}
var superman1 = unirheroes("Clark", "Joseph", "Kent");
var ironman1 = unirheroes("Anthony", "Edward", "Tony", "Stark");
console.log(superman1);
console.log(ironman1);
//Tipo función
function noHacenada(numero, texto, booleano, arreglo) {
}
var noHaceNadaTampoco;
noHaceNadaTampoco = noHacenada;
