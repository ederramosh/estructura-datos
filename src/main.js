import { checkGrade } from './ejercicio02';
import { checkGrowth } from './ejercicio03';
import { checkMax } from './ejercicio04';

//Ejercicio 2
const studentInformation = {
  name: 'Eder Ramos',
  id: 'er10040161',
  test : 7.0,
  homework : 8.0,
  attendance : 9.0,
  researchGrade : 10.,
}
checkGrade(studentInformation);

//Ejercicio 3
const employeeInformation = {
  name: 'Eder Ramos',
  salary: 2500.00,
  category: 'B'
}
checkGrowth(employeeInformation);

//Ejercicio 4
checkMax(10, 5)