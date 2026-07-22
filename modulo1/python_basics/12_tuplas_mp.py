# tuplas_mp.py

# Crear tuplas
vacia = ()
unitaria = (42,)              # la coma es obligatoria para una tupla de un elemento
aula = ("A-101", 30)
rgb = (10, 120, 200)
estudiante = ("Ana", 28, "Quito")

# Tupla sin parentesis: el empaquetado implicito
punto = 10, 20               # tambien es una tupla
print(type(punto))           # <class 'tuple'>

# Acceso: igual que las listas
print(estudiante[0])         # Ana
print(estudiante[-1])        # Quito
print(estudiante[1:])        # (28, 'Quito')

# Las tuplas son INMUTABLES
# estudiante[0] = "Luis"     # TypeError, no se puede modificar

# Desempaquetado (unpacking)
nombre, edad, ciudad = estudiante
print(nombre, edad, ciudad)  # Ana 28 Quito

# Desempaquetado con *
primero, *resto = (1, 2, 3, 4, 5)
print(primero)   # 1
print(resto)     # [2, 3, 4, 5]

*inicio, ultimo = (1, 2, 3, 4, 5)
print(inicio)    # [1, 2, 3, 4]
print(ultimo)    # 5

# Tuplas de retorno de funciones
def calcular_promedio(total_notas, cantidad_notas):
    if cantidad_notas == 0:
        return None, "No hay notas registradas"
    return total_notas / cantidad_notas, None

resultado, error = calcular_promedio(85, 10)
if error:
    print(f"Error: {error}")
else:
    print(f"Promedio: {resultado:.4f}")

# Tuplas como claves de diccionario (las listas NO pueden ser claves)
aulas = {("A", 101): "Matematica", ("B", 202): "Programacion", ("C", 303): "Ingles"}
print(aulas[("A", 101)])     # Matematica

# Cuando usar tuple vs list
# tuple -> datos que no cambian: codigo de aula, coordenadas, registros de BD
# list  -> datos que se modifican: coleccion de estudiantes, cursos, etc.
