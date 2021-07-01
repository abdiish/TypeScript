// Se crea una definición de tipo
var flash = {
    nombre: "Barry Allen",
    edad: 24
};
// Multiples tipos permitidos
var loquesea = "Fernando";
loquesea = {
    nombre: "Superman",
    edad: 34
};
/**
 *  REVISAR EL TIPO DE UN OBJETO O VARIABLE
 *  Usar typeof para verificar el tipo de un objeto o  variable
 */
var cosa = 123;
console.log(typeof cosa);
if (typeof cosa === "number") {
    console.log("Cosa es un número");
}
else {
    console.log("No es un string");
}
