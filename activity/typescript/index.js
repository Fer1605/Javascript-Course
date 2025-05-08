// Ejercicio 1
console.log("Ejercicio 1");
// Función flecha que recibe un objeto tipo Person y devuelve un array con sus valores
var getPersonValues = function (person) {
    return [person.name, person.age, person.profession];
};
// Ejemplo de uso
var personExample = {
    name: "Lucas",
    age: 28,
    profession: "Full Stack",
};
console.log(getPersonValues(personExample)); // ["Lucas", 28, "Full Stack"]  

// Ejercicio 2
console.log("Ejercicio 2");

function sumOrConcatenate(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return "".concat(a, "-").concat(b);
    }
    else {
        return "".concat(a, ":").concat(b);
    }
}
// Pruebas
console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4:hello
console.log(sumOrConcatenate("hello", "world")); // hello-world

// Ejercicio 3
console.log("Ejercicio 3");

function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
function operateVehicle(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
}
var myCar = {
    tires: 4,
    turnOnEngine: function () { return console.log("Car engine turned on"); },
    pressPedal: function () { return console.log("Car is accelerating"); }
};
var myMotorcycle = {
    tires: 2,
    turnOnEngine: function () { return console.log("Motorcycle engine turned on"); },
    openThrottle: function () { return console.log("Motorcycle is accelerating"); }
};
operateVehicle(myCar);
// → Car engine turned on
// → Car is accelerating
operateVehicle(myMotorcycle);
// → Motorcycle engine turned on
// → Motorcycle is accelerating

// Ejercicio 4
console.log("Ejercicio 4");

function removeFirstEntry(array) {
    return array.slice(1);
}
var strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
var unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
var newStrArray = removeFirstEntry(strArray);
var newNumArray = removeFirstEntry(numArray);
var newMixedArray = removeFirstEntry(mixedArray);
// const newUnsupportedArray = removeFirstEntry(unsupportedArray); // ❌ Esto sí dará error al compilar
console.log(newStrArray); // ['World', 'Im', 'a', 'Full', 'Stack', 'Developer']
console.log(newNumArray); // [2, 3, 4, 5, 6, 7]
console.log(newMixedArray); // ['I', 'have', 3, 'tasks']
