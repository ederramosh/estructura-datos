/*
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo.  
*/
document.getElementById("calcular-btn").addEventListener("click", () => {
    const primerNumero = parseInt(document.getElementById("primerNumero").value);
    const segundoNumero = parseInt(document.getElementById("segundoNumero").value);
    const result = document.getElementById("resultado");
    let evaluation;

    if( primerNumero >= segundoNumero ) {
        evaluation = `El valor de ${primerNumero} es mayor que ${segundoNumero}`;
    } else {
        evaluation = `El valor de ${segundoNumero} es mayor que ${primerNumero}`;
    }

    result.textContent = evaluation;
});