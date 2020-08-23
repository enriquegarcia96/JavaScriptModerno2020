const getUsuarios = () =>{
    setTimeout(() =>{
        const userIDs = [101,102,103,105]
        console.log(userIDs)
        
        setTimeout((id) =>{
            const busuario = {
                email:'diana@gamil.com',
                name:'Diana'
            }
            console.log(`${id} - ${usuario.email} -- ${usuario.name}`)

            //para los permisos
            setTimeout((idPermiso) =>{
                const permiso = ['admin', 'creador']
                console.log(permiso)
            },1500, userIDs[2])

        },1500,userIDs[2])//puedo enviar el parametro de regreso de ese usuario
    },1500)

}
getUsuarios()