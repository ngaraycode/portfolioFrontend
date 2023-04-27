import { Component } from '@angular/core';
import { HabilidadesBlandas } from 'src/app/model/habilidades-blandas';
import { HabilidadesBlandasService } from 'src/app/service/habilidades-blandas.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css']
})
export class HabilidadesBlandasComponent {
  habilidadesBlandas: HabilidadesBlandas[] = [];

  constructor(private sHabilidadesBlandas: HabilidadesBlandasService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.sHabilidadesBlandas.lista().subscribe(data => { this.habilidadesBlandas = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sHabilidadesBlandas.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}
