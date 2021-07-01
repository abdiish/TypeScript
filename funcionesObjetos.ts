/**
 *  FUNCIONES BASICAS
 */

let ejemploHeroe: string = "Flash";

function imprime_heroe():string{
    return ejemploHeroe;
}

let activar_batisenal = function():string{

    return "Batiseñal activada";
}

console.log(imprime_heroe());
console.log(activar_batisenal());

/**
 *  PARAMETROS OBLIGATORIOS DE LAS FUNCIONES
 */

function nombreCompleto(nombre:string, apellido:string):string{

    return nombre +' '+ apellido;

}

let nombre = nombreCompleto("clark", "kent");

console.log(nombre);

/**
 *  PARAMETROS OPCIONALES
 */

function nombreCompleto2(nombre2:string, apellido2?:string):string{

    if(apellido2) {
    
        return nombre2 +" "+apellido2;

    }else{

        return nombre2;
    }
}

let resp = nombreCompleto2("Barry");

console.log(resp);

/**
 * Parametros por defecto 
 */

function miNombreCompleto(nombre:string, apellido:string, capitalizado:boolean = true) {

    if(capitalizado){
        return capitalizar(nombre) +" "+ capitalizar(apellido);
    }else{
        return nombre +" "+apellido;
    }
   
}

function capitalizar(palabra:string):string{
    return palabra.charAt(0).toLocaleUpperCase() + palabra.substring(1).toLocaleLowerCase();
}

var resul = miNombreCompleto("alan", "cortés", true);

console.log(resul);

/**
 *  PARAMETROS REST
 *  Recibir x cantidad de parametros y concatenarlos
 */

function usoDeRest(nombre:string, ...losDemasParametros:string[]):string {

    return nombre +" "+ losDemasParametros.join("|");
}

let superman:string = usoDeRest("Clark", "Joseph", "Kent");
let ironman:string  = usoDeRest("Anthony", "Edward", "Tony", "Stark");

console.log(superman);
console.log(ironman);

/**
 *  TIPO FUNCIÓN
 *  Evitar que la función mute en algo que no es requerido
 */

function sumar(a:number, b:number):number {

    return a + b;
}

function saludar(nombre:string):string {
    return "I am "+nombre;
}

function salvarMundo():void{
    console.log("El mundo esta salvado!!!");
}

let ejemplo_1: (a:number, b:number) => number;
ejemplo_1 = sumar;
console.log( ejemplo_1(25,15) );

let ejemplo_2: (nombre:string) => string;
ejemplo_2 = saludar;
console.log(ejemplo_2("Spiderman"));

let ejemplo_3: () => void;
ejemplo_3 = salvarMundo;
ejemplo_3();