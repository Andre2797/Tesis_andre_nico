class Persona{
    public nombre:string
    public apellido:string
    static nombreReferencial:string='HUMANO'
    protected nombreApellido:string=''
    constructor(
        nombreParametro:string,
        apellidoParametro:string
    ) {
        this.nombre=nombreParametro
        this.apellido=apellidoParametro
        this.nombreApellido=this.nombre + ' '+ this.apellido
    }
    private mostrarnOMBREaPELLIDO():string{
        return this.nombreApellido
    }
}
class Usuario extends Persona{
    constructor(
        nombreParametro:string,
        apellidoParametro:string,
        public cedula:string,
        public estadocivil:string
    ) {
        super(
            nombreParametro,apellidoParametro
        );
    }
}
const andre=new Usuario("andrea",
    "silva",
    "1725041576","soltera"
)
console.log(andre.nombre)
console.log(andre.apellido)
console.log(andre.cedula)
console.log(andre.estadocivil)
/*
ANGULAR framework
>npm install -g @angular/cli
ng
ng new mi-proyecto
codigo html,css,js

pagina web utilizamos HTML(lenguaje de etiquetado) (estructura)
CSS (estilos) JS(funcionalidad) antes entre los tres se sobreescribian

CLASE 14
componentes algo que se puede repetir
* */
//shadow dom
//para no chocar las variables y estilos
//web component
//setneciljs para hacer componetes web
//Ionic framework
/*
docker
usar el kernell y tener diferentes versiones de linux
el backend se jecute en el docker
kubertnets adminstrar cotenedores

framwork de desarrollo

servidor -------- cliente

conectados por un protocolo

REQUEST

RESPONSE


SERVIDOR

sails ---- dataStores tenemos unas conexiones

Controladores son los que reciben peticiones y envian las respuestas

Modelo puede o no estar relacionado con los controladores

cuando se liga un mdelo a un controlador se denomina API
##Postman
-estadar restfull

//URL METODO PARAMETROS
PARAMENTROS DE RUTA

GET http:localhost:1337/usuario/1

paramtros de consulta
http:localhost:1337/usuario?nombre=Andre&apellido=Silva&edad=20

paramtros de cuerpo no se usa GET

metodos
GET
PUT
DELETE
POST

usar llave y valor

-HTTP
-1- Buscar todos

-2- buscar uno
3 CREAR UNO
4 EDITAR UNO
5 ELIMINAR NO

busquedas exactas ==

paginación skip & limit

ordenamiento sort

QUERY LANGUAGE

where

__________________________

SERVICIOS

RUTA 1 /login

RUTa2 /home

componente principal se tien un router outlet


obtener datos
SERVICIOS agarra la logca que se usa en varios componente guradandolos en un solo lugar
EVITA REPETIR CODIGO

crear pagina web por componetes
subir el servidor de angular ng serve

crear un componente
my-proyecto/src/app/componentes
ng generate component carta-pelicula




* */
