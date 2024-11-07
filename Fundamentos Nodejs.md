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