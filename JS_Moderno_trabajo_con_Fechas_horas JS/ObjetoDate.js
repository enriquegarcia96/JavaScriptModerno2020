//manejo de fecha y hora
//Unix Epoch - 01 enero 1970 00;00:00 - 0


//creo el objeto
const ahora = new Date()

//timestamp o marca de tiempo
const timestamp = ahora.getTime()
console.log(timestamp.toString())
const fechaActual = new Date(timestamp)
console.log(fechaActual.getFullYear())

//
const fecha1 = new Date("December 17, 1995 06:20:25")
console.log(ahora.toString())
console.log(fecha1.toString())

//obtener los datos de una fecha
console.log(`año: ${ahora.getFullYear()} `)
console.log(`Mes ${ahora.getMonth()}`)
console.log(`Dia: ${ahora.getDate()}`)
console.log(`Dia: ${ahora.getDay()}`)

console.log('')
//obtener los datos de una hora
console.log(`Hora: ${fecha1.getHours()}`)
console.log(`Minutos: ${fecha1.getMinutes()}`)
console.log(`Segundos: ${fecha1.getSeconds()}`)

console.log('')


//Ejercicio de Comparacion 
/**
 * * Crear dos objetos Date, uno con una fecha cualquiera y el siguiente
 * * con la fecha actual, luego comparar ambos valores,
 * * visualizar cual es la fecha menor a la otra
 */

console.log('')

const objetodate1 = new Date("febrero 22, 2000 11:11:00 ")
const objetodate2 = new Date()

//para saber cual es la menor fecha
//para simplificar cual es la fecha menor 
const timestampObjetodate1 = objetodate1.getTime()
const timestampObjetodate2 = objetodate2.getTime()

if(timestampObjetodate1 < timestampObjetodate2){
    console.log(objetodate1.toString())
}else if(timestampObjetodate2 < timestampObjetodate1){
    console.log(objetodate2.toString())
}


