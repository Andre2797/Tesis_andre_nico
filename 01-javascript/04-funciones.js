
function soloNumeros(a,b,c){
    return a-b+c
}
soloNumeros('v',true,[1,2,3,4])
soloNumeros()
soloNumeros(1,2,3,5,6)

function  soloLetra(a,b,c){ //undefinded
    console.log(a,b,c)
}
//sintaxis
//funciones nombradas
function funcionNombrada(){

}
//funciones anonimas o sin nombre

//fat arrow funcction
const funcionNombrecinco=()=>{

}
const funcionNombreseis=(x)=>{
   returnx+1
}
const funcionNombresiete=(x)=> x+1 //una sola linea omitir return y las llaves

const funcionNombresiete=x=> x+1  // tengo un solo paramentro omito parantesis

//paramentros infinitos arreglo
function sumaNumeros(numeroInicial, ...otrosNumero){
    return numeroInicial + otrosNumero.reduce((a,v)=>a+v,0)
}
sumaNumeros(1,2,3,4,5,67,8,9,10)
