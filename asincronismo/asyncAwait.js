 async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre)
        }, 1000)
    })
    
}

async function hablar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            resolve()
        }, 1000)
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve(nombre)
        }, 1000)
    })
}

async function main() {
     const nombre = await hola('Raul')
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

main() 