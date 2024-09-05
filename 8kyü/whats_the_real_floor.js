//? Americans are odd people: in their buildings, the first floor is
//? actually the ground floor and there is no 13th floor (due to
//? superstition).
//? Write a function that given a floor in the american system
//? returns the floor in the european system.
//? With the 1st floor being replaced by the ground floor and the
//? 13th floor being removed, the numbers move down to take their
//? place. In case of above 13, they move down by two because there
//? are two omitted numbers below them.
//? Basements (negatives) stay the same as the universal level.

//? Los estadounidenses son gente extraña: en sus edificios, el
//? primer piso es en realidad la planta baja y no existe el piso 13
//? (debido a la superstición).
//? Escriba una función que, dado un piso en el sistema americano,
//? devuelva el piso en el sistema europeo.
//? Al sustituirse el primer piso por la planta baja y eliminarse el
//? piso 13, los números se desplazan hacia abajo para ocupar su
//? lugar. En el caso de los números superiores al 13, se desplazan
//? dos hacia abajo porque hay dos números omitidos debajo de ellos.
//? Los sótanos (negativos) permanecen igual que el nivel universal.

// Ejemplos
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function getRealFloor(n) {
  if (n > 13) {
    return n - 2; 
  } else if (n > 0) {
    return n - 1; 
  } else {
    return n; 
  }
}

console.log(getRealFloor(1)); // 0
console.log(getRealFloor(0)); // 0
console.log(getRealFloor(5)); // 4
console.log(getRealFloor(15)); // 13
console.log(getRealFloor(-3)); // -3
