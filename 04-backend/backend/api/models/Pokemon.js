/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

 nombre:{
   type:'string',
   required:true
 },
    //Relaciones
    // Pokemon <- Uusrio
    usuario:{ //Nombre de FK
      model:'Usuario', //Modelo con el cual relacionamos
      required: true, //Requerida 1-N Opcional 0-N (false por defecto)
    },
    //Pokemon->Batalla
    batallas:{ //Uno a muchos (nombre en plurar)
       collection: 'Batalla', //Modelo a relaconarse
       via:'pokemon' //Nombre atributo FK en el modelo a relacionarse

     }


  },




};

