class PersonaComunidad {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    entrarAlCampus(): void {
        console.log(`${this.nombre} ha ingresado al campus de la institución.`);
    }
}
class EstudianteMatriculado extends PersonaComunidad {
    grado: string;

    constructor(nombre: string, grado: string) {
        super(nombre);
        this.grado = grado;
    }

    estudiar(): void {
        console.log(`${this.nombre} está estudiando para sus materias de ${this.grado}.`);
    }
}

const estudiante1 = new EstudianteMatriculado("Lucia", "1er Año de Secundaria");
estudiante1.entrarAlCampus();
estudiante1.estudiar();
