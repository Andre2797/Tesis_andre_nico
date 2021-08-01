/**
 * Batalla.js
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
    pokemon:{ //Nombre de FK
      model:'Pokemon', //Modelo con el cual relacionamos
      required: true, //Requerida 1-N Opcional 0-N (false por defecto)
    }

  },

};

