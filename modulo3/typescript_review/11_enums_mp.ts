enum RolUsuario {
    Administrador = "ADMIN",
    Profesor = "PROFESOR",
    Estudiante = "ESTUDIANTE",
    PersonalApoyo = "APOYO"
}

enum NivelEducativo {
    Preescolar = 1,
    Primaria = 2,
    Secundaria = 3,
    Bachillerato = 4
}

function asignarRol(usuarioId: string, rol: RolUsuario): string {
    return `Se ha asignado el rol ${rol} al usuario ${usuarioId}`;
}

console.log(asignarRol("USR-123", RolUsuario.Profesor));
console.log(`Nivel de Bachillerato corresponde al código: ${NivelEducativo.Bachillerato}`);
