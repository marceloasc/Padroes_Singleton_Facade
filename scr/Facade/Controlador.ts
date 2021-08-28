import { Circulo } from "../Sistema/Circulo";
import { Forma } from "../Sistema/Forma";
import { Retangulo } from "../Sistema/Retangulo";

export class Controlador {

    circulo: Forma;
    retangulo: Forma;

    constructor() {
        this.circulo = new Circulo();
        this.retangulo = new Retangulo();
    }

    desenhoCirculo(): void {
        this.circulo.desenho()
    }

    desenhoRetangulo(): void {
        this.retangulo.desenho()
    }

}
