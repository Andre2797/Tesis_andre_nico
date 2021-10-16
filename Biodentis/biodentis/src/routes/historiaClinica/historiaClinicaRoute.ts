const HistoriasClinica=require('../../controllers/historiaClinica/historiaClinicaController');

module.exports = (router) =>{
    router.post('/crearHistoria', HistoriasClinica.createHistoria);
    router.get('/historias', HistoriasClinica.historias);
    //router.put('/actulizaCita/:id', Cita.cambioCita);


}