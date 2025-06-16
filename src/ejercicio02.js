/*
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende 
de lo siguiente:  
• Examen =20% 
• tareas = 40% 
• asistencia = 10% 
• investigación = 30% 
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. 
*/


document.getElementById("calcular-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const carne = document.getElementById("carne").value;
  const test = parseInt(document.getElementById("test").value);
  const homework = parseInt(document.getElementById("homework").value);
  const attendance = parseInt(document.getElementById("attendance").value);
  const researchGrade = parseInt(document.getElementById("researchGrade").value);
  const result = document.getElementById("resultado");
  
  const finalGrade = (test * 0.20 ) + (homework * 0.40 ) + (attendance * 0.10 ) + (researchGrade * 0.30 );
  
  result.textContent = `${name} con carnet ${carne} tiene una notal final de ${finalGrade}`
})
