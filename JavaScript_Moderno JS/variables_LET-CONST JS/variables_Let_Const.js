//ES5 -Variables
var nombre5 = 'pablo'
console.log(nombre5)
var edad5 = 45
nombre5 = 'carlos'
console.log(nombre5)


//ES6 -variables
const nombre6 = 'Diana'
let edad6 = 40
console.log(edad6)
//nombre6 = 'gaby'
edad6 = 20
console.log(edad6)


console.log('')


//* Bloques y alcance de las variables

{
    const a = 3
    let b = 4
    var c = 5
}

// a 5 y solo tienen alcance dentro del bloque de asignacion
//console.log( a + b)
console.log(c)

let test;
test = 10
function prueba() {
    let test
    test = 15
    
}
prueba()
console.log(test)



console.log('')

//* template String
let nombre2 = 'pablo'
let apellido = 'vasquez'
const ciudad = 'tocoa'
const nacimiento = 1985

function calcularEdad(year) {
    return 2019 -year
}


//usando ES5
console.log(nombre2 + '' + apellido + ', nacio en ' + ciudad + ', y su edad es '+ calcularEdad(nacimiento)) 

//usando ES6
console.log(`${nombre2} ${apellido}, nacio en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`)


console.log('')

//* Funciones de cadenas ES6

let nombrecompleto = `${nombre2} ${apellido}`
console.log(nombrecompleto)
console.log(`${nombre2} `.repeat(5))
console.log(nombrecompleto.includes('lo'))//devuelve true o false
console.log(nombrecompleto.startsWith('pe'))//compara si el comienzo de un cadena es igual al parametro que le estoy mandando
console.log(nombrecompleto.endsWith('uez'))//compara si el final de una cadena es igual al parametro que le estoy mandando


console.log('')

//* funciones de Flecha

const years = [2000, 2005, 2008, 2012]

//ES5
var edad5 = years.map(function(el){
    return 2019 - el
})

console.log(edad5)


//ES6 
let edad7 = years.map( el => 2020 - el)

console.log(edad7)

edad7 = years.map((el, index) => `Edad ${index + 1}: ${2020 - el}`)
console.log(edad7)

// con dos  parametros
edad7 = years.map(
    (el, index) =>{
        const yearActual = new Date().getFullYear()//tengo el año
        const edad = yearActual - el
        return `Edad ${index + 1}: ${edad}`
    }
)

console.log(edad7)


const cuadrado = ( num ) =>  num * num

console.log(cuadrado(5))


const personas = [
    {
    nombre: 'kike',
    edad: 20
    },
    {
        nombre: 'Diana',
        edad: 24
    },
    {
        nombre: 'shell',
        edad: 30
    },
    {
        nombre: 'pepe',
        edad: 35
    }
]



//ES5
const menores30 = personas.filter(function(persona){//para filtrar los datos
    return persona.edad < 30
})

//ES6    //para filtrar los
const menores32 = personas.filter(persona => persona.edad < 30)

console.log(menores32)

console.log(menores30)

console.log('')
console.log('Destructuracion')

//TODO; Destructuracion - Destruccion - Destructuring

// //ES5
// var  datos = ['pablo', 25]

// var nombre_ = datos[0]
// var edad_ = datos[1]
// console.log(nombre_)
// console.log(edad_)

//ES6
let [nombre_, edad_] = ['pablo', 25]
console.log(nombre_)
console.log(edad_)


const _persona = {
    nombre: 'kike',
    edad: 24
}
const {nombre, edad} = _persona
console.log(nombre)
console.log(edad)

//* USANDO UN ALIAS 
const {nombre: n, edad: e} = _persona
console.log(n)
console.log(e)


console.log('')
//* MAPAS
const datos = new Map() //creo un mapa en JS
datos.set('nombre', 'diana')
datos.set('edad', 24)
datos.set(1, 'diana@gamil.com')
datos.set(2, 'gonzales@gmail.com')
datos.set('movil', 9999999)

console.log(datos.get('nombre'))
console.log(datos.get(2))
console.log(datos.size)

//datos.delete(2)
//datos.clear() borra el MAPA por completo


console.log('Para recorrer el MAPAs')
datos.forEach((value, key) =>{
    console.log(`${key}: ${value}`)
})

console.log('')
//* Spread Operator

var suma = function(a,b,c, d){
    return a + b + c + d
}

var ope1 = suma(10,20,30,40)
console.log(ope1)

//ES6
let valores = [10,20,30,40]
const op2 = suma(...valores)
console.log(op2)

//juntar dos matrices
const rrhh = ['pedro', 'pablo', 'ana']
const contabilidad = ['garcia', 'carlos', 'diana', 'kike']

//juntar arreglos
const empresa = [...rrhh, ...contabilidad]
console.log(empresa)