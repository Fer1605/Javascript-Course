// Ejercicio 1
let person = {
    name: "Lucas",
    age: 27,
    profession: "Developer",
};
const getProperties = (obj) => Object.keys(obj);
console.log(getProperties(person));

// Ejercicio 2
console.log("Ejercicio 2");
console.log("Parte 1: Valores de this");
console.log("1.En el contexto global: (fuera de cualquier función o método), en un navegador hace referencia a window.");
console.log(this); // window
console.log(this === window); // true
console.log("2.Dentro de una función:");
console.log("A. Modo NO estricto: su valor será el objeto globa.");

function showThis() {
  console.log(this);
}
showThis(); // window (en navegador)

console.log("B. Modo estricto: su valor será undefined.");

function showThisStrict() {
  "use strict";
  console.log(this);
}
console.log(showThisStrict() === undefined); // true

console.log("3.Método de un objeto: su valor será el objeto al que pertenece.");

const person2 = {
  name: 'Fer',
  greet: function() {
    console.log(`Hola, soy ${this.name}`);
  }
};
person2.greet(); // "Hola, soy Fer"

console.log("4.Arrow Functions: estas no tienen su propio this. En su lugar, heredan el valor de this del contexto en le que fueron definidas.");

const person3 = {
  name: 'Fer',
  greet: () => {
    console.log(`Hola, soy ${this.name}`); // Hola soy undefined
  }
}; 
console.log(person3.greet() === undefined); // true

console.log("5.Manejador de eventos: se refiere al elemento HTML que recibe el evento. En el caso de un botón, this se refiere al botón que fue presionado.");

function actionButtonReceiver() {
  console.log("Button pressed with->");
  console.log(this);
}

console.log("6.Métodos call(), apply() y bind(): permiten establecer el valor de this cuando se ejecuta una función.");
console.log ("A.Call() ejecuta la función inmediatamente, y el primer parámetro fuerza a this a ser myObj. Luego se pasan los argumentos uno por uno.");

var myObj = { num: 2 };

var addNumbers = function(num1, num2) {
    return this.num + num1 + num2;
};

console.log(addNumbers()); // undefined + undefined + undefined = NaN
console.log(addNumbers.call(myObj, 1, 2)); // 2 + 1 + 2 = 5

console.log("B.Apply() es similar a call(), pero los argumentos se pasan como un array.");

let params = [1, 2];
console.log(addNumbers.apply(myObj, params)); // 2 + 1 + 2 = 5

console.log("C.Bind() no ejecuta la función inmediatamente, sino que devuelve una nueva función que ya tiene this ligado a otherObj.");

var otherObj = {
  num1: 5,
  num2: 4
};

var otherFunc = function() {
  return this.num1 + this.num2;
};

var returnedFunc = otherFunc.bind(otherObj);
console.log(returnedFunc()); // 5 + 4 = 9


console.log("Parte 2: Diferencias entre Arrow Functions y Function Expressions");
const diferencias = [
  {
    Tema: "Sintaxis",
    "Arrow Function": "Sintaxis corta: (a, b) => a + b",
    "Function Expression": "Usa 'function': function(a, b) { return a + b; }"
  },
  {
    Tema: "'this'",
    "Arrow Function": "Hereda del contexto",
    "Function Expression": "Tiene su propio 'this'"
  },
  {
    Tema: "Métodos en objetos",
    "Arrow Function": "❌ No recomendable (this ≠ objeto)",
    "Function Expression": "✅ Recomendable (this = objeto)"
  },
  {
    Tema: "Uso con 'new'",
    "Arrow Function": "❌ No se puede usar como constructora",
    "Function Expression": "✅ Se puede usar como constructora"
  },
  {
    Tema: "Uso de 'arguments'",
    "Arrow Function": "❌ No tiene 'arguments'",
    "Function Expression": "✅ Tiene 'arguments'"
  }
];
console.table(diferencias);

// Ejercicio 3
console.log("Ejercicio 3");

class InvertirCadena {
  constructor() {
    this.cadenaInvertir = "";
  }

  // Método que invierte el texto
  invertir() {
    if (this.cadenaInvertir === "") {
      throw new Error("Error: la cadena está vacía");
    }

    // Invertimos la cadena
    const resultado = this.cadenaInvertir.split('').reverse().join('');
    console.log("Cadena invertida:", resultado);
  }
}

const invertirCadena = new InvertirCadena();
try {
  invertirCadena.invertir(); // Esto lanzará un error porque la cadena está vacía
} catch (error) {
  console.error("Error capturado:", error.message);
}

// MODIFICAMOS el valor de la cadena
invertirCadena.cadenaInvertir = "Hola mundo";
invertirCadena.invertir(); // Debería imprimir "odnum aloH"

// Intentamos acceder a un método que no existe
if (typeof invertirCadena.nuevoMetodo === "function") {
  invertirCadena.nuevoMetodo();
} else {
  console.log("El método nuevoMetodo() no existe");
}

console.log("1. ¿Qué pasa al ejecutar el método sin modificar la propiedad cadenaInvertir? Se lanza un error: Error: la cadena está vacía, porque el valor por defecto es vacío.");
console.log("2. ¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse? Usamos un bloque try { ... } catch(error) { ... } para capturar el error y manejarlo sin que el programa se detenga.");
console.log("3. ¿Qué pasa al ejecutar el método después de modificar la propiedad cadenaInvertir? Imprime la cadena invertida: odnum aloH.");
console.log("4. ¿Qué pasa si tratamos de llamar a invertirCadena.nuevoMetodo()? Dará un error de tipo: TypeError: invertirCadena.nuevoMetodo is not a function, porque ese método no existe.");
console.log("Este tipo de errores pueden romper por completo la ejecución del programa si no se manejan adecuadamente.");
console.log("Para evitarlo, hice una verificación previa usando 'typeof' para comprobar si el método existe y es una función antes de invocarlo, si no, evitaremos el error mostrando un mensaje de advertencia.");
console.log("Esta práctica se conoce como programación defensiva y nos permite crear código más robusto y seguro.");

// Ejercicio 4
console.log("Ejercicio 4");

class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  login() {
    if (this.username === "admin" && this.password === "passwd") {
      console.log("User logged in");
    } else {
      console.log("Error: invalid username or password");
    }
  }
}

//Ejemplo de usuario correcto

let login = new Login("admin", "passwd");
login.login(); // User logged in

//Ejemplo con datos incorrectos
let login2 = new Login("pepe", "bad");
login2.login(); // Error: invalid username or password


// Ejercicio 5
console.log("Ejercicio 5");

// Obtenemos los botones del DOM
const successBtn = document.getElementById("loginSuccess");
const failureBtn = document.getElementById("loginFailure");

// Listener para login exitoso
successBtn.addEventListener("click", () => {
  const login = new Login("admin", "passwd");
  login.login(); // Esto debe mostrar: "User logged in"
});

// Listener para login fallido
failureBtn.addEventListener("click", () => {
  const login = new Login("pepe", "bad");
  login.login(); // Esto debe mostrar: "User or passwd incorrect"
});


// Ejercicio 6
console.log("Ejercicio 6");

// Función simulada que devuelve una promesa
function loginWithUsername(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        reject(new Error("User or password incorrect"));
      }
    }, 1000); // Simula un retraso de 1 segundo
  });
}

// Listener para login correcto
document.getElementById("loginSuccessAsync").addEventListener("click", async () => {
  try {
    const result = await loginWithUsername("admin", "passwd");
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
});

// Listener para login fallido
document.getElementById("loginFailureAsync").addEventListener("click", async () => {
  try {
    const result = await loginWithUsername("pepe", "wrongpass");
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
});

