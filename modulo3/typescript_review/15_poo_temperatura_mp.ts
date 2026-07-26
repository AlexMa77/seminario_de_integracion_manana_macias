class ConvertidorCalificaciones {
    static porcentajeAPuntos(porcentaje: number): number {
        if (porcentaje < 60) return 0.0;
        if (porcentaje >= 90) return 4.0;
        if (porcentaje >= 80) return 3.0;
        if (porcentaje >= 70) return 2.0;
        return 1.0;
    }
}

const notaFinal = 85;
const gpa = ConvertidorCalificaciones.porcentajeAPuntos(notaFinal);
console.log(`Un porcentaje de ${notaFinal}% equivale a un GPA de ${gpa}`);
