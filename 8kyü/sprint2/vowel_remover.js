//? Create a function called shortcut to remove the lowercase vowels
//? (a, e, i, o, u ) in a given string.

//? Crea una función llamada shortcutpara eliminar las vocales minúsculas
//? ( a, e, i, o, u) en una cadena dada.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

function shortcut(string) {
  const vowels = "aeiou";

  return string
    .split("")
    .filter((char) => !vowels.includes(char))
    .join("");
}

module.exports = { shortcut };