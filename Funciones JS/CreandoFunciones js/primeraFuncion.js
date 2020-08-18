//primera funcion


function bienvenido(params) {
    return 'Hola Bienvenidos a la seccion de funciones'
}

var mensaje = bienvenido()

console.log(mensaje)


// partes de una funcion
//(argumento), codigo, salida (return)

function cuadradoNumero(num) {
    //console.log(num)
    return resultado = num * num
}

var num = 3;
var valor = cuadradoNumero(num)
console.log(valor)
console.log(cuadradoNumero(5)) 

console.log('Funcion de convertir grados')
/**
 * *Funcion que convierte de grados fahrenheit a Celsius 
 * * 32F = 0C, 68F = 20C
 * * C = (F - 32 ) * 5/9
 */

function convertirFAHaCelsius(gradoFah) {
    return celcius = (gradoFah - 32) * 5 / 9
    
}

var temmUno = convertirFAHaCelsius(32)
var temDos = convertirFAHaCelsius(68)

console.log(temmUno)
console.log(temDos)

console.log('calcular la edad de una persona')

function calcularEdad( yearNacimiento ) {
    return 2019 - yearNacimiento
}

var edad = calcularEdad(1990);
var edad2 = calcularEdad(1997)
console.log(edad)
console.log(edad2)


/**
 * * ejercicio #3
 * * calcular cuantos años le falta a una persona para que se jubile
 * * una persona se jubila a los 65 años de edad
 * * enviar como datos a la funcion su año de nacimiento y su nombre
 */


function calcularJubilacion(edad, nombre) {
    var edad3 = calcularEdad(edad) 
    var yearJubilacion = 65 - edad3
    console.log(nombre + ' le falta ' + yearJubilacion + ' años para su jubilacion')
}
calcularJubilacion(1990, 'Diana')

calcularJubilacion(1997, 'kike')


/**
 * * Funciones como Expresiones
 */

var prueba = function ( nombre ) {
    //console.log('Prueba')
    return 'Mensaje de prueba ' + nombre
}

console.log(prueba('Diana'))

//argumentos nulos

var a;
a = null;
var valorNulo = function (a) {
    return a;
}
console.log(valorNulo(a))


//* Argumento por default
console.log('Argumentos por defectos')

//b = 3 y c= 3 valors por defecto
var sumar = function (a = 5,b = 3, c = 3) {// funcion con multiples argumentos
    return a + b + c;
}

console.log(sumar());
console.log(sumar(2,5,3))



/**
 * * Platillas de cadenas (template String)
 */
console.log('Platillas de cadenas (template String)')
var nombre3 = 'Diana'
console.log(`el nombre es: ${nombre3}`)


/**
 * * Ejercicio 4
 */

var calcularScore = function (name2, pos, neg) {
    var porcenPos = (pos / 100) * 100
    var porcenNeg = (neg / 100) * 100
    var score = ''

    if(porcenPos > 90){
        score = 'A'
    }else if(porcenPos >= 70){
        score = 'B'
    }else if(porcenPos >= 45){
        score = 'C'
    }else{
        score = 'D'
    }

    return `${name2} tiene el score ${score}, positivas: ${porcenPos}%, Negativas: ${porcenNeg}`;
}

var resultado2 = calcularScore('kike', 75, 25)
console.log(resultado2);