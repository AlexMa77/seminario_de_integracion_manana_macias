
type Profesor = {
    id: number;
    nombre: string;
    departamento: string;
    aniosExperiencia: number;
};

const claustroDocente: Profesor[] = [
    {
        id: 1,
        nombre: "Dra. Elena Ruiz",
        departamento: "Ciencias",
        aniosExperiencia: 15
    },
    {
        id: 2,
        nombre: "Lic. Carlos Vega",
        departamento: "Humanidades",
        aniosExperiencia: 5
    },
    {
        id: 3,
        nombre: "Ing. Marcos Paz",
        departamento: "Matemáticas",
        aniosExperiencia: 8
    }
];
const profesorMatematicas = claustroDocente.find(prof => prof.departamento === "Matemáticas");
console.log("Profesor de Matemáticas:", profesorMatematicas?.nombre);
const profesoresExperimentados = claustroDocente.filter(prof => prof.aniosExperiencia > 10);
console.log("Profesores con más de 10 años de experiencia:");
profesoresExperimentados.forEach(prof => {
    console.log(`- ${prof.nombre} (${prof.departamento})`);
});
