/*
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo.  
*/

export const checkMax = (a, b) => {
    if( a >= b ) {
        console.log(`El valor de ${a} es mayor que ${b}`);
    } else {
        console.log(`El valor de ${b} es mayor que ${a}`);
    }
}