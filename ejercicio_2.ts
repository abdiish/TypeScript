//Funciones basicas
function sumar1(a:number, b:number):number {

    return a + b;
}

console.log(sumar1(23,34));

let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

let contar = function(heroes:string[]):number{
    
    return heroes.length;
}

console.log(contar(superHeroes));

//Parametros por defecto
function llamarBatman1(llamar:boolean = true):void{

    if(llamar){
        return console.log("Batiseñal activada.");
    }

}

llamarBatman1();

//Rest
function unirheroes(nombre:string, ...personas:string[]):string {

    return nombre +" "+personas.join(",")
}

let superman1:string = unirheroes("Clark", "Joseph", "Kent");
let ironman1:string  = unirheroes("Anthony", "Edward", "Tony", "Stark");

console.log(superman1);
console.log(ironman1);

//Tipo función
function noHacenada(numero:number, texto:string, booleano:boolean, arreglo:any[]){

}

let noHaceNadaTampoco: (n:number, t:string, b:boolean, a:any[]) => void;
noHaceNadaTampoco = noHacenada;


