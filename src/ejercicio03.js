/*
EJERCICIO 3:  
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
aumento. Deberá demostrar los datos del empleado y el aumento salarial. 
*/

document.getElementById("calcular-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const salary = parseFloat(document.getElementById("salary").value);
  const result = document.getElementById("resultado");
  
  let growthResult = 0;
  switch (category) {
    case 'A':
      growthResult = salary + ( salary * 0.15 );
      break;
    case 'B':
      growthResult = salary + ( salary * 0.30 );
      break;
    case 'C':
      growthResult = salary + ( salary * 0.10 );
      break;  
    default:
      growthResult = salary + ( salary * 0.20 );
      break;
  }
  result.textContent = `El empleado ${name} de categoria ${category} su compensacion final sera de ${growthResult}`;

})