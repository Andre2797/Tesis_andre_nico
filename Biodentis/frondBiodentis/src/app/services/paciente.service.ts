import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private URL='http://localhost:3000'
  constructor(private http:HttpClient, ) { }
  crearPaciente(paciente: any): Observable<any> {
    console.log(paciente)
    
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
    return this.http.post(this.URL + '/crearPaciente', paciente, {headers: headers});
    
  }

  crearHistoria(historia: any): Observable<any> {
    console.log(historia)
    
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
    return this.http.post(this.URL + '/crearHistoria', historia, {headers: headers});
    
  }

  numHistorias(){

    let headers = new HttpHeaders().set('Content-Type','application/json');
     
    return this.http.get(this.URL + '/numhistorias', {headers: headers});

  }


}
