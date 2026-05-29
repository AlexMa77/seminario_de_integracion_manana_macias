# primera-clase_mp.py

class Estudiante:
    # Atributo de clase: compartido por TODAS las instancias
    institucion = "Institucion Educativa Central"

    # __init__ es el constructor, se ejecuta al crear la instancia
    def __init__(self, nombre, edad):
        # Atributos de instancia, propios de cada objeto
        self.nombre = nombre
        self.edad = edad

    # Metodo de instancia, self es la referencia al objeto
    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} anios."

    def cumplir_anios(self):
        self.edad += 1
        print(f"Feliz cumpleanios, {self.nombre}! Ahora tienes {self.edad}.")

    # __str__: representacion legible (para print y str())
    def __str__(self):
        return f"Estudiante({self.nombre}, {self.edad})"

    # __repr__: representacion oficial (para depuracion)
    def __repr__(self):
        return f"Estudiante(nombre={self.nombre!r}, edad={self.edad!r})"

# Crear instancias (objetos) con la clase como funcion
ana = Estudiante("Ana Garcia", 28)
luis = Estudiante("Luis Perez", 31)

print(ana.saludar())          # Hola, soy Ana Garcia y tengo 28 anios.
print(luis.saludar())         # Hola, soy Luis Perez y tengo 31 anios.
ana.cumplir_anios()           # Feliz cumpleanios, Ana Garcia! Ahora tienes 29.
print(str(ana))               # Estudiante(Ana Garcia, 29)
print(repr(ana))              # Estudiante(nombre='Ana Garcia', edad=29)
print(Estudiante.institucion) # Institucion Educativa Central
