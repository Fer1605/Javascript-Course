// Ejercicio 1
import './aboutme.js';
console.log("Ejercicio 1");

// Ejercicio 2
console.log("Ejercicio 2");

console.log("Se ejecuta primero el fichero aboutme.js,Porque cuando usás import, ese archivo se evalúa antes de ejecutar el código principal. Es parte del proceso de carga de módulos de JavaScript (ES Modules). Así que todo lo que esté en aboutme.js (como tu console.log(presentacion)) se ejecuta al momento de importar, antes que se corra el resto del código de index.js");

// Ejercicio 3
console.log("Ejercicio 3");

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }

// Ejercicio 4
console.log("Ejercicio 4");
console.log("1. ¿Qué valor tendrá la variable `i` al finalizar el bucle? El valor de `i` al finalizar el bucle será 101, porque el bucle se ejecuta mientras `i` sea menor o igual a 100. Cuando `i` llega a 101, la condición del bucle ya no se cumple y se sale del bucle.");
console.log("2. ¿Por qué? var tiene un alcance de función o global. En este caso, como el bucle está en el contexto global, la variable i es accesible fuera del bucle, lo que permite que se imprima en el console.log(i) después de que el bucle termine.");
console.log("3. ¿Cómo evitar que i sea global? Si se quiere que i solo exista dentro del bucle (es decir, que no sea accesible fuera de él), se usa let o const, que tienen un alcance de bloque. Esto significa que solo existirán dentro del bloque donde se declaran, en este caso, dentro del bucle.");

// Ejercicio 5
console.log("Ejercicio 5");
console.log("Diferencias entre <script> y <script type='module'>:");

console.log("\n1. Alcance de las variables:");
console.log("<script>: Las variables declaradas con 'var' tienen alcance global.");
console.log("<script type='module'>: Las variables tienen alcance de bloque.");

console.log("\n2. Modo estricto:");
console.log("<script>: No ejecuta el código en modo estricto por defecto.");
console.log("<script type='module'>: Ejecuta el código en modo estricto.");

console.log("\n3. Soporte para 'import' y 'export':");
console.log("<script>: No permite el uso de 'import' y 'export'.");
console.log("<script type='module'>: Permite el uso de 'import' y 'export'.");

console.log("\n4. Carga y ejecución:");
console.log("<script>: Los scripts se cargan y ejecutan de forma sincrónica.");
console.log("<script type='module'>: Los módulos se cargan de forma diferida.");

console.log("\n5. Caché y recarga:");
console.log("<script>: Los scripts pueden ser cacheados y requieren limpieza manual.");
console.log("<script type='module'>: Los módulos pueden recargarse automáticamente.");

// Ejercicio 6
console.log("Ejercicio 6");
const formatter = {
    prefix: "Hello ",
    append: function(str) {
      console.log(this.prefix + str);
    }
  };
  formatter.append("World");
  formatter.toLowerString = function(str) {
    console.log(str.toLowerCase());
  };
  formatter.toLowerString("I’m Lucas");
  
