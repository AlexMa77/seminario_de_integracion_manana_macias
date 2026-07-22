# diccionarios_mp.py

# Crear diccionarios
vacio = {}
estudiante = {"nombre": "Ana", "edad": 28, "ciudad": "Quito"}
config = dict(host="localhost", puerto=5432, debug=True)

# Acceso
print(estudiante["nombre"])                 # Ana
print(estudiante.get("email"))              # None, no lanza error si no existe
print(estudiante.get("email", "N/A"))       # N/A, valor por defecto

# Modificar
estudiante["email"] = "ana@institucion.edu" # anadir/modificar
estudiante["edad"] = 29                     # modificar
del estudiante["ciudad"]                    # eliminar
valor = estudiante.pop("email")             # eliminar y obtener el valor
print(estudiante)

# Verificar existencia
print("nombre" in estudiante)               # True
print("ciudad" in estudiante)               # False

# Metodos esenciales
print(estudiante.keys())    # dict_keys(['nombre', 'edad'])
print(estudiante.values())  # dict_values(['Ana', 29])
print(estudiante.items())   # dict_items([('nombre', 'Ana'), ('edad', 29)])

# Iterar
for clave, valor in estudiante.items():
    print(f"  {clave}: {valor}")

# update: fusionar diccionarios
estudiante.update({"ciudad": "Guayaquil", "telefono": "099111222"})
print(estudiante)

# Fusionar con | (Python 3.9+)
extra = {"curso": "Programacion", "activo": True}
completo = estudiante | extra
print(completo)

# Diccionarios anidados
institucion = {
    "nombre": "Instituto Central",
    "estudiantes": {
        1: {"nombre": "Ana", "curso": "programacion"},
        2: {"nombre": "Luis", "curso": "matematica"},
    },
    "sedes": ["Quito", "Guayaquil"]
}

print(institucion["estudiantes"][1]["nombre"])   # Ana
institucion["estudiantes"][3] = {"nombre": "Marta", "curso": "ingles"}

# setdefault: anadir solo si no existe
estudiante.setdefault("pais", "Ecuador")         # anade "pais"
estudiante.setdefault("nombre", "Otro")          # no modifica, ya existe
