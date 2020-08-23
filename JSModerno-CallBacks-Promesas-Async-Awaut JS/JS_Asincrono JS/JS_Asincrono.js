//* javascript asincrono


// se convierte en una funcion asincrona
const segundo = () =>{
    setTimeout (() =>{
        console.log('llamada a segundo')
    },2000)
}

const primero = ( ) =>{
    console.log('Inicio de primero')
    segundo()
    console.log('fin de primero')
}

primero()