import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdontogramaService {

  

  private URL='http://localhost:3000'
  constructor(private http:HttpClient, ) { }
  crearOdontograma(odontograma: any): Observable<any> {
    console.log(odontograma)
    
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
    return this.http.post(this.URL + '/crearOdontograma', odontograma, {headers: headers});
    
  }
}
