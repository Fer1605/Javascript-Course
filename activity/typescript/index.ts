// Ejercicio 1

// Definimos la interfaz Person
interface Person {
    name: string;
    age: number;
    profession: string;
  }
  
  // Función flecha que recibe un objeto tipo Person y devuelve un array con sus valores
  const getPersonValues = (person: Person): (string | number)[] => {
    return [person.name, person.age, person.profession];
  };
  
  // Ejemplo de uso
  const personExample: Person = {
    name: "Lucas",
    age: 28,
    profession: "Full Stack",
  };
  
  console.log(getPersonValues(personExample)); // ["Lucas", 28, "Full Stack"]  


// Ejercicio 2

function sumOrConcatenate(a: number | string, b: number | string): string | number {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
      return `${a}-${b}`;
    } else {
      return `${a}:${b}`;
    }
  }
  
  // Pruebas
  console.log(sumOrConcatenate(4, 3));           // 7
  console.log(sumOrConcatenate(4, "hello"));     // 4:hello
  console.log(sumOrConcatenate("hello", "world")); // hello-world
  

// Ejercicio 3

interface Car {
    tires: number;
    turnOnEngine: () => void;
    pressPedal: () => void;
  }
  
  interface Motorcycle {
    tires: number;
    turnOnEngine: () => void;
    openThrottle: () => void;
  }

  function isCar(vehicle: Car | Motorcycle): vehicle is Car {
    return (vehicle as Car).pressPedal !== undefined;
  }

  function operateVehicle(vehicle: Car | Motorcycle): void {
    vehicle.turnOnEngine();
  
    if (isCar(vehicle)) {
      vehicle.pressPedal();
    } else {
      vehicle.openThrottle();
    }
  }

  const myCar: Car = {
    tires: 4,
    turnOnEngine: () => console.log("Car engine turned on"),
    pressPedal: () => console.log("Car is accelerating")
  };
  
  const myMotorcycle: Motorcycle = {
    tires: 2,
    turnOnEngine: () => console.log("Motorcycle engine turned on"),
    openThrottle: () => console.log("Motorcycle is accelerating")
  };
  
  operateVehicle(myCar);
  // → Car engine turned on
  // → Car is accelerating
  
  operateVehicle(myMotorcycle);
  // → Motorcycle engine turned on
  // → Motorcycle is accelerating


// Ejercicio 4

function removeFirstEntry<T extends string | number>(array: T[]): T[] {
    return array.slice(1);
  }
  const strArray: string[] = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
  const numArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  const mixedArray: Array<string | number> = ['Hello', 'I', 'have', 3, 'tasks'];
  const unsupportedArray = [{ name: 'Lucas', surname: 'Fernandez' }, 'Hello', 22];
  
  const newStrArray = removeFirstEntry(strArray);
  const newNumArray = removeFirstEntry(numArray);
  const newMixedArray = removeFirstEntry(mixedArray);
  // const newUnsupportedArray = removeFirstEntry(unsupportedArray); // ❌ Esto sí dará error al compilar
  
  console.log(newStrArray);   // ['World', 'Im', 'a', 'Full', 'Stack', 'Developer']
  console.log(newNumArray);   // [2, 3, 4, 5, 6, 7]
  console.log(newMixedArray); // ['I', 'have', 3, 'tasks']
    