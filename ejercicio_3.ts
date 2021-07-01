
// Objetos
type Automovil = {

    carroceria:string,
    modelo:string,
    antibalas:boolean,
    pasajeros:number,
    disparar?:() => void

};

let batimovil: Automovil = {
    
    carroceria: "Negra",
    modelo:"6x6",
    antibalas: true,
    pasajeros: 4,

}

let bumblebee: Automovil = {

    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){
        console.log("Disparando");
    } 
}



// Villanos debe de ser un arreglo de objetos personalizados
type Villano = {

    nombre:string,
    edad:number | undefined, //esta en modo estricto, revisar tsconfig
    mutante:boolean
};

let villanos1: Villano[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos

  type Charles = {

    poder:string,
    estatura:number

  }

  type Apocalipsis = {

    lider: boolean,
    miembros: string[]
  }

  let charles: Charles = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  let apocalipsis:Apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;