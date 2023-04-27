import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent {
  nombre: string = '';
  porcentaje: number;
  urlImg: string = '';

  constructor(private sHabilidades: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidades = new Habilidades(this.nombre,this.porcentaje,this.urlImg);
    this.sHabilidades.save(habilidades).subscribe(
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
