/*
EJERCICIO 8:  
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
por el usuario. 
*/

document.getElementById("calcular-btn").addEventListener("click", () => {
  const input = document.getElementById("numero");
  const result = document.getElementById("resultado");
  const numero = parseInt(input.value);

  if (isNaN(numero)) {
    result.innerHTML = "Por favor ingresa un número válido.";
    return;
  }

  for (let i = 0; i <= 10; i++) {
    result.innerHTML += `<p>${numero} * ${i} = ${numero * i}</p>`;
  }

  result.innerHTML = tabla;
});
