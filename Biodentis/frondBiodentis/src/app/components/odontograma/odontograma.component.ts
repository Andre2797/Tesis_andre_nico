import { Component, OnInit } from '@angular/core';
import { OdontogramaService } from 'src/app/services/odontograma.service';


@Component({
  selector: 'app-odontograma',
  templateUrl: './odontograma.component.html',
  styleUrls: ['./odontograma.component.css']
})
export class OdontogramaComponent implements OnInit {

  constructor( private odoService: OdontogramaService) { }
  
  ngOnInit(): void {
  
    
  }



}
