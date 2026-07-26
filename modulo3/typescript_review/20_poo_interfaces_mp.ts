interface ICursoEvaluable {
    nombreCurso: string;
    profesorTitular: string;
    calcularPromedioCurso(notasEstudiantes: number[]): number;
}

class CursoProgramacion implements ICursoEvaluable {
    nombreCurso: string;
    profesorTitular: string;

    constructor(nombre: string, profesor: string) {
        this.nombreCurso = nombre;
        this.profesorTitular = profesor;
    }

    calcularPromedioCurso(notasEstudiantes: number[]): number {
        if (notasEstudiantes.length === 0) return 0;
        const suma = notasEstudiantes.reduce((a, b) => a + b, 0);
        return suma / notasEstudiantes.length;
    }
}

const cursoTS = new CursoProgramacion("TypeScript Avanzado", "Ing. Alan Turing");
const notasDelGrupo = [10, 8, 9, 7, 10];
const promedioDelCurso = cursoTS.calcularPromedioCurso(notasDelGrupo);

console.log(`El curso ${cursoTS.nombreCurso} impartido por ${cursoTS.profesorTitular} tiene un promedio general de ${promedioDelCurso}.`);
