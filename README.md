# Eliminación de usuarios según IDs filtrados

Este código de JavaScript tiene como objetivo eliminar usuarios de un arreglo (`users`) cuyos IDs estén presentes en otro arreglo (`filteredUsers`), y luego mostrar los usuarios filtrados.

## Arreglos de usuarios

### `users`

El arreglo `users` contiene objetos que representan a los usuarios, con las siguientes propiedades para cada usuario:
- `id` (number): Identificador único del usuario.
- `name` (string): Nombre del usuario.
- `lastName` (string): Apellido del usuario.

### `filteredUsers`

El arreglo `filteredUsers` contiene objetos de usuarios filtrados, con las siguientes propiedades para cada usuario:
- `id` (number): Identificador único del usuario.
- `name` (string): Nombre del usuario.

## Proceso de filtrado

El proceso de filtrado se realiza utilizando el método `filter()` en el arreglo `users` y la función `find()` para buscar en `filteredUsers`. Aquí está el proceso paso a paso:

1. **Filtrado de usuarios:**
   - Se utiliza `filter()` en el arreglo `users` para mantener solo los usuarios que no están en `filteredUsers` según su `id`.

2. **Verificación de coincidencias:**
   - Se utiliza `find()` en `filteredUsers` para buscar un usuario con el mismo `id` que el usuario actual en `users`.

3. **Eliminación de usuarios:**
   - Si no se encuentra una coincidencia en `filteredUsers` para un usuario en `users`, se mantiene ese usuario en el arreglo `users`.

## Resultado

Después del proceso de filtrado, se mostrará en la consola el arreglo `users` que contiene los usuarios filtrados.

```javascript
console.log(users);
```

## Ejecución del código

Para ejecutar este código, sigue estos pasos:

### Instalación de dependencias:

1. Abre una terminal y navega al directorio del proyecto.
2. Ejecuta el comando `npm install` para instalar las dependencias necesarias.

### Ejecución del ejemplo:

Una vez que las dependencias estén instaladas, ejecuta el comando `npm run test` para correr el ejemplo y ver los resultados en la consola.
