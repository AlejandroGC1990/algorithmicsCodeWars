//? Write a function to split a string and convert it into an array of words.

//?Escriba una función para dividir una cadena y convertirla en una matriz de palabras.

function stringToArray(string) {
  return string.split(" ");
}

// Example usage:
console.log(stringToArray("I love programming")); // ["I", "love", "programming"]
console.log(stringToArray("Hello World")); // ["Hello", "World"]
