const Odontologo=require('../../controllers/login/loginController');

module.exports = (router) =>{
    router.post('/registro', Odontologo.createOdontolo);
    router.post('/login', Odontologo.loginOdontolo);
    router.put('/actulizaContrasenia/:id', Odontologo.cambioContraseñaOdontolo);


}