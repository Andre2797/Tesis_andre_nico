import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario:any;
  mostrarFormulario=false
  constructor(
    private readonly _usuarioService:UsuarioService,
    private readonly _activateRoter:ActivatedRoute,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    const observableRuta=this._activateRoter.params
    observableRuta.subscribe(
      (parametros)=>{
        const id=Number(parametros.id)
        const obUsuario=this._usuarioService.obtenerUnoPoId(id)
        obUsuario.subscribe(
          (usuario:any)=>{
            this.usuario=usuario
            this.llenarFormularioConDatoDelUsuario()
          },(error)=>{
            console.error('error',error)
          }
        )
      }
    )
  }
llenarFormularioConDatoDelUsuario(){
    this.mostrarFormulario=true
}

editarUsuario(usuario:any){
    const observableEditar=this._usuarioService.editar(usuario,this.usuario.id)
  observableEditar.subscribe(
    (datos)=>{
      const url=['/usuario','lista']
      this._router.navigate(url)

    },(error)=>{
      console.error('ERROR',error)
    }
  )
}
}
