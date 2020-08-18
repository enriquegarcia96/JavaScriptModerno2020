//* Examinado el DOM


//console.dir(document)
console.log(document.title)
document.title = 'Prueba'
console.log(document.title)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
console.log(document.forms[0])//el formulario
console.log(document.links)


console.log('')
//* getElementById()

console.log(document.getElementById('header-title'))

var headerTitle  = document.getElementById('header-title')
var header = document.getElementById('main-header')

console.log(headerTitle)
console.log(header)
headerTitle.textContent = 'Hola mundo'
headerTitle.textContent = 'Adios...'
headerTitle.innerHTML = '<h3>Prueba</h3>'


console.log('')

//* getElementsByClassName(obtiene varios elementos de la clase)

var items = document.getElementsByClassName('list-group-item')
console.log(items[3])
items[0].textContent = 'Prueba '


console.log('')

//getelementsByTagName
//* trae todas las etiquetas (li)
var items2 = document.getElementsByTagName('li')
items2[2].textContent = 'prueba 02'


//querySelector
var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px #000'

//input
var input = document.querySelector('input')
input.value = 'hola mundo'

var submit = document.querySelector('input[type="submit"]')
submit.value = 'Enviar'

var item = document.querySelector('.list-group-item')
item.style.color = 'red'







//querySelectorAll
var items = document.querySelectorAll('.list-group-item')
items[3].style.color = 'red'
var title = document.querySelectorAll('.title')
console.log(title)
title[0].textContent = 'Diana'

var impar = document.querySelectorAll('li:nth-child(odd)')
var par = document.querySelectorAll('li:nth-child(even)')
for (var i=0; i<impar.length; i++){
impar[i].style.backgroundColor = '#ccc'
par[i].style.backgroundColor = '#f4f4f4'
}


//parentNode
var listaItem = document.querySelector('#items')

console.log(listaItem.parentNode)//para saber quien es el padre

var main = listaItem.parentNode
main.style.backgroundColor = '#f4f4f4'//al formulario div

console.log('')
console.log('')

//parentElement
var listaItem2 = document.querySelector('#items')

console.log(listaItem2.parentElement)//para saber quien es el padre

var main2 = listaItem2.parentElement
main2.style.backgroundColor = '#f4f4f4'//al formulario div
console.log(main2.parentElement.parentElement)