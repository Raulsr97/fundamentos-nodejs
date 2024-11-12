const http = require('http')

http.createServer((req, res) => {
    console.log('nueva peticion');
    console.log(req.url);

    

    // Escribir respuesta al usuario
    res.write('Hola, ya se usar http de nodejs')
    
    res.end()
}).listen(5000)

console.log('Escuchando http en el puerto 5000');

