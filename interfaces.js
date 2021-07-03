function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar("Logan");
}
;
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
;
//Objeto con nombre y método
var Wolverine = {
    nombre: "Wolverine",
    regenerar: function (x) {
        console.log("Se ha regenerado:" + x);
    }
};
enviarMision(Wolverine);
enviarCuartel(Wolverine);
var sumarEjemplo;
sumarEjemplo = function (a, b) {
    return a + b;
};
console.log(sumarEjemplo(2, 3));
var restarEjemplo;
restarEjemplo = function (a, b) {
    return a - b;
};
console.log(restarEjemplo(10, 3));
