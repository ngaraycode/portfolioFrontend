import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from 'src/app/model/header';
import { HeaderService } from 'src/app/service/header.service';
import { ImageHService } from 'src/app/service/image-h.service';


@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent {
  header: Header = null;

  constructor(private activatedRouter: ActivatedRoute, private headerService: HeaderService, private router: Router, public imageHService : ImageHService){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.headerService.detail(id).subscribe(
        data =>{
          this.header = data;
        }, err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
  }
  
  
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.header.nombre = this.imageHService.url
    this.headerService.update(id, this.header).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar el header");
         this.router.navigate(['']);
      }
    )
  }
  
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "header_" + id;
    this.imageHService.uploadImage($event,name)
  }
  
  }
  