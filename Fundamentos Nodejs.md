# Fundamentos Nodejs

¿Que es nodejs?

- Es un entorno de ejecución de JavaScript fuera del navegador.
- Se crea en 2009 orientado a servidores.

Características:

- Concurrencia
    - Monohilo, con entradas y salidas asíncronas.
    - Un proceso por cada núcleo del procesador.
- Motor V8
    - Entorno de ejecución de JS creado por Google y libre desde 2008.
    - Escrito en c++
    - Convierte JS en código máquina en lugar de interpretarlo en tiempo real.
- Módulos
    - Todo lo que no sea sintaxis de programación son modulos
    - Muchos módulos vienen por defecto en el paquete de node.
    - Puedes crear tus propios módulos.
- Orientado a eventos
    - Hay un bucle de eventos que se ejecuta constantemente.
    - Puedes orientar tu código de forma reactiva.

Eventloop: Asincronía por diseño.

 - Un proceso de un un bucle que gestiona, de forma asíncrona, todos los eventos de una apliación.

 - Event Queue: Contiene todos los eventos que se generan en nuestro código, estos eventos quedan en una cola que va pasando uno a uno al event loop.

 - Event loop: Se encarga de resolver los eventos ultrarapidos que llegan desde el event queue, en caso de no poder resolverlo rápido envía los eventos al thread pool.

 - Thread pool: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado al event loop 