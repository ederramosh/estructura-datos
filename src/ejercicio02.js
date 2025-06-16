/*
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende 
de lo siguiente:  
• Examen =20% 
• tareas = 40% 
• asistencia = 10% 
• investigación = 30% 
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. 
*/



export const checkGrade = (studentInformation) => {

  const { name, id, test, homework, attendance, researchGrade } = studentInformation;
  const finalGrade = (test * 0.20 ) + (homework * 0.40 ) + (attendance * 0.10 ) + (researchGrade * 0.30 );
  console.log(`El alumno ${name} con carnet ${id} tiene como nota final: ${finalGrade}`);
  
}