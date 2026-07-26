type Calificacion = number | "A" | "B" | "C" | "D" | "F";

function mostrarCalificacion(nota: Calificacion): void {
    if (typeof nota === "number") {
        console.log(`La nota numérica es: ${nota}`);
    } else {
        console.log(`La calificación literal es: ${nota}`);
    }
}

mostrarCalificacion(9.5);
mostrarCalificacion("A");
type TurnoEscolar = "Matutino" | "Vespertino" | "Nocturno";

function asignarTurno(alumno: string, turno: TurnoEscolar): string {
    return `El alumno ${alumno} asistirá en el turno ${turno}`;
}

console.log(asignarTurno("Maria", "Matutino"));
