export class Habilidades {
    id? : number;
    nombre : string;
    porcentaje : number;
    urlImg : string;
    constructor(nombre : string, porcentaje : number, urlImg : string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.urlImg = urlImg;
    }
}
