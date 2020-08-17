var promedioPablo = (14 + 19 +16) / 3
var promedioMaria = (12 + 16 +10)/3

//promedio superiror 
if(promedioPablo > promedioMaria){
    console.log('pablo tiene el promedio ')
}else if( promedioMaria > promedioPablo){
    console.log('maria tiene el promedio superior')
}else{
    console.log('pablo y maria tiene promedios iguales')
}

//mostrar si estan aprobados
for(var i = 1; i<=2; i++){
    if(i === 1){
        console.log('Promedio de pablo: '+ promedioPablo)
        if(promedioPablo > 13){
            console.log('pablo esta aprobado' )
        }else if(promedioPablo > 13){
            console.log('pablo esta desaprobado')
        }
    }else{
        console.log('promedio de maria: ' + promedioMaria)
        if(promedioMaria > 13){
            console.log('maria esta aprobada')
        }else{
            console.log('maria esta desaprobada')
        }
    }
}