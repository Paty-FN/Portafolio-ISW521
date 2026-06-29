**actividad: rastreen la referencia**



**99 99 1**

**a y b apuntan al mismo objeto**



Actividad: ¿A quién modifica esa línea?

Hola - Pura vida - Hola



Al escribir:



hijo.saludo = "Pura vida";



solo cambia el objeto hijo. El objeto base sigue igual porque JavaScript crea una propiedad nueva en hijo y no modifica la del prototipo.



Regla: al leer una propiedad, JavaScript la busca en la cadena de prototipos; al escribir, el cambio solo afecta al objeto actual.



Actividad encuentre la palabra que falta 

Falta usar new antes de Curso. Si no se usa new, JavaScript no crea un objeto nuevo y puede generar un error o guardar la información en el lugar incorrecto. La forma correcta es:



const prog = new Curso("Programación Web");

