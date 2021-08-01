import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/http/usuario.service";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./servicios/aut+/auth.service";
import {EstalogeadoGuard} from "./servicios/guards/estalogeado.guard";
import {EsAdministradorGuard} from "./servicios/guards/esAdministrador.guard";
import {EsSupervisorGuard} from "./servicios/guards/esSupervisor.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [ //componentes
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutaUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    FormularioUsuarioComponent
  ],
  imports: [ //modulos vamos a usar
    BrowserModule, //importa el NGFOR NGIF
    AppRoutingModule,
    HttpClientModule,// Importa el httpClient
    FormsModule, //permite la funcionalidad de formularios de templete
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    ButtonModule,

  ],
  providers: [//servicios
    UsuarioService,
    AuthService,
    EstalogeadoGuard,
    EsAdministradorGuard,
    EsSupervisorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
