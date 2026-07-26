let configuracionSistema: any = "Modo Mantenimiento";
console.log("Configuración actual:", configuracionSistema);

configuracionSistema = {
    activo: true,
    version: "2.1",
    modulosAbiertos: ["Matrículas", "Calificaciones"]
};
console.log("Configuración actualizada (objeto):", configuracionSistema);

configuracionSistema = 2024;
console.log("Año de ciclo actual:", configuracionSistema);
let registroVariado: any[] = ["Juan", 15, true, { curso: "Historia" }];
console.log("Registro de datos sin tipado fuerte:", registroVariado);
