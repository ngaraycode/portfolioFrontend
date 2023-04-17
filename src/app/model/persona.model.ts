export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    cargo: string;
    descripcion: string;
    fotoPerfil: string;

    constructor(nombre: string,apellido: string,cargo: string, descripcion: string,fotoPerfil: string){
        this.nombre = nombre;
        this.apellido =apellido;
        this.descripcion = descripcion;
        this.cargo = cargo;
        this.fotoPerfil = fotoPerfil;
    }
}