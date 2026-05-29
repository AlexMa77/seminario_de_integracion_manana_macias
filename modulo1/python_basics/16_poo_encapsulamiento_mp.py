# encapsulamiento_mp.py

class CuentaEstudiante:
    def __init__(self, titular, saldo_inicial=0):
        self.titular = titular
        self.__saldo = saldo_inicial      # __ -> privado (name mangling)
        self.__historial = []
        self.__activa = True
        self.__registrar(f"Cuenta academica creada con {saldo_inicial}")

    # Property: getter (acceso como atributo, no como metodo)
    @property
    def saldo(self):
        return self.__saldo

    @property
    def activa(self):
        return self.__activa

    @property
    def historial(self):
        return list(self.__historial)     # devuelve copia, no referencia

    # Metodo publico: la "ventanilla"
    def pagar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        self.__saldo += cantidad
        self.__registrar(f"Pago registrado: +{cantidad}")
        return self

    def descontar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        if cantidad > self.__saldo:
            raise ValueError(f"Saldo insuficiente (disponible: {self.__saldo})")
        self.__saldo -= cantidad
        self.__registrar(f"Descuento aplicado: -{cantidad}")
        return self

    def transferir_saldo(self, destino, cantidad):
        self.descontar(cantidad)
        destino.pagar(cantidad)
        self.__registrar(f"Transferencia a {destino.titular}: -{cantidad}")
        return self

    # Metodo privado: solo para uso interno
    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"CuentaEstudiante({self.titular}: {self.__saldo})"

# Uso
c1 = CuentaEstudiante("Ana Garcia", 1000)
c2 = CuentaEstudiante("Luis Perez", 500)

c1.pagar(500).descontar(200)     # encadenamiento, pagar y descontar devuelven self
c1.transferir_saldo(c2, 300)

print(c1)    # CuentaEstudiante(Ana Garcia: 1000)
print(c2)    # CuentaEstudiante(Luis Perez: 800)
print(f"Saldo Ana: {c1.saldo}")   # acceso como atributo (property)

# c1.__saldo = 99999  # AttributeError, acceso directo denegado
# c1.saldo = 99999    # AttributeError, no hay setter

for entrada in c1.historial:
    print(f"  {entrada}")
