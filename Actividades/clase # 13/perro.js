import { animal} from "./animal.js";

export class Perro  extends animal{
    constructor(especie, edad, color, nombre, raza, tamaño) {
        super(especie, edad, color);
        this.nombre = nombre;
        this.raza = raza;
        this.tamaño = tamaño;
    }

    ladrar() {
        return "Guau!";
    }
    moverse() {
        return "El perro se está moviendo.";
    }

    comer() {
        return "El perro está comiendo.";
    }
}

