

const promesaLeerArchivo= ()=> {
    return new Promise(
        (resolve, reject) => { //devuelve información
            fs.readFile( //linea asincrono
                path, 'utf-8', (error, contenido) => { //callback
                    console.log('segundo')
                    if (error) {
                        console.error('Hubo error', error)
                        reject(error)
                    } else {
                        resolve(contenido)
                    }
                }
            )

        }
    );
}

const promesaEscribirArchivo= ()=> {
    return new Promise(
        (resolve, reject) => { //devuelve información
            fs.writeFile( //linea asincrono
                path, contenido + '\n' + contenidoNuevo,
                'utf-8', (error) => { //callback

                    if (error) {
                        reject('Hubo error', error)
                    } else {
                        resolve('Operación terminada con exito')
                    }
                }
            )

        }
    );
}


//ASYNC AWAIT -> dentro de una funcion (anonimas-nombraas)
async function ejercicio(){
    //progrmacion normal
    console.log('1')
    //al usar await colocar try catch
    try {
        const  respuetaLecturaArchivo =await promesaLeerArchivo()
        await promesaEscribirArchivo()
        const  nuevoContenido=await promesaLeerArchivo
        console.log(nuevoContenido)
    }catch (error) {
        console.log(error)
    }
}

const  f= async ()=>{

}

//transpilar compilador que bota de un codigoufnte a otro
//aplicaciones escalables.... ver los contratos
