const andre={
    nombre:"Andrea"
}

const nico={
    apellido:"Ontaneda"
}


const andreNico={//crea una nuva referencia
    ...andre,
    ...nico,
}
andreNico.nombre="Nicole"

console.log('andrenico',andreNico)
console.log('andre',andre)
//juntar objetos y clonar

const arregloUno=[1,2,3,4,5]
const arregloDos=[6,7,8,9,10]
const superArreglo=[
    ...arregloUno,
    ...arregloDos,
]
superArreglo[0]=100
console.log('superarreglo',superArreglo)
console.log('arreglo uno',arregloUno)
//callback