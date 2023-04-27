export class Proyecto {
    id? : number;
    nombreP : string;
    fecha : string;
    descripcionP : string;
    link: string;
    fotoP : string;

    constructor(nombreP: string,fecha: string, descripcionP: string,link: string,fotoP: string) {
        this.nombreP = nombreP;
        this.fecha = fecha;      
        this.descripcionP = descripcionP;
        this.link = link;
        this.fotoP = fotoP;
    }

}
