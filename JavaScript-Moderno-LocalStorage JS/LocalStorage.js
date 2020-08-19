// localStorage.setItem('nombreUsuario', 'diana')
// localStorage.setItem('ubicacion', 'tocoa')
console.log(localStorage.getItem('nombreUsuario'))
console.log(localStorage.getItem('ubicacion'))


//remover y limpiar datos
// localStorage.removeItem('nombreUsuario')

//para limpiar 
localStorage.clear()



//* Notacion JSON *//

const usuario = {
    nombre: 'diana',
    edad: '24'
}


//* JSON.stringify => convertirme ese objeto que le voy a enviar como paramtro a string
const usuarioJSON = JSON.stringify(usuario)//lo convierto en notacion JSON

//guardar el objeto que cree a localStorage
localStorage.setItem('usuario', usuarioJSON)
console.log(usuarioJSON)

const userJSON = localStorage.getItem('usuario')


//para pasarlo a objeto nuevamente 
const objetoUsuarioTransformado  = JSON.parse(userJSON)
console.log(`${objetoUsuarioTransformado.nombre}: ${objetoUsuarioTransformado.edad}`)


