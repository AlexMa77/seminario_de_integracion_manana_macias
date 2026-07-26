const listaAulas: string[] = ["A101", "A102", "B201", "B202", "Laboratorio"];
const calificacionesExamen: number[] = [95, 80, 75, 100, 60, 88];
const asistencias: boolean[] = [true, true, false, true, true];

console.log("Aulas disponibles:", listaAulas);
listaAulas.push("Auditorio");
console.log("Aulas actualizadas:", listaAulas);
const calificacionesExcelentes = calificacionesExamen.filter(nota => nota >= 90);
console.log("Calificaciones excelentes:", calificacionesExcelentes);
