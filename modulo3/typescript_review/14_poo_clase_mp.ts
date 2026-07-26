
class Alumno {
    matricula: string;
    nombre: string;
    grado: string;

    constructor(matricula: string, nombre: string, grado: string) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.grado = grado;
    }

    mostrarInformacion(): void {
        console.log(`Alumno: ${this.nombre} | Matrícula: ${this.matricula} | Grado: ${this.grado}`);
    }
}

const alumnoNuevo = new Alumno("A-100", "Pedro Sanchez", "3ro Secundaria");
alumnoNuevo.mostrarInformacion();
