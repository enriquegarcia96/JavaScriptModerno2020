/**
 * * Arreglos en javaScript
 */

var nombre = ['pablo', 'Carlos', 'Ana', 'Teresa']
var vegetales = new Array('Tomate', 'lechuga', 'Zanahoria')

console.log(nombre[2])
console.log(vegetales[1])

nombre[1] = 'KIKE';

console.log(nombre[1])
vegetales[2] = 'Nabo'
console.log(vegetales[2])

console.log(nombre.length)
console.log(vegetales.length)


console.log('operaciones con arreglos')

//* operaciones con arreglos

var frutas = ['pera', 'manzana', 'uva', 'sandia']
console.log(frutas)

for(var i=0; i<=frutas.length -1; i++){
    console.log(frutas[i])
}
console.log('')
console.log('usando forEach')

frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice)
})


console.log('')

frutas.push('naranja');
console.log(frutas)

//para agregarlo al principio
frutas.unshift('fresa')
console.log(frutas)

//para quitarlo al final
frutas.pop();
console.log(frutas)

//eliminar el elemento al principio
frutas.shift()
console.log(frutas)

//para saber la pocision
var pos = frutas.indexOf('uva')
console.log(pos)

//eliminar uno o mas elementos
frutas.splice(1,2)
console.log(frutas)


console.log('')
//Arreglo con elementos de diferentes tipos
var persona  = ['pablo', 'Vasquez', 34, '9999999999', 1.75]
console.log(persona)


console.log('')


//* Objetos Literales
var personas = {
    //propiedades que tendra este objeto
    nombre: 'pablo',
    apellido: 'vasquez',
    gustos: ['futbol', 'peliculas', 'ingles'],
    trabajo: 'instructor',
    esCasado: true
}

//para aceder a las propiedades
console.log(personas.apellido)
console.log(personas['trabajo'])


personas.esCasado  = false
console.log(personas.esCasado)

console.log('')


//* Objetos con la sintaxis Object

var persona2 = new Object()
persona2.nombre = 'Ana'
persona2.apellido = 'molina'
persona2['trabajo'] = 'haragana'

console.log(persona2)

console.log('')

//* Objetos y Metodos


var persona3 = {
    //propiedades que tendra este objeto
    nombre: 'pablo',
    apellido: 'vasquez',
    gustos: ['futbol', 'peliculas', 'ingles'],
    trabajo: 'instructor',
    esCasado: true,
    yearNacimiento: 1985,
    
    //Metodos
    calcularEdad: function(){
        //this.edad => puedo asignarlo de un solo
        this.edad = 2019 - this.yearNacimiento
    }
}

persona3.calcularEdad()
console.log(persona3)












