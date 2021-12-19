import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { OdontogramaService } from 'src/app/services/odontograma.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from './IPaciente'
import { Historia } from "./IHistoria";
import { NotificationService } from 'src/app/services/notification.service';
import $ from 'jquery'
import "jquery-datetimepicker";


@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})

export class HistoriaClinicaComponent implements OnInit {

  public pacienteControl: FormGroup | any;
  public paciente: Paciente = {
    nombre: '',
    apellido: '',
    numCedula: '',
    celular: '',
    direccion: '',
    sexo: '',
    fechaNacimiento: '',
    edad: '',
    correo: ''
  };
  pacienteForm;

  public historiaControl: FormGroup | any;


  public historia: Historia = {
    temperatura: '',
    peso: '',
    presion: '',
    anestesia: '',
    alergia: '',
    hemoragia: '',
    tratamientoMedico: '',
    paciente: ''
  }

  historiaForm;

  public odontograma = {
    diagnostico: '',
    pieza: []

  }



  public edited = true;
  public  error = false;
  public  errormail = false;
  constructor(private pacienteService: PacienteService, private odoService: OdontogramaService
    , private router: Router, private formBuilder: FormBuilder, private notifyService: NotificationService) {

    this.pacienteService.numHistorias()
      .subscribe(
        res => {
          console.log(res)


          let app = (<HTMLInputElement>document.getElementById('input')).value = String(res)
          console.log(app);



        },
        err => console.log(err)
      )
    this.pacienteForm = this.formBuilder.group({
      nombre: ['', [Validators.required,Validators.maxLength(25)]],
      apellido: ['', [Validators.required,Validators.maxLength(30)]],
      numCedula: ['', [Validators.required,Validators.maxLength(10)]],
      celular: ['', [Validators.required,Validators.maxLength(10)]],
      direccion: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]]
    });

    this.historiaForm = this.formBuilder.group({
      temperatura: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      presion: ['', [Validators.required]],
      anestesia: [''],
      alergia: [''],
      hemoragia: [''],
      tratamientoMedico: [''],
      paciente: [''],
    });

  }

  ngOnInit(): void {

    
  
  }
  public edadvalue: string = '';
  
  maxDate = new Date(2020, 11, 31);
  CalculateAge() {

    var fechaNace: any = new Date(this.pacienteForm.get('fechaNacimiento')?.value);
    var fechaActual: any = new Date();

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    $("#edad_input").val(Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365)));
    
    this.pacienteForm.controls['edad'].setValue($("#edad_input").val()??null);
   
    console.log(this.pacienteForm.value)
    return $("#edad_input").val(Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365)));

  }

  
  newPaciente() {
    console.log(this.pacienteForm.value)
  
    if (this.pacienteForm.valid) {

      this.pacienteService.crearPaciente(this.pacienteForm.value)
        .subscribe(
          res => {
            console.log(res)
            //this.router.navigate(['/historia'])
            this.edited = false;
            return false;

          },
          err => console.log(err)
        )
    } else {
      this.notifyService.showError("Campos requeridos se encuntran vacios", "Campos requeridos")
      
     
    }





  }
  newHiatoria() {

    if (this.historiaForm.valid) {
      this.historiaForm.setValue({ paciente: String(this.pacienteForm.get('nombre')?.value) });

      this.pacienteService.crearHistoria(this.historiaForm.value)
        .subscribe(
          res => {
            console.log(res)
            this.odoService.crearOdontograma(this.odontograma).subscribe(
              res2 => { console.log(res2) }, err2 => console.log(err2)
            )
            this.router.navigate(['/odontograma'])


          },
          err => console.log(err)
        )
    } else {
      this.notifyService.showError("Campos requeridos se encuntran vacios", "Campos requeridos")
    }


  }



}
