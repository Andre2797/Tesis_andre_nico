//  MUTABLES

var numerUno=1;
let numerDos=2;
numerUno=5;
numerDos=8;
numerUno= false;
numerDos= true;

//INMUTABLES

const configuracionArchivos = "PDF";
//configuracionArchivos="XML";

//tipos de variables

const numero=1;//number
const  sueldo=1.2; //number
const texto="Andre" //string
const booleano= false; //boolean
const hijos= null; //object
const zapatos= undefined; //undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

//orden de importancia
//1) const
//2) let
// 3)x -> var

// objectos JS jason .arreglo

const andre ={
 nombre: "Andrea", //llave: valor,
    apellido: "Silva",
    edad: 24,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa:{
     color: 'rojo',
        talla: '38',
    },
    mascotas:['Tony','Max','Panda'],
}; //object
andre.nombre //Andrea
const arregloNum=[] //object