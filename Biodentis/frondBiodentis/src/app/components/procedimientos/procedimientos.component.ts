import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { OdontogramaService } from '../../services/odontograma.service';

@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrls: ['./procedimientos.component.css']
})
export class ProcedimientosComponent implements OnInit {

  constructor(private pacienteService: PacienteService,private route: ActivatedRoute,private diagnosticoService: OdontogramaService) { }
  firstParam
  paciente
  diagnostico
  general
  tratamiento
  ngOnInit(): void {
    this.firstParam = this.route.snapshot.paramMap.get('id');
    this.fetchPaciente()
  }

  fetchPaciente() {

    this.pacienteService.paciente(this.firstParam)
      .subscribe(
        res => {
          console.log(res);
        this.paciente=res

        this.paciente.odontogramas.forEach(element => {
          this.diagnosticoService.diagnotico(element._id) .subscribe(
            res => {
              console.log(res);
              this.general=res
            this.general.forEach(element => {
              this.diagnostico=element.diagnostico
              this.tratamiento=element.tratamientos

            });
            },
            err => console.log(err)
          )
        });

        },
        err => console.log(err)
      )

  }

}
