const Cita=require('../../controllers/cita/citaController');

module.exports = (router) =>{
    router.post('/crearCita', Cita.createCita);
    //router.get('/citas', Cita.citas);
    //router.put('/actulizaCita/:id', Cita.cambioCita);


}