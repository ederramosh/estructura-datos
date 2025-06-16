/*
EJERCICIO 1: 
Crear una función que en base a la edad que ingreso el usuario devolver un 
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/

export const checkAge = (age) => {
  const checker = age >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
  return checker;
}

