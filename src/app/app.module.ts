import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopComponent } from './componentes/top/top.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PruebasComponent } from './componentes/pruebas/pruebas.component';
// implementacion
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './componentes/acercade/edit-acerca-de/edit-acerca-de.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto/edit-proyecto.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewHabilidadesComponent } from './componentes/habilidades/new-habilidades/new-habilidades.component';
import { EditHabilidadesComponent } from './componentes/habilidades/edit-habilidades/edit-habilidades.component';
import { EditHeaderComponent } from './componentes/header/edit-header/edit-header.component';
import { HabilidadesBlandasComponent } from './componentes/habilidades-blandas/habilidades-blandas.component';
import { NewHabilidadesBlandasComponent } from './componentes/habilidades-blandas/new-habilidades-blandas/new-habilidades-blandas.component';
import { EditHabilidadesBlandasComponent } from './componentes/habilidades-blandas/edit-habilidades-blandas/edit-habilidades-blandas.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    FooterComponent,
    ProyectosComponent,
    PruebasComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditAcercaDeComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    NewHabilidadesComponent,
    EditHabilidadesComponent,
    EditHeaderComponent,
    HabilidadesBlandasComponent,
    NewHabilidadesBlandasComponent,
    EditHabilidadesBlandasComponent
  ],
  imports: [
    BrowserModule,
    //cambios implementation
    HttpClientModule,
    //
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true}),
    AppRoutingModule,
    RouterModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider,
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
