import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/';
  URL = 'https://backendnfg.onrender.com/personas/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `details/${id}`)
  }
/*
  public save(educacion: Educacion): Observable<any>{
  return this.httpClient.post<any>(this.expURL + 'create', educacion);
  }
*/
  public update (id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }
/*
  public delete (id: number): Observable<any>{
  return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
*/
}
