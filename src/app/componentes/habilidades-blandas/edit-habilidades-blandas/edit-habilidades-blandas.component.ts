import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesBlandas } from 'src/app/model/habilidades-blandas';
import { HabilidadesBlandasService } from 'src/app/service/habilidades-blandas.service';

@Component({
  selector: 'app-edit-habilidades-blandas',
  templateUrl: './edit-habilidades-blandas.component.html',
  styleUrls: ['./edit-habilidades-blandas.component.css']
})
export class EditHabilidadesBlandasComponent implements OnInit {
  habiB: HabilidadesBlandas = null;

  constructor(private sHabilidadesblandas: HabilidadesBlandasService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidadesblandas.detail(id).subscribe(
      data =>{
        this.habiB = data;
      }, err =>{
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidadesblandas.update(id, this.habiB).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar la habilidad");
         this.router.navigate(['']);
      }
    )
  }

}
