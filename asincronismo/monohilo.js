console.log('Hola mundo');

let i = 0

// SetInterval: Se utiliza para ejecutar una acción de forma repetitiva  cada cierto intervalo de tiempo hasta que se detiene explicitamente

// Callback: Es la función que se ejecutara cada vez que pase el tiempo especificado.
// Delay: Especifica el intervalo de tiempo (en milisegundos) entre cada ejecución de la función callback

setInterval(function() {
    console.log(i);
    i++

    // Forzando un error para ver como se detiene la ejecución del callback si no se manejan de manera correcta los errores.
    if (i === 5) {
        console.log('forzamos error');
        
        a = 3 + z
    }
}, 1000)

console.log('segunda instruccion');



