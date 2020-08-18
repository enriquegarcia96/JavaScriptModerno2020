//Ejemplo de destructuración

const calcularMayoriaEdad = ( year ) =>{
    const edad = new Date().getFullYear() - year//año actual getfullyear
    const mayoria = edad >= 18 ? true : false
    return [edad, mayoria]
}

const [edad, mayoria]  = calcularMayoriaEdad(2011)
console.log(edad)
console.log(`Es mayor de edad: ${mayoria}`)