import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componentes/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './componentes/acercade/edit-acerca-de/edit-acerca-de.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'editexp/:id',component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule]
  
})
export class AppRoutingModule { }
