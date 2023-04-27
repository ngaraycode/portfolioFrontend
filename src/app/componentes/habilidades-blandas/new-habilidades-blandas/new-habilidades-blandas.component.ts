import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesBlandas } from 'src/app/model/habilidades-blandas';
import { HabilidadesBlandasService } from 'src/app/service/habilidades-blandas.service';

@Component({
  selector: 'app-new-habilidades-blandas',
  templateUrl: './new-habilidades-blandas.component.html',
  styleUrls: ['./new-habilidades-blandas.component.css']
})
export class NewHabilidadesBlandasComponent {
  nombre: string = '';
  porcentaje: number;
  urlImg: string = '';

  constructor(private sHabilidadesBlandas: HabilidadesBlandasService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidadesblandas = new HabilidadesBlandas(this.nombre,this.porcentaje,this.urlImg);
    this.sHabilidadesBlandas.save(habilidadesblandas).subscribe(
      data => {
        alert("Habilidadad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}