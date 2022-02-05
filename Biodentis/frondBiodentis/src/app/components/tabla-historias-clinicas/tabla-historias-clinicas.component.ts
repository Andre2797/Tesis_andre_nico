import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Paciente } from '../historia-clinica/IPaciente';
import { OdontogramaService } from 'src/app/services/odontograma.service';
interface IPaginate {
  itemsPerPage: number[],
  currentPage: number,
  totalItems: number
}
@Component({
  selector: 'app-tabla-historias-clinicas',
  templateUrl: './tabla-historias-clinicas.component.html',
  styleUrls: ['./tabla-historias-clinicas.component.scss']

})

export class TablaHistoriasClinicasComponent implements OnInit {

  public paciente: any = [];
  public page = 1;
  public count = 0;
  public tableSize = 1;
  public tableSizes = [3, 6, 9, 12];

  public paginate: IPaginate = {
    itemsPerPage: [this.tableSize],
    currentPage: this.page,
    totalItems: this.count
  }

  constructor(private pacienteService: PacienteService) {


  }

  ngOnInit(): void {
    this.fetchPacientes();

  }





  fetchPacientes() {
    this.pacienteService.pacientes(this.page, 3)
      .subscribe(
        res => {
          console.log(res)
            ;
          this.paciente = res;
        },
        err => console.log(err)
      )
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPacientes();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPacientes();
  }
  buscarpaciente = {
    nombre: '',
    numCedula: ''
  }
  //función que realiza la busqueda
  jsBuscar() {

    //obtenemos el valor insertado a buscar
    const buscar = $("#busqueda").prop("value")

    const nombre = <HTMLInputElement>document.getElementById("option-1");
    var isCheckedname = nombre.checked;
    if (isCheckedname) {
      this.buscarpaciente.numCedula = buscar
      this.buscarpaciente.nombre = null
    } else {
      this.buscarpaciente.nombre = buscar
      this.buscarpaciente.numCedula = null
    }

    this.pacienteService.buscarPaciente(this.buscarpaciente).subscribe(
      res => {
        console.log(res)
          ;
        this.paciente = res;
      },
      err => console.log(err)
      
    )



  }
}