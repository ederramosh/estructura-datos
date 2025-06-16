/*
EJERCICIO 7:  
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:  
• La cantidad de valores negativos ingresados. 
• La cantidad de valores positivos ingresados. 
• La cantidad de múltiplos de 15. 
• El valor acumulado de los números ingresados que son pares.
*/

document.getElementById("calcular-btn").addEventListener("click", () => {
  const arrayNumber = [];
  let positives = 0;
  let negatives = 0;
  let oddSum = 0;

  for (let i = 0; i < 10; i++) {
    const input = document.getElementById(`num${i}`);
    const numero = parseFloat(input.value);

    if (!isNaN(numero)) {
      arrayNumber.push(numero);
    } else {
      arrayNumber.push(null);
    }
  }

  arrayNumber.forEach((number) => {
    number >= 0 ? ++positives : ++negatives;
  });
  oddSum = arrayNumber.reduce((acumulador, numero) => {
    return numero % 2 === 0 ? acumulador + numero : acumulador;
  }, 0);

  document.getElementById("positiveNum").textContent = "La cantidad de  positivos ingresados " + positives;
  document.getElementById("negativeNum").textContent = "La cantidad de  negativos ingresados " + negatives;
  document.getElementById("oddSum").textContent = "La suma de los pares " + oddSum;

});
