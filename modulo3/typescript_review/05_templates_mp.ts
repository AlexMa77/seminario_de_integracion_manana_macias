export {};

const profesor: string = "Dr. Roberto Sanchez";
const materiaClase: string = "Física Cuántica";
const aula: string = "Laboratorio 3";
const horario: string = "10:00 AM - 12:00 PM";
const reporteClase: string = `
========================================
      REPORTE DE ASIGNACIÓN CLASE
========================================
Profesor a cargo: ${profesor}
Asignatura: ${materiaClase}
Ubicación: ${aula}
Horario: ${horario}
Estado de la clase: ${true ? 'Confirmada' : 'Pendiente'}
========================================
`;

console.log(reporteClase);
