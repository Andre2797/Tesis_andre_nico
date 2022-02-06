const Reserva=require('../../controllers/reserva/reservaController');

module.exports = (router) =>{
    router.post('/crearReserva', Reserva.createReserva);
    router.get('/reservas', Reserva.listaReservas);
    router.get('/reservaedit/:fecha',Reserva.reservaEdit);
    router.put('/cambioDatosReserva/:id',Reserva.cambioDatosReserva);
    router.get('/eliminarReserva/:id',Reserva.reservaDelete);


}