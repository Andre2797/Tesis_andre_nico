const Receta=require('../../controllers/receta/recetaController');

module.exports = (router) =>{
    router.post('/crearReceta', Receta.createReceta);
    //router.get('/citas', Cita.citas);
    //router.put('/actulizaCita/:id', Cita.cambioCita);


}