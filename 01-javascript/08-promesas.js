const fs = require('fs')
function promesaPaImapar(numero){
    const MiPrimerPromesa= new Promise(

        (resolve,reject)=>{ //devuelve información
            if(numero % 2 ==0){
                resolve(numero) //porqaue se ejecuta resolve va a then

            }else {
                reject('No es par') //ejecuta catch
            }

        }
    )
    return MiPrimerPromesa
}
function elevarCuadrado(numero){
    const MiPrimerPromesa= new Promise(

        (resolve,reject)=>{ //devuelve información
          //nunca va fallar
            const  numeroElevadoCuadrado= Math.pow(numero,2)
            resolve(numeroElevadoCuadrado)

        }
    )
    return MiPrimerPromesa
}

promesaPaImapar(4)
.then(  //try
    (numpar)=>{
        console.log('Contenido then',numpar)
        return elevarCuadrado(numpar)
    }
).then(
    (numparAlcuadrado)=>{
        console.log('Numero par al cuadrado',numparAlcuadrado)
    }
)
.catch( //catch
    (error)=>{
        console.log('COntenido catch',error)
    }
)
/*elevarCuadrado(5)
    .then(  //try
        (contenido)=>{
            console.log('Contenido then',contenido)
        }
    )
    .catch( //catch
        (error)=>{
            console.log('COntenido catch',error)
        }
  )  */