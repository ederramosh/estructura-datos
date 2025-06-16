/*
EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando 
en cuenta lo siguiente:  
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%. 
*/

document.getElementById("procesar-btn").addEventListener("click", () => {
  const destiny = document.getElementById("destiny").value;
  const result = document.getElementById("descuento-label");
  let discount = "";

  switch (destiny) {
    case "costaDelSol":
      discount = "Costa del Sol: 5% de descuento, vamos a distrutar las playas.";
      break;
    case "panchimalco":
      discount = "Panchimalco: 10% de descuento para vistar los pueblos vivos.";
      break;
    case "puertoElTriunfo":
      discount = "Puerto el Triunfo: 20% de descuento, conozcamos el puerto de La Unión.";
      break;
    default:
      discount = "Por favor selecciona una opción válida.";
  }

  result.textContent = discount;
});
