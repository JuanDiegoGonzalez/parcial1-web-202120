# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

El endpoint creado consulta la lista de jugadores, y encuentra las parejas cuya altura sume el valor indicado por el query. 
La url del endpoint es: http://localhost:3000/api?input=X , donde "X" se puede reemplazar por cualquier valor numerico a buscar.

Si no se encuentran parejas que cumplan la condicion, se devuelve el objeto: [{"message":"No matches found"}]

**Ejemplo:** si se ingresa a la url http://localhost:3000/api?input=139 se obtiene la respuesta: [{"id":1,"jug1":"Brevin Knight","jug2":"Nate Robinson"},{"id":2,"jug1":"Nate Robinson","jug2":"Mike Wilks"}]
