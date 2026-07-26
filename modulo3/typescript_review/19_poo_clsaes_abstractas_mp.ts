
abstract class TareaAcademica {
    constructor(public titulo: string, public fechaEntrega: Date) {}

    abstract evaluar(nota: number): void;
    
    mostrarDetalles(): void {
        console.log(`Tarea: ${this.titulo} | Entrega: ${this.fechaEntrega.toLocaleDateString()}`);
    }
}

class ProyectoFinal extends TareaAcademica {
    evaluar(nota: number): void {
        console.log(`Evaluando el proyecto '${this.titulo}'. Nota asignada: ${nota}. ¡Impacta mucho en el promedio!`);
    }
}

const proyecto = new ProyectoFinal("Sistema de Inventario para Biblioteca", new Date("2024-12-01"));
proyecto.mostrarDetalles();
proyecto.evaluar(9.5);
