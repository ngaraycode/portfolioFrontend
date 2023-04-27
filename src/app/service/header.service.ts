import { Injectable } from '@angular/core';
import { Header } from '../model/header';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  //URL = 'http://localhost:8080/header/';
  URL = 'https://backendnfg.onrender.com/header/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Header[]>{
    return this.httpClient.get<Header[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Header>{
    return this.httpClient.get<Header>(this.URL + `details/${id}`)
  }
/*
  public save(educacion: Educacion): Observable<any>{
  return this.httpClient.post<any>(this.expURL + 'create', educacion);
  }
*/
  public update (id: number, header: Header): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, header);
  }
/*
  public delete (id: number): Observable<any>{
  return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
*/
}
