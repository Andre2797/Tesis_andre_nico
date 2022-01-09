import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from "./auth.guard";
import { HistoriaClinicaComponent } from './components/historia-clinica/historia-clinica.component';
import { OdontogramaComponent } from './components/odontograma/odontograma.component';
import { TablaHistoriasClinicasComponent } from './components/tabla-historias-clinicas/tabla-historias-clinicas.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CitaComponent } from './components/cita/cita.component';

const routes: Routes = [
  
  { path: '', redirectTo:'login', pathMatch : 'full'},
  { path: 'login', component: LoginComponent },
  

  { path: 'menu', component: NavbarComponent,canActivate:[AuthGuard],children: [
    {
      path:'home',
      component:HomeComponent,
     
    },
    {
      path:'historia/:id',
      component:HistoriaClinicaComponent,
      
    },
    {
      path:'odontograma',
      component:OdontogramaComponent,
      
    },
    {
      path:'tabla-Historias-Clinicas',
      component:TablaHistoriasClinicasComponent,
     
    },
    {
      path:'menunav',
      component:MenuComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'crearCita',
      component:CitaComponent,
      canActivate:[AuthGuard]
    }
  ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }