/*
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
aplicara en base a lo que selecciono el usuario. 

*/

document.getElementById("procesar-btn").addEventListener("click", () => {
  const brand = document.getElementById("car-brand").value;
  const result = document.getElementById("descuento-label");
  let discount = "";

  switch (brand) {
    case "fordFiesta":
      discount = "Ford Fiesta: 5% de descuento por su alta confiabilidad.";
      break;
    case "fordFocus":
      discount = "Ford Focus: 10% de descuento en modelos seleccionados.";
      break;
    case "fordEscape":
      discount = "Ford Escape: 20% de descuento en SUV premium.";
      break;
    default:
      discount = "Por favor selecciona una marca válida.";
  }

  result.textContent = discount;
});
