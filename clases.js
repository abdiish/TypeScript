/**
 *  Definición de una clase básica en TypeScript
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = /** @class */ (function () {
    // Inicializar variables o ejeecutar codigo antes de que la clase sea
    // utilizada en otro lado
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.equipo = undefined;
        this.nombreReal = undefined;
        this.puedePerlear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambiaEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avenger;
}());
var atman = new Avenger("Antman", "Cap", "Scott Lang");
atman.bio();
console.log(atman.cambiaEquipoPublico("Cap"));
/**
 *   Herencia, super y definición de propiedades en el constructor
 */
var Avenger2 = /** @class */ (function () {
    /* public nombre: string;
    public nombreReal:string;
    */
    function Avenger2(nombre, nombreReal) {
        //this.nombre = nombre;
        //this.nombreReal = nombreReal;
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    Avenger2.prototype.getNombre = function () {
        return this.nombre;
    };
    return Avenger2;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    //Llamado super
    function Xmen(nombre, nombreReal) {
        return _super.call(this, nombre, nombreReal) || this;
    }
    //Método public que accede a método protegido
    Xmen.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger2));
var ciclope = new Xmen("Ciclope", "Scott");
console.log(ciclope.getNombre());
/**
 *   Uso de GET y SET
 */
var Avenger3 = /** @class */ (function () {
    function Avenger3(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger3.prototype, "nombre", {
        get: function () {
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene nombre el avenger";
            }
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Avenger3;
}());
var ciclope2 = new Avenger3("Wolverine");
console.log(ciclope2.nombre);
ciclope2.nombre = "Ciclope";
console.log(ciclope2.nombre);
/**
 *  Método y propiedades estáticos
 */
var Xmen2 = /** @class */ (function () {
    function Xmen2() {
    }
    Xmen2.crearXmen = function () {
        return new Xmen2();
    };
    Xmen2.nombre = "Wolverine";
    return Xmen2;
}());
console.log(Xmen2.nombre);
/**
 *  Clases abstractas
 *  Propiedades sin métodos que seran heredados a otra clase
 */
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var Xmen3 = /** @class */ (function (_super) {
    __extends(Xmen3, _super);
    function Xmen3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen3;
}(Mutantes));
var wolverine = new Xmen3("Wolverine", "Logan");
console.log(wolverine);
/***
 *  Constructores privados
 *  Que exista una única instancia
 */
var Apocalipsis2 = /** @class */ (function () {
    function Apocalipsis2(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis2.llamarApocalipsis = function () {
        if (!Apocalipsis2.instancia) {
            Apocalipsis2.instancia = new Apocalipsis2("Soy Apocalipsis...");
        }
        return Apocalipsis2.instancia;
    };
    return Apocalipsis2;
}());
var real = Apocalipsis2.llamarApocalipsis();
console.log(real);
