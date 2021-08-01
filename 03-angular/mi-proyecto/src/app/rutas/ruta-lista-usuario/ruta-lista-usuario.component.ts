import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Route, Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {
  arregloUusuario:any=[]
  busquedaModelo=''
  constructor(//InyectaDepedencias
    private readonly _usuarioService: UsuarioService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    this.filtrarArreglo()

  }

  irAEditarUsuario(id:number){
    const ruta=['usuario','editar',id]
    this._router.navigate(ruta)
  }
  eliminarUsuario(id:number){
    const obsEliminar= this._usuarioService.eliminar(id)
    obsEliminar.subscribe(
      ()=>{
        const indice=this.arregloUusuario.findIndex((u: { id: number; })=>u.id===id)
        this.arregloUusuario.splice(indice,1)
      },
      (error)=>{
        console.error('error',error)
      }
    )
  }
  filtrarArreglo(){
  const  consulta={
    or:[
      {

      nombre: {
        contains: this.busquedaModelo
      }
      },
      {
        cedula: {
          contains: this.busquedaModelo
        }
      }
    ]
  }
  const consultaString='where='+JSON.stringify(consulta)
    const observableTrarTodos= this._usuarioService.traerTodos(this.busquedaModelo != '' ? consultaString : '')
    observableTrarTodos.subscribe(

      (usuarios:any=[])=>{
        this.arregloUusuario=usuarios
      },(error)=>{
        console.error('Error',error)
      }
    )

  }


}
