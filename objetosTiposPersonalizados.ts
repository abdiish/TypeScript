
// Se crea una definición de tipo

type Heroe = {

    nombre:string, 
    edad:number, 
    //poderes:string[], 
    //getNombre:() => string
}

let flash: Heroe = {

    nombre: "Barry Allen",
    edad:24,
    /* //poderes: ["Puede correr muy rápido", "Viajar por ele tiempo"],
    getNombre() {
        return this.nombre;
    } */
};

// Multiples tipos permitidos
let loquesea: string | number | Heroe = "Fernando";

loquesea = {
    nombre: "Superman",
    edad: 34,
};

/**
 *  REVISAR EL TIPO DE UN OBJETO O VARIABLE
 *  Usar typeof para verificar el tipo de un objeto o  variable
 */


let cosa: any = 123;

console.log(typeof cosa);

if(typeof cosa === "number") {
    console.log("Cosa es un número"); 
}else{
    console.log("No es un string");
}

