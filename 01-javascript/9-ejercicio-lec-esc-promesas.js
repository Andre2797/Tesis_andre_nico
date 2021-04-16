const fs = require('fs')

/*
hacer una funcion que me acepte comoparatro una variable
son el path del archivo y el contenido a agregar
del archivo. la función debe tomar estos paramentros y leer el archivo
y aldir el texto al final del archivo
al final vavos a leer el archivo imprimimos en consola
*/
function leerArchivo(path){
    const PromesaLeer= new Promise(

        (resolve,reject)=>{ //devuelve información
            fs.readFile( //linea asincrono
                path,'utf-8',(error,contenido)=> { //callback
                    console.log('segundo')
                    if (error) {
                        console.error('Hubo error',error)
                        reject(error)
                    } else {
                        resolve(contenido)
                    }
                }

            )

        }
    )
    return PromesaLeer
}

function escribirArchivo(path,contenido,contenidoNuevo){
    const PromesaEscribir= new Promise(

        (resolve,reject)=>{ //devuelve información
            fs.writeFile( //linea asincrono
                path,contenido+'\n'+contenidoNuevo,
                'utf-8',(error)=>{ //callback

                    if(error){
                        reject('Hubo error',error)
                    }else{
                        resolve('Operación terminada con exito')
                    }
                }
            )

        }
    )
    return PromesaEscribir
}

function ejercicio(path,nuevoContenido){
    leerArchivo(path)
        .then(    (contenido)=>{
                console.log('Contenido then',contenido)
                return escribirArchivo(path,contenido,nuevoContenido)
            }
        ).then(
        (nuevocontenidoEscrito)=>{
            console.log('Nuevo contenido',nuevocontenidoEscrito)
            return leerArchivo(path)
        }
    ).then(
        (contenido2)=>{
            console.log('Contenido then segunda lectura',contenido2)
            // return escribirArchivo("./06-ejemplo.txt",contenido,"Buenos diassssss")
        }
    )
        .catch( //catch
            (error)=>{
                console.log('COntenido catch',error)
            }
        )
}

ejercicio("./06-ejemplo.txt","Buenos diassssss")

