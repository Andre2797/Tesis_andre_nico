'üse strict'
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const odoEsquema=new Schema({
nombre:{
    type:String,
    require:true,
    max:30
},
apellido:{
    type:String,
    require:true,
    max:30
},
fechaNacimiento:{
    type:String,
    require:false,
    
},
correo:{
    type:String,
    require:true,

},
contrasenia:{
    type:String,
    require:true,
    min:8
}

},
{
    timestamps:true
});

module.exports = mongoose.model("Odontologo", odoEsquema);