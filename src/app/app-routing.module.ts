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
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto/edit-proyecto.component';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades/new-habilidades.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades/edit-habilidades.component';
import { EditHeaderComponent } from './componentes/header/edit-header/edit-header.component';
import { NewHabilidadesBlandasComponent } from './componentes/habilidades-blandas/new-habilidades-blandas/new-habilidades-blandas.component';
import { EditHabilidadesBlandasComponent } from './componentes/habilidades-blandas/edit-habilidades-blandas/edit-habilidades-blandas.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'editexp/:id',component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent},
  {path: 'nuevoproye', component: NewProyectoComponent},
  {path: 'editproye/:id', component: EditProyectoComponent},
  {path: 'nuevahabi', component: NewHabilidadesComponent},
  {path: 'edithabi/:id', component: EditHabilidadesComponent},
  {path: 'editheader/:id', component: EditHeaderComponent},
  {path: 'nuevahabiblanda', component: NewHabilidadesBlandasComponent},
  {path: 'edithabibla/:id', component: EditHabilidadesBlandasComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule]
  
})
export class AppRoutingModule { }
