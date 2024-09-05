//? Write a function that checks if a given string
//? (case insensitive) is a palindrome.
//? A palindrome is a word, number, phrase, or other
//? sequence of symbols that reads the same backwards
//? as forwards, such as madam or racecar.

//? Escriba una función que verifique si una cadena
//? dada (sin distinguir entre mayúsculas y minúsculas)
//? es un palíndromo .
//? Un palíndromo es una palabra, número, frase u otra
//? secuencia de símbolos que se lee igual al revés que
//? hacia adelante, como por ejemplo madamo racecar.

function isPalindrome(x) {
  const cleanedString = x.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedString === cleanedString.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Madam"));   // true
console.log(isPalindrome("Hello"));   // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true