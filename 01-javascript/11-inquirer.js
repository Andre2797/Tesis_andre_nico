const inquirer = require('inquirer')

async function  main(){
    try{
        const respuesta= await  inquirer.prompt([
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa tu apellido'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa tu edad'
            },
        ]);
        console.log('Respuesta',respuesta)
    }catch (e) {

    }
}
main()