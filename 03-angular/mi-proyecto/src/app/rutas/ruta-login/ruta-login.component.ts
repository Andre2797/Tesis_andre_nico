import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/aut+/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {
  correoModelo: string | undefined
  cedulaModelo: string | undefined
  constructor(
    public readonly _authService:AuthService
  ) { }

  ngOnInit(): void {
  }
  revisarLogin(formularioLogin:any){
  const authLogin=this._authService.login(this.correoModelo,this.cedulaModelo)
    authLogin.subscribe(
      (arregloUsuarios:any)=>{
        if(arregloUsuarios.length >0){
          this._authService.estaAutenticado=true
        }else{
          this._authService.estaAutenticado=false
        }
      },
      (error)=>{

      }
    )
  }
}
