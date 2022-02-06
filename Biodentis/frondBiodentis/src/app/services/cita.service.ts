import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private URL='http://localhost:3000'
  constructor(private http:HttpClient) { }

  listaCitas(){

    let headers = new HttpHeaders().set('Content-Type','application/json');
     
    return this.http.get(this.URL + '/reservas', {headers: headers});

  }
}