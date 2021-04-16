//algo que necesita ser emplementado
//definir tipos de datos sin que se conviertan en clases
//no van a ocupar memoria
//clases si ocupan memoria
//seleccionar cual es opcional con?
interface Usuario{
    nombre: string
    apellido:string
    edad?:number
    sueldo?:number
    casado: boolean | 0 | 1
    estado: 'AC' | 'IN' | 'BN'
    imprimirUsuario:(mensaje:string)=> string |'BN', //definir funcion
    calcularImpuesto:(impuesto:number)=>number,
    estadoActual:()=>'AP'|'AF'|'AT'
}
const andre:Usuario={
    nombre:"Andrea",
    apellido:"Silva",
    casado:false,
    sueldo:11.2,
    estado:"BN",
    imprimirUsuario:(mensaje)=>{
        return "El mensaje es:"+mensaje
    },
    calcularImpuesto:(impuesto)=>{
        return  this.sueldo + this.sueldo*impuesto

},
    estadoActual:()=>{
        switch (this.estado) {
            case "AC":
                return 'AP'
            case "BN":
                return 'AF'
            case "IN":
                return 'AT'
        }
    }

}

//una interface creada para usar en la clase
//