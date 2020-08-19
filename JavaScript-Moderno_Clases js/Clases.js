//* Manejo de clases en JavaScript



class Persona{
    //todo: para poder crear las propiedades del esta clase
    //todo: tendre que tener creado mi metodo Constructor
    constructor(nombre, edad, profesiones = []){
        this.nombre = nombre
        this.edad = edad
        this.profesiones = profesiones
    }

    //metodo
    getBiografia (){
        let biografia = `${this.nombre}, tiene ${this.edad}. profesiones: `

        this.profesiones.forEach((profesion) =>{
            biografia += `${profesion}, `
        })
        return biografia
    }
}

//* subclases
class Empleado extends Persona{

    //* tengo que llamar al constructor de la clase padre(Persona)
    constructor(nombre, edad, profesiones = [], sueldo, puesto){
        
        //* (super) acceso al super constructor de la clase padre(Persona)
        super(nombre, edad, profesiones)
        this.sueldo = sueldo
        this.puesto = puesto
    }

    
    //* voy a redefinir el metodo "getBiografia" pero en la clase hija
    getBiografia(){
        //(super) voy  invocar el metodo de la clase Padre(Persona)
        return super.getBiografia() + `Puesto: ${this.puesto}, Salario ${this.sueldo} `
    }
    
    get sueldo(){
        return this._sueldo 
    }
    set sueldo( monto ){
        return this._sueldo = monto 
    }

}


const persona1 = new Empleado('pablo', 30, ['arquictecto', 'doctor'], 1500, 'Gerente') //le mandamos los atributos a la clase
const persona2 = new Empleado('diana', 24, ['trabajadora social', 'instructora'], 1000, 'RRHH')
const persona3 = new Persona('ana', 24, ['Administradora'])

//para setear el  setSueldo
persona1.sueldo = 500


console.log(persona1.getBiografia())
//console.log(persona1.sueldo) 
console.log(persona2.getBiografia())
console.log(persona3.getBiografia())   


const datos = {
    //  ubicacion: 'lima'
    get ubicacion(){
        return this._ubicacion
    },
    set ubicacion ( valor ){
        this._ubicacion = valor 
    }

}
datos.ubicacion = 'tocoa'
console.log(datos.ubicacion)
console.log(datos)


