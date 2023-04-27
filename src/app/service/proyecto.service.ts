import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
 //expURL = 'http://localhost:8080/proye/'
 expURL = 'https://backendnfg.onrender.com/proye/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.expURL + `details/${id}`)
  }

  public save(proyecto: Proyecto): Observable<any>{
  return this.httpClient.post<any>(this.expURL + 'create', proyecto);
  }

  public update (id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, proyecto);
  }

  public delete (id: number): Observable<any>{
  return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

}
