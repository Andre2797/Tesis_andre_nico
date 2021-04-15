const arreglo = [
    {
        id:1,
        nombre: 'Andrea',
        nota:5
    },
    {
        id:2,
        nombre: 'Anna',
        nota:4
    },
    {
        id:3,
        nombre: 'Santiago',
        nota:8
    },
    {
        id:4,
        nombre: 'Fernanda',
        nota:15
    },
    {
        id:5,
        nombre: 'Marlon',
        nota:13
    },
    {
        id:6,
        nombre: 'Maximiliano',
        nota:10
    },
    {
        id:7,
        nombre: 'Valeria',
        nota:18
    },
    {
        id:8,
        nombre: 'Alejandra',
        nota:14
    },
    {
        id:9,
        nombre: 'Nicole',
        nota:15
    },
    {
        id:10,
        nombre: 'Milena',
        nota:12
    },

]
//buscar dentro del arreglo
//FUNCIONES COMO PARAMENTROS
//FIND
//devolver una expresion TRUE OR FALSE
const respuestafind=arreglo
    .find(
    function (valorActual,indiceAactual,arreglocompleto) {
            console.log('valor Actual',valorActual)
        console.log('indice actual',indiceAactual)
        console.log('arreglo completo',arreglocompleto)
        return valorActual.nombre === "Alejandra" // triple igual diferente  !==
}
    );
console.log('respuesta find',respuestafind)//undefined

//FINDIDEX
//devolver una expresion TRUE OR FALSE
const respuestaIndex=arreglo
    .findIndex(
        function (valorActual,indiceAactual,arreglocompleto) {
            console.log('valor Actual',valorActual)
            console.log('indice actual',indiceAactual)
            console.log('arreglo completo',arreglocompleto)
            return valorActual.nombre === "Alejandra" // triple igual diferente  !==
        }
    );
console.log('respuesta idex',respuestaIndex)//undefin

//usar el valor o el indice
//FOREACH
// no devolver nada iterar arreglo
//respuesta undefinded
const  respuestaForEach= arreglo
    .forEach(
        function (valorActual,indiceAactual,arreglocompleto) {
            console.log('valor Actual',valorActual)
            console.log('indice actual',indiceAactual)
            console.log('arreglo completo',arreglocompleto)

        }
    );
console.log('respuesta foreach',respuestaForEach)//undefin
//MAP
//devolver nuevo elemento
const  respuestaMap= arreglo
    .map(
        //funciona anonima no tiene nombre
        //funcion de flecha gorda
         (valorActual,indiceAactual,arreglocompleto)=> {
           const nuevoElemento={
               id: valorActual.id,
               nombre:valorActual.nombre,
               nota: valorActual.nota+1
           };
            return nuevoElemento;

        }
    );
console.log('respuesta map',respuestaMap)
console.log('arreglo',arreglo)
//filtrar el arreglo
//FILTER
//devolver expresion TRUE OR FALSE
const  respuestaFilter= arreglo
    .filter(
        //funciona anonima no tiene nombre
        //funcion de flecha gorda
        (valorActual,indiceAactual,arreglocompleto)=> {

            return valorActual.nota >=14;

        }
    );
console.log('respuesta filter',respuestaFilter)

//DEBER 1
//UTILIZANDO EL ARREGLO DE LA CLASE REALIZAR LAS SIFUEINTES OPERACIONES
//POR CADA VOCAL DENTRO DE LA PALABRA DEL ESTUDIANTE REGALAR 0.1 DECIMAS POR CADA CONSONANTE REGALAR 0.5 DECIMAS
//FILTRAR QUE PERSONAS PASARON
//MAP Y FILTER
const respuestaMapDeber =arreglo
.map( (valorActual,indiceAactual,arreglocompleto)=> {

       let numeroVocales = valorActual.nombre.match(/[aeiou]/gi).length;
       let  numerConsonates =valorActual.nombre.length - numeroVocales
    return valorActual.nota=valorActual.nota+(numeroVocales*0.1)+(numerConsonates*0.5)


    }

)
console.log(respuestaMapDeber)
console.log(arreglo)
const  respuestaFilterDeber= arreglo
    .filter(
        //funciona anonima no tiene nombre
        //funcion de flecha gorda
        (valorActual,indiceAactual,arreglocompleto)=> {

            return valorActual.nota >=14;

        }
    );
console.log('respuesta filter',respuestaFilterDeber)


//OPERADORES LOGICOS
//AND OR
//SOME OR
//devuelve un booealo
//Hay aguna nota menor a nueve ? SI NO
const respuestaSome= arreglo
.some(
    (valorActual,indiceAactual,arreglocompleto)=>{
        return valorActual.nota < 9
    }
)
console.log('respuesta some',respuestaSome)

//AND ANY every
//devuelve booleano
const respuestaAny= arreglo
    .every(
        (valorActual,indiceAactual,arreglocompleto)=>{
            return valorActual.nota > 14
        }
    )
console.log('respuesta some',respuestaAny)
//reduce izq -> derecha
//reducerigth derecha -> izq
const respuestaReduce= arreglo
.reduce(
    (valorAcumulado, valorActual,indice,arreglo)=>{
        //0 acumulador
        return valorAcumulado + valorActual.nota
    },
    0
)
console.log('respuesta reduce',respuestaReduce)
const respuestaReduce2= arreglo
    .reduce(
        (valorAcumulado, valorActual,indice,arreglo)=>{

            return valorAcumulado - valorActual.nota
        },
        500  // acumulador
    )
console.log('respuesta reduce 2',respuestaReduce2)
const arregloEstidiantesMenoresANueve = arreglo
.map(
    (v)=>v.nota*1.3 //añadiendo 30%
).filter((nota)=>nota < 9)//buco los < 9
  const totalPuntosEstudiantes=arregloEstidiantesMenoresANueve
      .reduce((acumulado,actual)=>acumulado+actual,0) //total
const notaPromedio=totalPuntosEstudiantes/arregloEstidiantesMenoresANueve.length
console.log("nota proomedio",notaPromedio)