import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from "./auth.guard";
import { HistoriaClinicaComponent } from './components/historia-clinica/historia-clinica.component';
import { OdontogramaComponent } from './components/odontograma/odontograma.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
  path:'login',
  component:LoginComponent
},
{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthGuard]
},
{
  path:'historia',
  component:HistoriaClinicaComponent,
  canActivate:[AuthGuard]
},
{
  path:'odontograma',
  component:OdontogramaComponent,
  canActivate:[AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
