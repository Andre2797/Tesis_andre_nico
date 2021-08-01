var _this = this;
var andre = {
    nombre: "Andrea",
    apellido: "Silva",
    casado: false,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: function (mensaje) {
        return "El mensaje es:" + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case "AC":
                return 'AP';
            case "BN":
                return 'AF';
            case "IN":
                return 'AT';
        }
    }
};
//una interface creada para usar en la clase
//
