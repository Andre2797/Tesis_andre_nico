import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL='http://localhost:3000'
 
 
  constructor(private http:HttpClient, 
    ) {
    
   }

  login(user: any): Observable<any> {
    console.log(user)
    //let json = JSON.stringify(user);
    //let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
     
    return this.http.post(this.URL + '/login', user, {headers: headers});
    
  }

  loggedIn(){
    if(localStorage.getItem('token')){
      return true
    }else{
      return false
    }
  }
}
