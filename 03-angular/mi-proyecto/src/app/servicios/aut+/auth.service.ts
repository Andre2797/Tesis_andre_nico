import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class AuthService{
  estaAutenticado=false
  url='http://localhost:1337'
  roles=[
    'Administrador','Supervisor'
  ]
  constructor(
    public readonly _httpClient:HttpClient
  ) {
  }

  login(correo: string | undefined, cedula: string | undefined){
    return this._httpClient.get(this.url+'/Usuario?correo='+correo+'&cedula='+cedula)
  }
}
