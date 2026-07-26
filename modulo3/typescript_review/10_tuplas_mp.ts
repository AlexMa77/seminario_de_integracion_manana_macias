type RegistroAcademico = [string, number, number];

const registroJuan: RegistroAcademico = ["Matemáticas", 8.5, 1];
const registroAna: RegistroAcademico = ["Literatura", 10, 2];
const [materia, calificacion, semestre] = registroJuan;

console.log(`En el semestre ${semestre}, Juan obtuvo ${calificacion} en ${materia}.`);
const historialPedro: RegistroAcademico[] = [
    ["Física", 7.8, 1],
    ["Química", 9.0, 1],
    ["Biología", 8.2, 2]
];

console.log("Historial de Pedro:");
historialPedro.forEach(registro => {
    console.log(`- Semestre ${registro[2]}: ${registro[0]} (${registro[1]})`);
});
