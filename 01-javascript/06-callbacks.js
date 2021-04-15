const fs = require('fs')

console.log('primero')

fs.readFile( //linea asincrono
    './06-ejemplo.txt','utf-8',(error,contenido)=>{ //callback
       console.log('segundo')
        if(error){
            console.error('Hubo error',error)
        }else{
            console.log(contenido)
        }
    }
)
const  suma=5+3
console.log(suma)
console.log('final')
//callback hell
