var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
/**
 *  Mismo archivo:
 *  - Interfaces
 *  - Clases
 *  - Logica
 *  - Funciones
 *
 *  Segmentar la información en diversos archivos
 *
 *  1.- Interfaces -> Folders -> Archivos
 *  2.- Clases
 *  3.- Logica
 *  4.- Funciones
 */
/**
 *   Un namespaces es una agrupación de funciones y propiedades que estan de manera global
 */
/* let hoy = new Date(); */
if (Validaciones.validarTexto("Barry Allen")) {
    console.log("El texto es valido");
}
else {
    console.log("El texto no es valido");
}
/* console.log( Validaciones.validarFecha(hoy) ); */
