let frm = document.getElementById('formulario');
let eliminar = document.getElementById('btnEliminar');
let idedit = "";

document.addEventListener('DOMContentLoaded', async function () {

  var request = new Request('http://localhost:3000/reservas', {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json'
    },

  });


  const res = await (fetch(request));
  const citasinformato = await res.json();
  console.log(citasinformato)



  const citasnew = citasinformato.map(item => {
    const cita = {};
    cita.title = item.motivo
    fechahora = moment(item.fecha).format('YYYY-MM-DD HH:mm');
    cita.start = fechahora



    return cita;
  })

  console.log(citasnew)

  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],

    header: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth, timeGridWeek, listWeek'
    },
    defaultView: 'dayGridMonth',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    dateClick: function (info) {
      /* frm.reset(); */
      /* eliminar.classList.add('d-none'); */

      console.log(citasinformato)
      document.getElementById('start').value = info.dateStr;
      document.getElementById('nombre').value;
      document.getElementById('apellido').value;
      document.getElementById('btnAccion').textContent = 'Registrar';
      document.getElementById('titulo').textContent = 'Registrar Cita';
      $("#modalAbandonedCart").modal('show');


    },

    eventClick: async function (info) {
      console.log(info.event.start)
      console.log(moment(info.event.start).format('YYYY-MM-DD HH:mm'))
      var request = new Request('http://localhost:3000/reservaedit/' + moment(info.event.start).format('YYYY-MM-DD HH:mm'), {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json'
        }

      });


      const res = await (fetch(request));
      const citasinformato = await res.json();
      console.log(moment(info.event.start).format('DD/MM/YYYY HH:mm'))
      idedit = citasinformato._id;
      document.getElementById('nombreedit').value = citasinformato.nombre;
      document.getElementById('apellidoedit').value = citasinformato.apellido;
      document.getElementById('titleedit').value = citasinformato.motivo;
      document.getElementById('startedit').value = moment(info.event.start).format('YYYY-MM-DDThh:mm')



      document.getElementById('btnAccionedit').textContent = 'Modificar';
      document.getElementById('tituloedit').textContent = 'Actualizar Cita';
      document.querySelector("#btnEliminaredit").classList.remove('d-none');
      $("#modalEdit").modal('show');

    },
    events: citasnew

  });

  calendar.render();
  document.querySelector("#formulario").addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const start = document.getElementById('start').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    if (title == '' || start == '' || nombre == '' || apellido == '') {
      Swal.fire(
        'Avisos?',
        'Todo los campos son obligatorios',
        'warning'
      )
    } else {

      let bodyReserva = {

      }

      bodyReserva.nombre = nombre;
      bodyReserva.apellido = apellido;
      bodyReserva.fecha = start;
      bodyReserva.motivo = title;


      var request = new Request('http://localhost:3000/crearReserva', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyReserva),
      });
      fetch(request).then(response => console.log(response))
        ;

      console.log(JSON.stringify(bodyReserva))
    }
  });

  document.querySelector("#formularioedit").addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('titleedit').value;
    const start = document.getElementById('startedit').value;
    const nombre = document.getElementById('nombreedit').value;
    const apellido = document.getElementById('apellidoedit').value;
    if (title == '' || start == '' || nombre == '' || apellido == '') {
      Swal.fire(
        'Avisos?',
        'Todo los campos son obligatorios',
        'warning'
      )
    } else {

      let bodyReserva = {

      }

      bodyReserva.nombre = nombre;
      bodyReserva.apellido = apellido;
      bodyReserva.fecha = start;
      bodyReserva.motivo = title;


      var request = new Request('http://localhost:3000/cambioDatosReserva/'+idedit, {
        method: 'PUT',

        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyReserva),
      });
      fetch(request).then(response => console.log(response))
        ;

      console.log(JSON.stringify(bodyReserva))
    }
  });



  document.querySelector("#btnEliminar").addEventListener('click', function () {
    myModal.hide();
    Swal.fire({
      title: 'Advertencia?',
      text: "Esta seguro de eliminar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const url = base_url + 'Home/eliminar/' + document.getElementById('id').value;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const res = JSON.parse(this.responseText);
            Swal.fire(
              'Avisos?',
              res.msg,
              res.tipo
            )
            if (res.estado) {
              calendar.refetchEvents();
            }
          }
        }
      }
    })
  });
});


