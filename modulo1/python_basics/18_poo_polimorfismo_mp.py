# polimorfismo_mp.py

# POLIMORFISMO POR HERENCIA: override de metodos
class NotificacionAcademica:
    """Clase base abstracta."""
    def __init__(self, destinatario, mensaje):
        self.destinatario = destinatario
        self.mensaje = mensaje

    def enviar(self):
        raise NotImplementedError("Las subclases deben implementar enviar()")

    def __str__(self):
        return f"{self.__class__.__name__} -> {self.destinatario}"

class NotificacionEmail(NotificacionAcademica):
    def __init__(self, destinatario, mensaje, asunto="Sin asunto"):
        super().__init__(destinatario, mensaje)
        self.asunto = asunto

    def enviar(self):
        return f"Email a {self.destinatario}: [{self.asunto}] {self.mensaje}"

class NotificacionSMS(NotificacionAcademica):
    MAX_CHARS = 160

    def enviar(self):
        msg = self.mensaje[:self.MAX_CHARS]
        return f"SMS a {self.destinatario}: {msg}"

class NotificacionPush(NotificacionAcademica):
    def enviar(self):
        return f"Push a {self.destinatario}: {self.mensaje[:50]}..."

class NotificacionAulaVirtual(NotificacionAcademica):
    def __init__(self, aula, mensaje):
        super().__init__(aula, mensaje)

    def enviar(self):
        return f"Aula virtual #{self.destinatario}: {self.mensaje}"

# Polimorfismo en accion: misma funcion, distintos tipos
def notificar_todos(notificaciones: list):
    for notif in notificaciones:
        print(f"  {notif.enviar()}")   # cada uno envia a su manera

alertas = [
    NotificacionEmail("ana@institucion.edu", "Tu matricula fue aprobada", "Matricula #1234"),
    NotificacionSMS("099111222", "Recuerda pagar la pension"),
    NotificacionPush("dispositivo-abc", "Nueva nota registrada"),
    NotificacionAulaVirtual("programacion", "Tarea publicada, revisar urgente"),
]

print("Enviando notificaciones:")
notificar_todos(alertas)

# POLIMORFISMO DUCK TYPING: sin herencia
# Si un objeto tiene leer() y escribir(), esta funcion puede usarlo
class ArchivoLocal:
    def leer(self): return "datos academicos desde disco local"
    def escribir(self, datos): print(f"Guardando en disco: {datos[:30]}...")

class ArchivoNube:
    def leer(self): return "datos academicos desde la nube"
    def escribir(self, datos): print(f"Subiendo a la nube: {datos[:30]}...")

class ArchivoBD:
    def leer(self): return "datos academicos desde base de datos"
    def escribir(self, datos): print(f"Insertando en BD: {datos[:30]}...")

# Esta funcion funciona con CUALQUIER objeto que tenga leer() y escribir()
def procesar_archivo(archivo):
    contenido = archivo.leer()
    print(f"Procesando: {contenido}")
    archivo.escribir(f"resultado_{contenido}")

for archivo in [ArchivoLocal(), ArchivoNube(), ArchivoBD()]:
    procesar_archivo(archivo)
