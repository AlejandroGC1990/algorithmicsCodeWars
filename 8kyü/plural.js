//? We need a simple function that determines if a plural is needed
//? or not. It should take a number, and return true if a plural
//? should be used with that number or false if not. This would be
//? useful when printing out a string such as 5 minutes, 14 apples,
//? or 1 sun.
//? "You only need to worry about english grammar rules for this
//? kata, where anything that isn't singular (one of something), it
//? is plural (not one of something)."
//? All values will be positive integers or floats, or zero.

//? Necesitamos una función simple que determine si se necesita un
//? plural o no. Debería tomar un número y devolver verdadero si se
//? debe usar un plural con ese número o falso si no. Esto sería útil
//? al imprimir una cadena como 5 minutes, 14 appleso 1 sun.
//? "Solo tienes que preocuparte por las reglas gramaticales inglesas
//? para este kata, donde cualquier cosa que no sea singular (uno de
//? algo), es plural (no uno de algo)."
//? Todos los valores serán números enteros positivos o flotantes, o
//? cero.

function plural(n) {
  return n !== 1;
}

console.log(plural(0)); // true, ya que no es 1, se debe usar plural
console.log(plural(1)); // false, ya que es 1, no se usa plural
console.log(plural(2)); // true, se debe usar plural
console.log(plural(1.5)); // true, se debe usar plural
