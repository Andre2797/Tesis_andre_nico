import { Component, OnInit } from '@angular/core';
import { OdontogramaService } from 'src/app/services/odontograma.service';


@Component({
  selector: 'app-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css']
})
export class OdontogramaComponent implements OnInit {

  constructor( private odoService: OdontogramaService) { }
  odontograma = {
    fechaOdonto:Date.now()

  }
  public id_odo:any=''
  ngOnInit(): void {
    this.odoService.crearOdontograma(this.odontograma).subscribe(
      res2 => { console.log(res2)
        return this.id_odo=res2._id;
        

       }, err2 => console.log(err2)
      
    )
    
  }



}
