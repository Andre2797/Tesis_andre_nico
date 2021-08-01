class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreApellido = '';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreApellido = this.nombre + ' ' + this.apellido;
    }
    mostrarnOMBREaPELLIDO() {
        return this.nombreApellido;
    }
}
Persona.nombreReferencial = 'HUMANO';
class Usuario extends Persona {
    constructor(nombreParametro, apellidoParametro, cedula, estadocivil) {
        super(nombreParametro, apellidoParametro);
        this.cedula = cedula;
        this.estadocivil = estadocivil;
    }
}
const andre = new Usuario("andrea", "silva", "1725041576", "soltera");
console.log(andre.nombre);
console.log(andre.apellido);
console.log(andre.cedula);
console.log(andre.estadocivil);
