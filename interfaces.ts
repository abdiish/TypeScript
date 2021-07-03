interface XmenInterface {

    nombre:string, 
    //poder?:string //Parametro opcional con signo ?
    //Función
    regenerar(nombreReal:string):void;
}


function enviarMision(xmen: XmenInterface) {

    console.log("Enviando a: " + xmen.nombre);

    xmen.regenerar("Logan");

};

function enviarCuartel(xmen: XmenInterface) {

    console.log("Enviando al cuartel: " + xmen.nombre);

};

//Objeto con nombre y método
let Wolverine = {
    nombre: "Wolverine",
    regenerar(x:string){
        console.log("Se ha regenerado:" + x );
    }
};


enviarMision(Wolverine);
enviarCuartel(Wolverine);


/**
 *  Interfaces en las clases 
 */


/***
 *  Interfaces en las funciones
 *  Es importrante: Que reciba los parametros y retorme el valor que se espera.
 */

interface DosNumerosFunc{
    (num1:number, num2:number):number

}

let sumarEjemplo:DosNumerosFunc;

sumarEjemplo = function(a:number, b:number) {
    return a + b;
}

console.log(sumarEjemplo(2,3));

let restarEjemplo:DosNumerosFunc;

restarEjemplo = function(a:number,b:number) {
    return a - b; 
}

console.log(restarEjemplo(10,3));