import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponent} from "./rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";
import {EstalogeadoGuard} from "./servicios/guards/estalogeado.guard";
import {EsAdministradorGuard} from "./servicios/guards/esAdministrador.guard";
import {EsSupervisorGuard} from "./servicios/guards/esSupervisor.guard";

const routes: Routes = [
  {
    component:RutaLoginComponent, //componente
    path:'login' //URL
  },
  {
    component:RutaInicioComponent, //componente
    path:'inicio' //URL
  },

  {
    component:RutaUsuarioComponent, //componente
    path:'usuario', //URL
    canActivate:[
      EstalogeadoGuard
    ],
    children:[{
        path:'lista',
      component:RutaListaUsuarioComponent
    },{
      path:'crear',
      component:RutaCrearUsuarioComponent,
      canActivate:[
        EsSupervisorGuard
      ]

    },{
      path:'editar/:id',
      component:RutaEditarUsuarioComponent,
      canActivate:[
        EsAdministradorGuard
      ]
    },{
      path:'',
      redirectTo:'lista',
      pathMatch:'full'

    },

    ]
  },
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
