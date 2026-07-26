class MiembroEscolar {
    constructor(public nombre: string, public correo: string) {}

    presentarse(): void {
        console.log(`Hola, soy ${this.nombre} y mi correo es ${this.correo}.`);
    }
}
class Docente extends MiembroEscolar {
    constructor(nombre: string, correo: string, public materia: string) {
        super(nombre, correo);
    }

    dictarClase(): void {
        console.log(`Iniciando la clase de ${this.materia}...`);
    }
}

const profeLopez = new Docente("Prof. Lopez", "lopez@escuela.edu", "Historia Universal");
profeLopez.presentarse();
profeLopez.dictarClase();
