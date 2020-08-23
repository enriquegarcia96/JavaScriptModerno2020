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

getUsuariosIDs
.then(IDs =>{
    console.log(IDs)//recibo el arreglo de IDs de los usuarios
    return getUsuario(IDs[3])//porque es una promesa le pongo return
})
.then( usuario => {//recibo la promesa
    console.log(usuario)
    return getPermisos(usuario.id) //llamo el metodo y le mando el usuario.id
})
.then(permisos =>{//recibo los permisos
    console.log(permisos)
})
.catch(() => console.log('Error'))
