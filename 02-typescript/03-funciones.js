function sumarNumeros(numeroOncicial) {
    var numerosASumar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosASumar[_i - 1] = arguments[_i];
    }
    return numeroOncicial;
}
sumarNumeros(1, 2, 3, 4, 5);
function imprimir(mensaje) {
    console.log('Hola', mensaje);
}
var arregloNumeros = [1, 2, 3];
var arregloNumerosDos = [1, 2, 3];
var arregloNumerosTres = [1, "a", true];
var arregloNumerosCuatro = [1, "a", true];
var arregloNumeroTexto = [1, 2, 3];
