abstract class EmpleadoInstitucion {
    constructor(public nombre: string, public identificacion: string) {}
    registrarIngreso(): void {
        console.log(`[Registro] El empleado ${this.nombre} (${this.identificacion}) ha ingresado al plantel.`);
    }
    abstract calcularSalarioMensual(): number;
}

class ProfesorContratado extends EmpleadoInstitucion {
    constructor(nombre: string, identificacion: string, public horasTrabajadas: number, public pagoPorHora: number) {
        super(nombre, identificacion);
    }

    calcularSalarioMensual(): number {
        return this.horasTrabajadas * this.pagoPorHora;
    }
}

class PersonalAdministrativo extends EmpleadoInstitucion {
    constructor(nombre: string, identificacion: string, public salarioBase: number) {
        super(nombre, identificacion);
    }

    calcularSalarioMensual(): number {
        return this.salarioBase;
    }
}

const profe = new ProfesorContratado("Luis Torres", "EMP-101", 120, 150);
const admin = new PersonalAdministrativo("Sofia Vera", "EMP-205", 25000);

profe.registrarIngreso();
console.log(`Salario del profesor: $${profe.calcularSalarioMensual()}`);

admin.registrarIngreso();
console.log(`Salario del administrativo: $${admin.calcularSalarioMensual()}`);
