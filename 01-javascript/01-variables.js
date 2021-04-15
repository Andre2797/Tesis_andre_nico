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
//acceder a las propiedades del objeto
andre.nombre //Andrea
andre["nombre"]; //Andrea
console.log(andre)
andre.nombre="Guiomar"
console.log(andre)
//sueldo no exite
andre.sueldo; //undefined -> no esta definido
console.log(andre.sueldo)
andre.sueldo= 1.2;
console.log(andre.sueldo)

//añadire nuevas llaves y valores
andre["gastos"]=0.8;
console.log(andre.gastos)

// eliminar el nombre del objeto
andre.nombre = undefined
console.log(andre)
console.log(Object.keys(andre))
delete andre.nombre //eliminar la llave nombre
console.log(andre)
console.log(Object.keys(andre))

//clase OBJECT
//obtner llaves
Object.keys(andre)
//variable por valor y por referencia
//lista de variabe por valor JS
//number,string, boolean, undefined
let edadandre=23
let edadAndrea= edadandre

console.log(edadAndrea)
console.log(edadandre);
edadandre= edadandre+1
console.log(edadAndrea)
console.log(edadandre);
//lista de varibales por referencia JS
// object, arreglos
/*
let rafael={
   nombre: "Rafael"
};
let lennin = rafael
console.log(rafael)
console.log(lennin)

lennin.nombre="leninn"
console.log(rafael)
console.log(lennin)

delete rafael.nombre
console.log(rafael)
console.log(lennin)
*/
let rafael={
   nombre: "Rafael"
};
//clonar el objeto o arreglo
let lennin = Object.assign({},rafael)
console.log(rafael)
console.log(lennin)
lennin.nombre="Lennin"
delete rafael.nombre
console.log(rafael)
console.log(lennin)







//const arregloNum=[] //object