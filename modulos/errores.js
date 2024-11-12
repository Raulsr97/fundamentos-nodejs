function otraFuncion() {
    seRompe()
}

function seRompe() {
    return 3 + z
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            3 + z
        } catch (err) {
            console.error('Error en mi funcion asincrona');
            cb(err)
        }
    }, 1000)
} 

try {
    // otraFuncion()
    seRompeAsincrona(() => {
        console.log('error');
        
    })
} catch (err) {
    console.error('Vaya algo se ha roto');
    console.error(err.message);
    
}

console.log('Esto pasa despues del error');
