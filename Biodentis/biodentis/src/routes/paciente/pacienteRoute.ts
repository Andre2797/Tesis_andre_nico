const Paciente=require('../../controllers/paciente/pacienteController');

module.exports = (router) =>{
    router.post('/crearPaciente', Paciente.createPaciente);
    router.get('/pacientes', Paciente.pacientes);
   

}