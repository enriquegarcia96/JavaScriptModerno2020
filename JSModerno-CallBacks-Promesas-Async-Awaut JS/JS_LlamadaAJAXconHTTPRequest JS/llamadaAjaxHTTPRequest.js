//de callback a promesas

const getUsuariosIDs =  new Promise((response, reject) =>{
    setTimeout(() =>{
        response([101,102,103,105])
    },1500)
})


const getUsuario = (userID) =>{
    return new Promise((resolve, reject) =>{
        setTimeout((id) => {
            
            //objetos
            const usuario ={
                email: 'diana@gmail.com',
                nombre: 'diana'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`)
        },1500,userID)
    })
}

//devuleve los permisos
const getPermisos = (id) =>  {
    return new Promise((resolve, reject) =>{
        setTimeout( id =>{
            const permiso = ['admin', 'creador']
            resolve(permiso)
        },1500,id)//permisos que me  devuelve
    })
}

// getUsuariosIDs
// .then(IDs =>{
//     console.log(IDs)//recibo el arreglo de IDs de los usuarios
//     return getUsuario(IDs[3])//porque es una promesa le pongo return
// })
// .then( usuario => {//recibo la promesa
//     console.log(usuario)
//     return getPermisos(usuario.id) //llamo el metodo y le mando el usuario.id
// })
// .then(permisos =>{//recibo los permisos
//     console.log(permisos)
// })
// .catch(() => console.log('Error'))


//TODo; Funcion con Async/Await

async function getUsuariosWA() {
    const IDs = await getUsuariosIDs
    console.log(IDs)
    
    //traigo los datos del usuario
    const usuario = await getUsuario(IDs[3])
    console.log(usuario)

    //traigo los permisos
    const permisos = await getPermisos(usuario.id)
    console.log(permisos)
    
    return usuario
}

//* ejemplo de una llamada AJAX con html request

const request = new XMLHttpRequest()//instancio del objeto xml

//evento del objeto xmlhttprequest
request.addEventListener('readystatechange', (e) =>{
    if(e.target.readyState === 4){

        //traigo los datos en formato JSON
        const datos = JSON.parse(e.target.responseText)
        console.log(datos)
    }
})

//abro la ruta por le metodo get y  el link
request.open('GEt', 'https://jsonplaceholder.typicode.com/users')
request.send() //llamo el metodo para que se envie la peticion
