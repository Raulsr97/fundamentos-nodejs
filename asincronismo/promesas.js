function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre)
        }, 1000)
    })
    
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            reject()
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve(nombre)
        }, 1000)
    })
}

// ----------------------- Ejecución ------------------

console.log('iniciando el proceso');


hola('raul')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Proceso terminado');
    })
    .catch(error => {
        console.error('Hubo un error');
        console.error(error);
    })