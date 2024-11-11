function hola(nombre, miCallback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
        miCallback(nombre)
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback()
    }, 1000)
}

console.log('Inciando proceso...');

hola('Raul', (nombre) => {
    adios(nombre, () => {
        console.log('Terminano proceso...');
    })
})





