# herencia_mp.py

class PersonaInstitucion:
    def __init__(self, nombre, identificacion, anio_ingreso):
        self.nombre = nombre
        self.identificacion = identificacion
        self.anio_ingreso = anio_ingreso
        self._estado = "activo"    # _ -> convencion "protegido"

    def activar(self):
        self._estado = "activo"
        return self

    def suspender(self):
        self._estado = "suspendido"
        return self

    def __str__(self):
        return f"{self.nombre} ({self.identificacion}) - {self.anio_ingreso} - {self._estado}"

class Estudiante(PersonaInstitucion):
    def __init__(self, nombre, identificacion, anio_ingreso, paralelo="A"):
        super().__init__(nombre, identificacion, anio_ingreso)   # llama al constructor del padre
        self.paralelo = paralelo

    def solicitar_certificado(self):
        return f"{self.nombre}: certificado solicitado"

    def __str__(self):
        return f"{super().__str__()} (paralelo {self.paralelo})"

class Docente(PersonaInstitucion):
    def __init__(self, nombre, identificacion, anio_ingreso, especialidad):
        super().__init__(nombre, identificacion, anio_ingreso)
        self.especialidad = especialidad

    def registrar_nota(self):
        return f"{self.nombre} registro una nota"

    def __str__(self):
        return f"{super().__str__()} ({self.especialidad})"

class Becario(Estudiante):
    def __init__(self, nombre, identificacion, anio_ingreso, beca):
        super().__init__(nombre, identificacion, anio_ingreso)
        self.__beca = beca
        self.__porcentaje = 100

    def renovar_beca(self, porcentaje=100):
        self.__porcentaje = min(100, self.__porcentaje + porcentaje)
        return self

    @property
    def beca_restante(self):
        return self.__beca * self.__porcentaje / 100

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Beca: {self.__porcentaje}% | "
                f"Monto disponible: {self.beca_restante:.0f}")

# Herencia: cada objeto es tambien de todos sus tipos padre
ana = Becario("Ana Torres", "EST-001", 2024, 500)
ana.suspender()
print(ana)

print(isinstance(ana, Becario))              # True
print(isinstance(ana, Estudiante))           # True, herencia
print(isinstance(ana, PersonaInstitucion))   # True, herencia transitiva
print(isinstance(ana, Docente))              # False

# MRO: Method Resolution Order
print(Becario.__mro__)
