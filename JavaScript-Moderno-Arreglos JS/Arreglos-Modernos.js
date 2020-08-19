
const ceviche = ['pescado', 'mariscos', 'cebolla']
const ceviche = [
    {codigo: 1,titulo: 'pescado'},
    {codigo: 2,titulo: 'mariscos',tipo: 'frescos'},
    {codigo: 3,titulo: 'cebolla'} ]

console.log( ceviche.pop())//quitamos un elemento del arreglo
ceviche.push('Limon')//metemos un alemento al arreglo

console.log(ceviche.shift())//para eliminar al princio del arreglo
ceviche.unshift('papas')//para agregar al princio del arreglo


console.log(ceviche)
ceviche[0] = 'papas'


ceviche.splice(1,0,'limon')//para agregar o eliminar elementos de un array
console.log(ceviche)


ceviche.forEach(function(item, index){
    console.log(index)
    console.log(item)
})

for(let i=0; i<ceviche.length; i++){
    console.log(`Indice ${i}: ${ceviche[i]}`)
}


console.log(ceviche.indexOf('pescado'))




const buscarIngrediente = function(ceviche, titulo){

    //este busca el indice en el array de objeto
    const  index = ceviche.findIndex(function(ing, index){
        return ing.titulo === titulo
    })
    return index
}

//filtrado dentro de un arreglo
const filtrarIngredientes = ceviche.filter(function(ing, index){
    return ingrediente = ing.titulo.includes('a')
})
console.log(filtrarIngredientes)

//arreglo antes de ordenarlo
console.log(ceviche)
ceviche.sort(function(a,b){
    
    if(a.titulo > b.titulo){
        return 1
    }
    if(a.titulo < b.titulo){
        return -1;
    }
    return 0
})
//arreglo despues de ordenarlo
console.log(ceviche)



//* ejemplo sencillo de filtrado
console.log('')
const paises = ['Colombia', 'Ecuador', 'Peru', 'España', 'Mexico' ]
console.log(paises.filter(pais => pais.includes('Es')))//filtrado




const index = ceviche.findIndex(function(ing, index){
    console.log(ing)
    return ing.titulo === 'cebolla'
})



console.log(buscarIngrediente(ceviche, 'mariscos'))
console.log(ceviche[buscarIngrediente(ceviche, 'mariscos')])

