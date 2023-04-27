import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HabilidadesBlandas } from '../model/habilidades-blandas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesBlandasService {
 //expURL = 'http://localhost:8080/habilidadesblandas/'
 expURL = 'https://backendnfg.onrender.com/habilidadesblandas/'
  
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<HabilidadesBlandas[]>{
    return this.httpClient.get<HabilidadesBlandas[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<HabilidadesBlandas>{
    return this.httpClient.get<HabilidadesBlandas>(this.expURL + `details/${id}`)
  }

  public save(habilidadesBlandas: HabilidadesBlandas): Observable<any>{
  return this.httpClient.post<any>(this.expURL + 'create', habilidadesBlandas);
  }

  public update (id: number, habilidadesBlandas: HabilidadesBlandas): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, habilidadesBlandas);
  }

  public delete (id: number): Observable<any>{
  return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

}