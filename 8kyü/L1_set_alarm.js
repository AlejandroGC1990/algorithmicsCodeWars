//?Write a function named setAlarm/set_alarm/set-alarm/setalarm
//?(depending on language) which receives two parameters. The
//?first parameter, employed, is true whenever you are employed
//?and the second parameter, vacation is true whenever you are
//?on vacation.
//?The function should return true if you are employed and not
//? on vacation (because these are the circumstances under which
//? you need to set an alarm). It should return false otherwise.
//?Examples:

//?Escriba una función llamada setAlarm/ set_alarm/ set-alarm/
//?setalarm(según el lenguaje) que reciba dos parámetros. El
//?primer parámetro, employed, es verdadero siempre que esté
//?empleado y el segundo parámetro, vacationes verdadero siempre
//?que esté de vacaciones.
//?La función debe devolver verdadero si está empleado y no de
//?vacaciones (porque estas son las circunstancias en las que
//?debe configurar una alarma). De lo contrario, debe devolver
//?falso. Ejemplos:

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation) {
  return employed && !vacation;
}

console.log(setAlarm(true, true)); // false
console.log(setAlarm(true, false)); // true
console.log(setAlarm(false, true)); // false
console.log(setAlarm(false, false)); // false
