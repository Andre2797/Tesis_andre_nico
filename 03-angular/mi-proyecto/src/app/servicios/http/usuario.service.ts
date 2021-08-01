import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService{
  //Contructores en anguar sirven para la inyección de dependencias
  url='http://localhost:1337'
  constructor(
    private readonly _httpClient:HttpClient
  ) {
  }

  traerTodos(consulta?:string){
    return this._httpClient.get(this.url+'/Usuario?'+consulta)
  }

  //  post /USUARIO
  crear(usuario:any){
    return this._httpClient.post(this.url+'/Usuario',usuario)
  }

  obtenerUnoPoId(idUusario:number){
    return this._httpClient.get(this.url+'/Usuario/'+idUusario)
  }

  eliminar(id:Number){
    return this._httpClient.delete(this.url+'/Usuario/'+id)
  }
  editar(usuario:any,id:number){
    return this._httpClient.put(this.url+'/Usuario/'+id,usuario)


  }
}
