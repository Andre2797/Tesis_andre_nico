import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit, OnDestroy {
  @Input()
  urlImagen: string ='https://www.lavanguardia.com/files/image_449_220/uploads/2019/12/20/5fa53034cd854.jpeg';

  @Input()
  descripcion: string | undefined;

  @Input()
  nombreBoton: string | undefined;
  @Output()
  eventoDioClicEnBoton:EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioClicEnImagen:EventEmitter<boolean> = new EventEmitter<boolean>()

  textoEjemplo='Andrea'
  urlEjemplo='https://www.google.com'

  constructor() {
    console.log('CONTRUCTOR')
  }

  ngOnInit(): void {
    console.log('INIT')
    //Logica inicial del componente
  }
  ngOnDestroy() {
  console.log('DESTROY')
    //dessucriir de todas las suscripciones
  }

  ejemploFuncion(){
    alert("HOLA!!!")
  }
  eventoOnBlur(){
    console.log('BLUR')
  }
  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true)
  }

  ejecutarEventoDioClicImagen(){
    this.eventoDioClicEnImagen.emit(true)
  }
}
