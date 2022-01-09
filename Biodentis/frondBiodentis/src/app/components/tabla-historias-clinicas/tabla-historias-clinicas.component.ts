import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 
import { Paciente } from '../historia-clinica/IPaciente';
interface IPaginate{
  itemsPerPage: number[],
    currentPage:number,
    totalItems: number
}
@Component({
  selector: 'app-tabla-historias-clinicas',
  templateUrl: './tabla-historias-clinicas.component.html',
  styleUrls: ['./tabla-historias-clinicas.component.scss']
  
})

export class TablaHistoriasClinicasComponent implements OnInit {
 
  public paciente:any=[];
  public page = 1;
  public count = 0;
  public tableSize = 1;
  public tableSizes = [3, 6, 9, 12];

  public paginate:IPaginate={
    itemsPerPage: [this.tableSize],
    currentPage:this.page,
    totalItems: this.count
  }

  constructor(private pacienteService: PacienteService,) { 
    
  
  }

  ngOnInit(): void {
    this.fetchPacientes();

  }

  fetchPacientes(){
    this.pacienteService.pacientes(this.page,3)
    .subscribe(
      res => {
        console.log(res)
        ;
       this.paciente = res;
      },
      err => console.log(err)
    )
  }
  onTableDataChange(event:any){
  this.page = event;
  this.fetchPacientes();
  }

onTableSizeChange(event:any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.fetchPacientes();
}


}