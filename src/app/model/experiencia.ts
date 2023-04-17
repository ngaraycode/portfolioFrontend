export class Experiencia {
    id? : number;
    nombreE : string;
    fechaI : string;
    fechaF : string;
    descripcionE : string;
    fotoE : string;

    constructor(nombreE: string,fechaI: string,fechaF: string, descripcionE: string,fotoE: string) {
        this.nombreE = nombreE;
        this.fechaI = fechaI;
        this.fechaF = fechaF;
        this.descripcionE = descripcionE;
        this.fotoE = fotoE;
    }
}
