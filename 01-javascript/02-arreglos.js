const areglo= [1,2,3,4,5,6,7,8,9,10] // arreglo inmmuable

/*let cualquierCosa = "asd"
cualquierCosa= 1
cualquierCosa= true
cualquierCosa= undefined
cualquierCosa=  null
cualquierCosa ={}
cualquierCosa= []
console.log(cualquierCosa)
*/

const arregloTodo=[
    true, 1,1.2, "Andrea", undefined, null, {}, [1,2,true, "S"
]]
// for of
for (let numero of areglo){// valores
    console.log('numero', numero)
}
for (let indice in areglo){ // indices
    areglo[indice]
    console.log('indice',indice)
}

//const arreglo=[6,7,8,9,10]

areglo.push(11) //añadir al finl un elemento
console.log(areglo)
areglo.pop() //eliminar al final un elememnto
console.log(areglo)
areglo.unshift(5) //añadir al principio del arreglo
console.log(areglo)
areglo.splice(0,1)
console.log(areglo)
areglo.splice(0,0,3,4,5)
console.log(areglo)
//eliminar eemnto en especifico
//areglo.findIndex()
//inidice -1 no existe el elemnto en el arreglo
const indicenueve=areglo.indexOf(9)
console.log('indice',indicenueve)
areglo.splice(indicenueve,1)
console.log(areglo)