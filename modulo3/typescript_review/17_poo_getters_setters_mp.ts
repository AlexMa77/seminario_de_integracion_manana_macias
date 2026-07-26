
class CuotaEscolar {
    private _montoBase: number;
    private _descuentoPorcentaje: number = 0;

    constructor(montoBase: number) {
        this._montoBase = montoBase;
    }
    get montoFinal(): number {
        const descuento = this._montoBase * (this._descuentoPorcentaje / 100);
        return this._montoBase - descuento;
    }
    set descuentoBeca(porcentaje: number) {
        if (porcentaje >= 0 && porcentaje <= 100) {
            this._descuentoPorcentaje = porcentaje;
        } else {
            throw new Error("El porcentaje de beca debe estar entre 0 y 100.");
        }
    }
}

const cuotaJuan = new CuotaEscolar(500);
console.log("Monto a pagar sin beca: $", cuotaJuan.montoFinal);

cuotaJuan.descuentoBeca = 25;
console.log("Monto a pagar con 25% de beca: $", cuotaJuan.montoFinal);
