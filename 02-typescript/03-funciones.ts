
function sumarNumeros(
    numeroOncicial:number,
    ...numerosASumar:number[]
):number{
    return numeroOncicial
}

sumarNumeros(1,2,3,4,5)

function imprimir(mensaje:string){ //void
    console.log('Hola',mensaje)
}
const arregloNumeros: number[]=[1,2,3]
const arregloNumerosDos:Array<number>=[1,2,3]
const arregloNumerosTres:(number|string|boolean)[]=[1,"a",true]
const arregloNumerosCuatro:Array<number|string|boolean>=[1,"a",true]
const arregloNumeroTexto:number[]|string[]=[1,2,3]