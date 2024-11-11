function hola(nombre, miCallback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        miCallback(nombre)
    }, 1000)
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log('Bla bla bla bla...');
        callbackHablar()
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback()
    }, 1000)
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(() => {
            // --veces = veces - 1
            conversacion(nombre, --veces, callback)
        })
    } else {
        adios(nombre, callback)
    }
}

// --------------------------------------

console.log('Inciando proceso...');



hola('Raul', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado');
        
    })
})

// Callback hell: Anidamiento de eventos 

// hola('Raul', (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () => {
//                     console.log('Terminano proceso...'); 
//                 }) 
//             })
//         })
//     })
// })

    
