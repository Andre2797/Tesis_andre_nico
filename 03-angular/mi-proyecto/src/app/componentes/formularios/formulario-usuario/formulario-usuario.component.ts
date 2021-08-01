import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  @Input()
  nombreInput: string | undefined

  @Input()
  cedulaInput: string | undefined

  @Input()
  estadoCivilInput: string | undefined

  @Output()
  informacionValidada:EventEmitter<any>=new EventEmitter<any>()

  nombreModelo: string | any
  cedulaModelo: string | any
  estadoCivilModelo: string | any
  constructor() { }

  ngOnInit(): void {
    if(this.nombreInput && this.cedulaInput && this.estadoCivilInput){
      this.nombreModelo=this.nombreInput
      this.cedulaModelo=this.cedulaInput
      this.estadoCivilModelo=this.estadoCivilInput
    }
  }
  crearUusuario(formulario:any){
    const cedula=this.cedulaModelo
    const esNumero=!isNaN(Number(cedula))
    if(esNumero){
      //llamar al servicio HTTP y eviar un post al ervidor los datos del formulario
      console.log('LISTO :D')
      this.informacionValidada.emit({
        nombre:this.nombreModelo,
        cedula:this.cedulaModelo,
        estadoCivil:this.estadoCivilModelo
      })
    }else {
      console.error('No es un numero')
    }
    console.log(formulario)
  }
  ayuda(){
    alert('AYUDA!!!')
  }

}
