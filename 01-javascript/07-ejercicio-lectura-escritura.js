const fs = require('fs')

/*
hacer una funcion que me acepte comoparatro una variable
son el path del archivo y el contenido a agregar
del archivo. la función debe tomar estos paramentros y leer el archivo
y aldir el texto al final del archivo
*/
function escribirArchivo(path,contenidoNuevo){
    //fs.readFile(path,codificacion,callback)
    //fs.writeFile(path, contenido a escribir,codificación,callback)
    fs.readFile( //linea asincrono
        path,'utf-8',(error,contenido)=>{ //callback
            console.log('segundo')
            if(error){
                console.error('Hubo error',error)
            }else{
                fs.writeFile( //linea asincrono
                    path,contenido+'\n'+contenidoNuevo,
                    'utf-8',(error)=>{ //callback

                        if(error){
                            console.error('Hubo error',error)
                        }else{
                            console.log('Operación terminada con exito')
                        }
                    }
                )
            }
        }
    )

}
escribirArchivo("./06-ejemplo.txt","Buenas noches Andre")
//callbak hell
//Promesas con callback