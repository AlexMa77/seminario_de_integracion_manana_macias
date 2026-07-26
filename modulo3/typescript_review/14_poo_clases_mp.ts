
class CursoEscolar {
    codigo: string;
    nombreMateria: string;
    creditos: number;

    constructor(codigo: string, nombreMateria: string, creditos: number) {
        this.codigo = codigo;
        this.nombreMateria = nombreMateria;
        this.creditos = creditos;
    }

    obtenerDetalles(): string {
        return `El curso ${this.nombreMateria} (${this.codigo}) otorga ${this.creditos} créditos académicos.`;
    }
}

const biologia = new CursoEscolar("BIO-101", "Biología Celular", 4);
const arte = new CursoEscolar("ART-102", "Historia del Arte", 2);

console.log(biologia.obtenerDetalles());
console.log(arte.obtenerDetalles());
