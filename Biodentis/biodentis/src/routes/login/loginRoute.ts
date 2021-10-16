const Odontologo=require('../../controllers/login/loginController');

module.exports = (router) =>{
    router.post('/registro', Odontologo.createOdontolo);
    router.get('/login', Odontologo.loginOdontolo);
    router.get('/odos',Odontologo.allodontologos);
    router.put('/actulizaContrasenia/:id', Odontologo.cambioContraseñaOdontolo);


}