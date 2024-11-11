// Las variables de entorno son una forma de llamar información de afuera a nuestro software

// process.env es un objeto en nodejs que contiene todas las variables de entorno
let nombre = process.env.NOMBRE || 'sin nombre'
let web = process.env.WEB || 'no tengo web'


console.log('Hola ' + nombre);
console.log('Mi web es: ' + web);

console.log('fdsgd');
