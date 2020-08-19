let miLibroA = {
    titulo: 'El libro de JavaScript',
    autor: 'pablo',
    paginas: 69,
    publicado: false
}

let miLibroB = {
    titulo: 'programacion en PHP',
    autor: 'pablo vasquez',
    paginas: 700,
    publicado: true
}


console.log(miLibroA.autor)
console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`)
miLibroA.paginas = 500
console.log(miLibroA.paginas)


//libro b 
let getResumen = (libro) => {

    //? este metodo devuelve un Objeto
    return{
        //recibe un objeto, metodo
        resumen: `${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
    }
}

let libroAResumen = getResumen(miLibroA)
let libroBResumen = getResumen(miLibroB)


//* al poner " . " ya puedo entrar alas propiedades del metodo que va a devolver
console.log(libroBResumen.resumen)
console.log(libroBResumen.resumenPaginas)
console.log(libroAResumen.resumen)
console.log(libroAResumen.resumenPaginas)




console.log(' ')
/**
 * Ejercicio, crear un objeto persona que tenga las siguientes pro-
 * piedades  => nombre, edad, ciudad
 * cambiar la edad 
 * mostrar datos de la persona
 */

let persona = {
    nombre: 'diana',
    edad: 24,
    ciudad: 'Tegus'
}

persona.edad = 30
console.log(persona.nombre)
console.log(`${persona.nombre}, tiene ${persona.edad} edad y vive en ${persona.ciudad}`)
console.log(' ')





// Referencia de Objetos 
let personas = {
    nombre: 'pablo',
    edad: 30,
    sueldo: 1200
}



//metodo para cambiar el sueldo
let cambiarSueldo = (person, monto) =>{
    person.sueldo = person.sueldo  + monto
    console.log(person)
}

cambiarSueldo(personas, 500)

console.log(personas)

console.log('')




//* METODOS
let persona5 = {
    nombre: 'pablo',
    edad: 30,
    sueldo: 1200,
    metodoPrueba: function(){
        //console.log(' Escribiendo desde el metodo prueba')
        return 'Resultado desde la prueba'
    },
    cambiarEdad: function( parametro ){
        //this me refiero a la propiedad de este objeto
        this.edad = this.edad + parametro
    }

}

let result = persona5.metodoPrueba()
console.log(result)
persona5.cambiarEdad(3)
console.log(persona5.edad)

console.log('')
//* Objetos String
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String
let name = '  enrique romero'
let clave = '12309clave567.e'
console.log(name.length)
console.log(name.toUpperCase())//para ponerlo en mayuscula
console.log(name.toLowerCase())//para ponerlo en minuscula
console.log(name.trim())//eliminar espacios en blanco


console.log(clave.includes('clave', 5))//si hay una palabra dentro de la otra




//TODO; Destructuracion de objetos


const getPeronaDatos = ()  => {
    
    //este es un metodo con arreglo
    const respuesta = [ 
        {
            codigo: 200,
            data: {
                persona: {
                    nombre: 'pablo',
                    dirrecion: {
                        ciudad:'bogota',
                        pais: 'colombia'
                    }
                }
            }
        },
        {
            codigo: 300,
            data: {
                persona: {
                    nombre: 'ana',
                    dirrecion: {
                        ciudad:'tegus',
                        pais: 'Honduras'
                    }
                }
            }
        },
        {
            codigo: 400,
            data: {
                persona: {
                    nombre: 'Diana',
                    dirrecion: {
                        ciudad:'tocoa',
                        pais: 'Honduras'
                    }
                }
            }
        },
    ]
    return respuesta
}



console.log('')

//destructuro
//* capa por capa osea; de data a persona y de persona al final nombre
let { codigo :status, data : {persona : {nombre,  dirrecion : {pais}  }}   } = getPeronaDatos()[0]

for(const {codigo : status, data : {persona : {nombre :  nom}}} of getPeronaDatos()){
    
    console.log(nom)
}


console.log('')
console.log(status)
console.log(nombre)
console.log(pais)
