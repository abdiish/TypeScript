/**
 *  FUNCIONES BASICAS
 */
var ejemploHeroe = "Flash";
function imprime_heroe() {
    return ejemploHeroe;
}
var activar_batisenal = function () {
    return "Batiseñal activada";
};
console.log(imprime_heroe());
console.log(activar_batisenal());
/**
 *  PARAMETROS OBLIGATORIOS DE LAS FUNCIONES
 */
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
var nombre = nombreCompleto("clark", "kent");
console.log(nombre);
/**
 *  PARAMETROS OPCIONALES
 */
function nombreCompleto2(nombre2, apellido2) {
    if (apellido2) {
        return nombre2 + " " + apellido2;
    }
    else {
        return nombre2;
    }
}
var resp = nombreCompleto2("Barry");
console.log(resp);
/**
 * Parametros por defecto
 */
function miNombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toLocaleUpperCase() + palabra.substring(1).toLocaleLowerCase();
}
var resul = miNombreCompleto("alan", "cortés", true);
console.log(resul);
/**
 *  PARAMETROS REST
 *  Recibir x cantidad de parametros y concatenarlos
 */
function usoDeRest(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join("|");
}
var superman = usoDeRest("Clark", "Joseph", "Kent");
var ironman = usoDeRest("Anthony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironman);
/**
 *  TIPO FUNCIÓN
 *  Evitar que la función mute en algo que no es requerido
 */
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I am " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado!!!");
}
var ejemplo_1;
ejemplo_1 = sumar;
console.log(ejemplo_1(25, 15));
var ejemplo_2;
ejemplo_2 = saludar;
console.log(ejemplo_2("Spiderman"));
var ejemplo_3;
ejemplo_3 = salvarMundo;
ejemplo_3();
