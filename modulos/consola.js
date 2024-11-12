console.log('Algo')
console.info('Algo')
console.error('Algo');
console.warn('Algo');

let tabla = [
    {
        a: 1,
        b: 'a'
    },
    {
        a: 2,
        b: 'b'
    }
]

console.table(tabla)


console.group('hablar')
console.log('Hola');
console.log('Conversacion');
console.log('Adios');
console.groupEnd('hablar');


function funcion1() {
    console.group('funcion 1')
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    funcion2()
    console.log('He vuelto a la funcion 1');
    
    console.groupEnd('funcion 1')
}

function funcion2() {
    console.group('funcion 2')
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('funcion 2')

}

console.log('empezamos');
funcion1()



console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')





