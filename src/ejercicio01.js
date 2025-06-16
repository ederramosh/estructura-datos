/*
EJERCICIO 1: 
Crear una función que en base a la edad que ingreso el usuario devolver un 
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/

document.getElementById("calcular-btn").addEventListener("click", () => {
  const input = document.getElementById("edad");
  const result = document.getElementById("resultado");
  const age = parseInt(input.value);
  
  result.textContent = age >= 18 ? 'Es mayor de edad' : 'No es mayor de edad';
  
});
