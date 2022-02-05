import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import InteractionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import $ from 'jquery';
import 'bootstrap';
import { Calendar } from '@fullcalendar/core';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {



  ngOnInit(): void {




  }
  constructor(private citaService: CitaService) {

  }

  listarCitas() {
    this.citaService.listaCitas()
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )
  }


}

