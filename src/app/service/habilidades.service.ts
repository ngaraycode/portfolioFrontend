import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidades } from '../model/habilidades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  //expURL = 'http://localhost:8080/habilidades/'
  expURL = 'https://backendnfg.onrender.com/habilidades/'
  
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.expURL + `details/${id}`)
  }

  public save(habilidades: Habilidades): Observable<any>{
  return this.httpClient.post<any>(this.expURL + 'create', habilidades);
  }

  public update (id: number, habilidades: Habilidades): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, habilidades);
  }

  public delete (id: number): Observable<any>{
  return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

}
