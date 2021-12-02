import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OdontogramaService } from 'src/app/services/odontograma.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {


 

  public paciente={
    nombre:'',
    apellido:'',
    numCedula:'',
    celular:'',
    direccion:'',
    sexo:'',
    fechaNacimiento:'',
    edad:'',
    correo:''
    
  }
  public historia={
    temperatura:'',
    peso:'',
    presion:'',
    anestesia:'',
    alergia:'',
    hemoragia:'',
    tratamientoMedico:'',
    paciente:''
  }

  public odontograma={
    diagnostico:'',
    pieza:[]
    
  }

  
  
  public edited = true;
  constructor(private pacienteService:PacienteService,private odoService:OdontogramaService
    ,private router:Router) {
      this.pacienteService.numHistorias()
  .subscribe(
    res=>{
      console.log(res)
      
      
      let app =(<HTMLInputElement>document.getElementById('input')).value=String(res)
      console.log(app);
      
      
      
    },
    err=>console.log(err)
  )
     }

  ngOnInit(): void {
  }
  CalculateAge(): number {
   
    var fechaNace:any = new Date(this.paciente.fechaNacimiento);
    var fechaActual:any = new Date();

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);
    this.paciente.edad=String(Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365)));

    return Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));
}
newPaciente(){
  console.log(this.paciente)
 

  this.pacienteService.crearPaciente(this.paciente)
  .subscribe(
    res=>{
      console.log(res)
      //this.router.navigate(['/historia'])
      this.edited=false;
      return false;
      
    },
    err=>console.log(err)
  )
 

}
newHiatoria(){
  this.historia.paciente=String(this.paciente.nombre);
  
  this.pacienteService.crearHistoria(this.historia)
  .subscribe(
    res=>{
      console.log(res)
      this.odoService.crearOdontograma(this.odontograma).subscribe(
        res2=> {console.log(res2)},err2=>console.log(err2)
      )
      this.router.navigate(['/odontograma'])
      
      
    },
    err=>console.log(err)
  )
}



}
