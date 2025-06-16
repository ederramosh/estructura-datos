document.getElementById("calcular-btn").addEventListener("click", () => {
  const input = document.getElementById("numero");
  const result = document.getElementById("resultado");
  const msg = document.getElementById("mensaje");
  const celsius = parseInt(input.value);
  let messageEvaluated;

  if (isNaN(celsius)) {
    result.textContent = "";
    msg.textContent = "Por favor ingresa un número válido.";
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;

  switch (true) {
    case (fahrenheit >= 14 && fahrenheit < 32):
      messageEvaluated = "Temperatura baja";
      break;
    case (fahrenheit >= 32 && fahrenheit < 68):
      messageEvaluated = "Temperatura adecuada";
      break;
    case (fahrenheit >= 68 && fahrenheit <= 96):
      messageEvaluated = "Temperatura alta";
      break;
    default:
      messageEvaluated = "Temperatura desconocida";
  }

  msg.textContent = messageEvaluated;
  result.textContent = `La temperatura en Fahrenheit es de: ${fahrenheit.toFixed(2)}°F`;
});
