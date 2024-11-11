const fs = require('fs')

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.log('No eh podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
            
        }
    })
}

function borrar (ruta, cb) {
    fs.unlink(ruta, (err) => {
        if(err) {
            console.log('No se pudo eliminar el archivo', err);
        } else {
            console.log('Se ha eliminado el archivo');
        }
    })
}

// leer('./archivo.txt', console.log)

// escribir('./archivo1.txt', 'Soy un archivo nuevo', console.log)

borrar('./archivo1.txt', console.log
)