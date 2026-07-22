# abstraccion_mp.py
from abc import ABC, abstractmethod

# ABC (Abstract Base Class): clase abstracta que no puede instanciarse
class ServicioAcademico(ABC):
    def __init__(self, responsable="secretaria"):
        self.responsable = responsable

    # Metodo abstracto: CADA subclase DEBE implementarlo
    @abstractmethod
    def costo(self) -> float:
        pass

    @abstractmethod
    def tiempo_estimado(self) -> float:
        pass

    # Metodo concreto: compartido por todos los servicios
    def describir(self) -> str:
        return (f"{self.__class__.__name__} atendido por {self.responsable}: "
                f"costo={self.costo():.2f}, dias={self.tiempo_estimado():.2f}")

# ServicioAcademico()  # TypeError, no puede instanciarse

class Matricula(ServicioAcademico):
    def __init__(self, creditos, responsable="secretaria"):
        super().__init__(responsable)
        self.creditos = creditos

    def costo(self):
        return self.creditos * 15

    def tiempo_estimado(self):
        return 1

class Certificado(ServicioAcademico):
    def __init__(self, hojas, responsable="secretaria"):
        super().__init__(responsable)
        self.hojas = hojas

    def costo(self):
        return self.hojas * 2

    def tiempo_estimado(self):
        return 2

class SolicitudBeca(ServicioAcademico):
    def __init__(self, documentos, entrevistas, revision, responsable="bienestar"):
        super().__init__(responsable)
        self.documentos, self.entrevistas, self.revision = documentos, entrevistas, revision

    def tiempo_estimado(self):
        return self.documentos + self.entrevistas + self.revision

    def costo(self):
        return 0

# Polimorfismo: mismo codigo para cualquier ServicioAcademico
servicios = [Matricula(5, "Ana"), Certificado(3, "Luis"), SolicitudBeca(2, 1, 5, "Marta")]

for servicio in servicios:
    print(servicio.describir())

costo_total = sum(s.costo() for s in servicios)
print(f"Costo total: {costo_total:.2f}")
