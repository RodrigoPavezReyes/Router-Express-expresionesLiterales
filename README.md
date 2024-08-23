# Router de mascotas
## Router sistema sencillo de express
Crear un router para manejo de mascotas en una ruta base ‘/api/pets’, éste gestionará diferentes
mascotas en un arreglo como persistencia. Posteriormente, desarrollar los siguientes endpoints:

✓ POST (‘/’): deberá insertar una nueva mascota. El formato de cada mascota será {name:String,
specie: String}

✓ GET(‘/:pet’): Deberá traer la mascota con el nombre indicado. Utilizar una expresión regular para
que sólo se puedan recibir letras e incluso espacios (recuerda cómo se lee un espacio a nivel
URL). No debe permitir números.

✓ PUT (‘/:pet’): Deberá traer la mascota y añadirle un campo “adopted:true” a dicha mascota en
caso de existir.

✓ Generar además un router.param que permita acceder de manera directa a la mascota,
colocándola en req.pet
