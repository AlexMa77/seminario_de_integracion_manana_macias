
function calcularPromedio(notas: number[]): number {
    if (notas.length === 0) return 0;
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
}

function evaluarAprobacion(promedio: number, minimoAprobatorio: number = 7): string {
    if (promedio >= minimoAprobatorio) {
        return `Aprobado con promedio de ${promedio.toFixed(2)}`;
    } else {
        return `Reprobado. Se requiere ${minimoAprobatorio}, pero obtuvo ${promedio.toFixed(2)}`;
    }
}

const notasAlumno1: number[] = [8, 9, 7, 10, 6];
const promedio1 = calcularPromedio(notasAlumno1);
console.log("Evaluación Alumno 1:", evaluarAprobacion(promedio1));

const notasAlumno2: number[] = [5, 6, 7, 4, 5];
const promedio2 = calcularPromedio(notasAlumno2);
console.log("Evaluación Alumno 2:", evaluarAprobacion(promedio2));
