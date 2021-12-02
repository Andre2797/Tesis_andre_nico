import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";
import {AuthService} from "./servicios/aut+/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';
  habilitado =true
  arregloPeliculas=[
    {
      id:1,
      url:'http://www.viuvalencia.com/netpublisher/minfo/imagenes/7312_CARTEL_NOTA_DE_PRENSA_png.png',
      descripcio:'Pelicula de acción',
      nombre:'Harry Potter y la orden del fenix'
    },
    {
      id:2,
      url:'https://hips.hearstapps.com/es.h-cdn.co/crfes/images/ninos/ocio/peliculas-para-ver-en-familia/brave-indomable/3633391-1-esl-ES/Brave-Indomable.jpg',
      descripcio:'Pelicula animada',
      nombre: 'Valiente'
    },
    {
      id:3,
      url:'https://diariodelosandes.com/site/wp-content/uploads/2018/12/estrenos-dic-2018-2-tw-e1544634379116.jpg',
      descripcio:'Pelicula de herores',
      nombre: 'Acuaman'
    }
  ]

  arregloNumeros=[1,2,3]
  arregloUusuarios:any=[];
  arregloObservables:any=[];

  mensajeConsola(objeto:boolean){
    console.log('Llego el evento',objeto);
    const observableTraerTodos=this._usuarioService.traerTodos()
    const suscripcion=observableTraerTodos.subscribe(
      (data)=>{ //then try

        this.arregloUusuarios=data
        console.log(data)
      },
      (error)=>{//catch
        console.log(error)
      }
    )
    this.arregloObservables.push(suscripcion)

  }

  crearUsuario(){
    const usuaarioNuevo={
      cedula:"1234567876",
      nombre:"Carlos",
      apellido:"Sanchez"
    }
    const  obCrearUusuario=this._usuarioService.crear(usuaarioNuevo)
    obCrearUusuario.subscribe(
      (datos)=>{
        console.log('Nuevo Uusuario',datos)
        this.mensajeConsola(true)
      },
      (error)=>{
        console.error("Error",error)
      }
    )
  }

  //Inyectar dependecias
  constructor(
    private readonly _usuarioService:UsuarioService,
    public readonly _autService:AuthService
  ) {
  }
  ngOnInit() {
    this.mensajeConsola(true)
  }
}
