type ID = string | number;

type Estudiante = {
    id: ID;
    nombre: string;
    apellido: string;
    edad: number;
    activo: boolean;
    fechaInscripcion?: Date;
};

const nuevoEstudiante: Estudiante = {
    id: "EST-2023-998",
    nombre: "Ana",
    apellido: "Martinez",
    edad: 15,
    activo: true
};

const estudianteTransferido: Estudiante = {
    id: 10293,
    nombre: "Luis",
    apellido: "Gomez",
    edad: 17,
    activo: true,
    fechaInscripcion: new Date("2023-08-15")
};

console.log("Nuevo estudiante registrado:", nuevoEstudiante);
console.log("Estudiante transferido:", estudianteTransferido);
