//Definición de las clases
class Libro{
    constructor(titulo, autor, isbn){
        this.titulo = titulo
        this.autor = autor
        this.isbn = isbn
    }
}

//* se encarga de la interancion de la interfaz
class UI{
    //static, para llamar a estos metodos de un solo, llamo la clase.elmetodo
    static mostrarLibros(){
        
        const libros = Datos.traerLibros()
        libros.forEach((libro) => UI.agregarLibroLista(libro))
    }

    static agregarLibroLista(libro){

        //capturo el DIV donde se mostrara los libros añadidos
        const lista = document.querySelector('#libro-list')


        const fila = document.createElement('tr')//creo los TR
        fila.innerHTML = //ingreso  el HTML 
        `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `  //? la clae delete es para identificar que este objeto le estoy haciendo click para eliminar
        
        lista.appendChild(fila)//lo agrago a la lista en html
    }

    static eliminarLibro(elmentoEliminar){
        //pregunto si "delete tiene la clase de "CSS"
        if(elmentoEliminar.classList.contains('delete')){
            
            //eliminame el elemento padre del elemento padre TR
            elmentoEliminar.parentElement.parentElement.remove()
        }
    }

    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(mensaje))

        const container = document.querySelector('.container')
        const form = document.querySelector('#libro-form')
        container.insertBefore(div, form)

        setTimeout(()=>document.querySelector('.alert').remove(), 5000)
    }

    static limpiarCampos(){

        //* limpio los inputs
        document.querySelector('#titulo').value = ''
        document.querySelector('#autor').value = ''
        document.querySelector('#isbn').value = ''
    }
}

class Datos{

    static traerLibros(){
        let libros;
        if(localStorage.getItem('libros') === null){
            libros = [];//me retorna el array vacio
        }else{
            libros = JSON.parse(localStorage.getItem('libros'))//traigo la coleccion de libros
        }
        return libros
    }

    static agregarLibro(libro){
        
        const libros = Datos.traerLibros()// traigos los libros
        libros.push(libro);// me agrega los objeto al array
        localStorage.setItem('libros', JSON.stringify(libros))//lo mando al local para guardar en formato JSON
    }

    static removerLibro(isbn){
        //traigo nuevamente los libros que los tengo en un arreglo llamado libros
        const libros = Datos.traerLibros()
        console.log(isbn)

        //recorro el arreglo libro
        libros.forEach((libro, index) => {
            
            //si el elemento librocampoISBn es igual al isbn que estoy recibiendo como parametro
            if(libro.isbn === isbn){
                libros.splice(index, 1)//me elimina el index del isbn (arreglo libros)
            }
        })
        localStorage.setItem('libros', JSON.stringify(libros))//nuevo arreglo con el elemento aliminado
    }
}

//Carga el contenido del DOM; al momento de agregar un nuevo libro, carga automatica 
document.addEventListener('DOMContentLoaded',UI.mostrarLibros())

//Controlar el Evento Submit.
document.querySelector('#libro-form').addEventListener('submit',(e) => {
    e.preventDefault()

    //Obtener valores de los campos
    const titulo = document.querySelector('#titulo').value
    const autor = document.querySelector('#autor').value
    const isbn = document.querySelector('#isbn').value

    if(titulo === '' || autor === '' || isbn === ''){
        UI.mostrarAlerta('Por favor ingrese todos los datos', 'danger');
    }else{
        const libro = new Libro(titulo, autor, isbn)
        Datos.agregarLibro(libro)//le mando el libro creado como objeto 
        UI.agregarLibroLista(libro)//muestra el libro nuevo que se agrego (en el DIV)
        UI.mostrarAlerta('Libro agregado a la colección','success')//mensaje que se agrego correctamente
        UI.limpiarCampos()//limpia los inputs
    }
})



//* para elimar el libro y recargar el objeto libro-list
document.querySelector('#libro-list').addEventListener('click', (e) => {
    UI.eliminarLibro(e.target)//le mando la etiqueta de ISBN

    //capturo el ISNB para mandarlo y eliminar el libro
    Datos.removerLibro(e.target.parentElement.previousElementSibling.textContent)

    UI.mostrarAlerta('Libro Eliminado','success')//muestro el mensaje
})