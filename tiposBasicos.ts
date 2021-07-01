/**
 *  BOOLEANS
 */
let esSuperman  :boolean  = true;
let esBatman    :boolean;
let esAcuaman   :boolean  = true;

if( esSuperman ) {
    console.log("Estamos salvados!!!");
}else{
    console.log("Oops!!!");
}

/**
 *  NUMBERS  
 */

let avengers    :number = 5;
let villanos    :number = 3;

let otros = 2;


if( avengers > villanos) {
    console.log("Estamos salvados!!!");
}else{
    console.log("Estamos muertos!!!");
}

/**
 * STRINGS
 */

let batman        :string = "Batman";
let linternaVerde :string = "Linterna Verde";
let volcanNegro   :string = 'Volcan Negro';

console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);

let concatenar:string = "Los héroes que tenemos, son: "+batman+","+linternaVerde+","+volcanNegro;
console.log(concatenar);

let concat:string = `${batman},${linternaVerde},${volcanNegro}`;
console.log(concat);

/**
 * ANY 
 */

let vengador:any;
let existe;
let derrotas;

vengador = "Dr. Strange";
console.log(vengador.charAt(0));


vengador = 150.4567;
console.log(vengador.toFixed(2));


vengador = true;
console.log(vengador);

/**
 *  ARRAYS
 */


let arreglo:number[] = [1,2,3,4,5,6,7,8,9,0];

let villanosA:string[] = ["Omega Rojo", "Dormammu","Duender Verde"];

console.log(villanosA[0].charAt(0));

/***
 * Tuples
 */

let heroe:[string,number, boolean] = ["Dr. Strange", 100, true];

/**
 *  Enum - Enumeraciuones
 */

enum Volumen{
    min,
    medio,
    maximo
}

let audio:number = Volumen.min;

console.log(audio);

console.log(Volumen);

/**
 *  Void - Vacio
 */

function llamarBatman():void{
    console.log("Mostrar la batiseñal");
}

/***
 *  Never- Nunca
 *  Representa un valor que nunca puede suceder
 */

function error(mensaje:any):never{

    throw new Error(mensaje);
}

error("Error critico...");

/**
 *  ASERCIONES DE TIPO 
 */

let cualquierValor: any = "Cualquier valor";

let largoDelString: number = 
    (<string>cualquierValor).length;

console.log(largoDelString);

