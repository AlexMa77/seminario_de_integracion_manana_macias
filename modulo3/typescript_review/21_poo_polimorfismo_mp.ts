
class RecursoEducativo {
    constructor(public titulo: string) {}

    usarRecurso(): void {
        console.log(`Usando el recurso educativo: ${this.titulo}`);
    }
}

class LibroTexto extends RecursoEducativo {
    usarRecurso(): void {
        console.log(`Leyendo el libro de texto: ${this.titulo}. Por favor, no raye las páginas.`);
    }
}

class VideoClase extends RecursoEducativo {
    usarRecurso(): void {
        console.log(`Reproduciendo la video clase: ${this.titulo}. Ajuste el volumen adecuadamente.`);
    }
}

class SimuladorVirtual extends RecursoEducativo {
    usarRecurso(): void {
        console.log(`Iniciando el simulador interactivo: ${this.titulo}. Asegúrese de tener conexión a internet.`);
    }
}
function iniciarClase(recursos: RecursoEducativo[]): void {
    console.log("--- Iniciando sesión de estudio ---");
    for (const recurso of recursos) {
        recurso.usarRecurso();
    }
}

const misRecursos = [
    new LibroTexto("Álgebra de Baldor"),
    new VideoClase("Introducción a la Química Orgánica"),
    new SimuladorVirtual("Laboratorio de Física de Partículas")
];

iniciarClase(misRecursos);
