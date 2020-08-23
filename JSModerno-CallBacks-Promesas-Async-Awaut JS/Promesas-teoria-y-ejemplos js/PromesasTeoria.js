//*Ejemplo de uso de promesas
// #1

let promesa = new Promise((resolve, reject) =>{
    if(true){
        resolve('la operacion fue exitosa')
    }else{
        reject('hubo un error')
    }
})

promesa.then( respuesta =>{
    console.log('Response: ' + respuesta)
}).catch(error =>{//controlo el error
    console.log('error')
})


//* ejemplo #2
var miPromesa = Promise.resolve('Comida')
miPromesa.then((response) => console.log(response))


//* Ejemplo #3
let miPromesa2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 2000)
})

miPromesa2.then(response => {
    response += 5
    console.log(response)
})

