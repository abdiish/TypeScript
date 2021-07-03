/**
 *  Definición de una clase básica en TypeScript
 */

class Avenger {

    public nombre:string = "Sin nombre";
    protected equipo:string = undefined;
    private nombreReal:string = undefined;

    private puedePerlear:boolean = false;
    private peleasGanadas:number = 0;

    // Inicializar variables o ejeecutar codigo antes de que la clase sea
    // utilizada en otro lado
    constructor( nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

    public bio():void {

        let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
        console.log(mensaje);

    }

    public cambiaEquipoPublico(nuevoEquipo:string):boolean {

        return this.cambiarEquipo(nuevoEquipo);
    }

    private cambiarEquipo(nuevoEquipo:string):boolean {

        if(nuevoEquipo === this.equipo) {

            return false;
        }else{
            return true;
        }
    }
}

let atman:Avenger = new Avenger("Antman","Cap","Scott Lang");

atman.bio();
console.log(atman.cambiaEquipoPublico("Cap"));


/**
 *   Herencia, super y definición de propiedades en el constructor
 */

class Avenger2{

    /* public nombre: string;
    public nombreReal:string;
    */
    constructor(public nombre:string, private nombreReal:string){

        //this.nombre = nombre;
        //this.nombreReal = nombreReal;

    }

    protected getNombre():string {
        return this.nombre;
    }

}

class Xmen extends Avenger2 {

    //Llamado super
    constructor( nombre:string, nombreReal:string) {

        super(nombre, nombreReal);
    }

    //Método public que accede a método protegido
    public getNombre():string{
        return super.getNombre();
    }
}

let ciclope:Xmen = new Xmen("Ciclope", "Scott");
console.log(ciclope.getNombre());


/**
 *   Uso de GET y SET
 */

class Avenger3 {

    private _nombre:string;

    constructor( nombre?:string ){

        this._nombre = nombre;
    }

    get nombre():string {
        
        if(this._nombre){
            return this._nombre;
        }else{
            return "No tiene nombre el avenger";
        }
    }

    set nombre(nombre:string) {
        this._nombre = nombre;
    }
}

let ciclope2:Avenger3 = new Avenger3("Wolverine");
console.log(ciclope2.nombre);

ciclope2.nombre = "Ciclope";

console.log(ciclope2.nombre);


/**
 *  Método y propiedades estáticos
 */

class Xmen2{

    static nombre:string = "Wolverine";
    
    constructor(){

    }


    static crearXmen() {
        return new Xmen2();
    }

}

console.log(Xmen2.nombre);

/**
 *  Clases abstractas
 *  Propiedades sin métodos que seran heredados a otra clase 
 */
abstract class Mutantes{

    constructor( public nombre:string, public nombreReal:string) {

    }

}

class Xmen3 extends Mutantes{

}

let wolverine = new Xmen3("Wolverine", "Logan");

console.log(wolverine);


/***
 *  Constructores privados
 *  Que exista una única instancia
 */


class Apocalipsis2{

    static instancia:Apocalipsis2;

    private constructor(public nombre:string) {

    }

    static llamarApocalipsis() {
        if(!Apocalipsis2.instancia){
            Apocalipsis2.instancia = new Apocalipsis2("Soy Apocalipsis...");
        }

        return Apocalipsis2.instancia;
    }
}

let real = Apocalipsis2.llamarApocalipsis();
console.log(real);