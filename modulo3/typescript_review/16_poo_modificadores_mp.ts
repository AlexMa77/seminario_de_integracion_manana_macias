
class ExpedienteAcademico {
    public idEstudiante: string;
    private promedioSecreto: number;
    protected estadoDisciplinario: string;

    constructor(idEstudiante: string, promedioInicial: number) {
        this.idEstudiante = idEstudiante;
        this.promedioSecreto = promedioInicial;
        this.estadoDisciplinario = "Excelente";
    }

    public actualizarPromedio(nuevoPromedio: number): void {
        if (nuevoPromedio >= 0 && nuevoPromedio <= 10) {
            this.promedioSecreto = nuevoPromedio;
            console.log(`Promedio actualizado con éxito.`);
        } else {
            console.log("Error: El promedio debe estar entre 0 y 10.");
        }
    }

    public verResumen(): string {
        return `Estudiante: ${this.idEstudiante} | Promedio: ${this.promedioSecreto}`;
    }
}

const expediente = new ExpedienteAcademico("EST-001", 8.5);
console.log(expediente.verResumen());
expediente.actualizarPromedio(9.2);
console.log(expediente.verResumen());
