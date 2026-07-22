# Enteros, Cadena de caracteres, Booleanos, None

nombre = "Ana Garcia"        # String
edad = 19                    # Entero
promedio = 9.25              # Float
matriculado = True           # Booleano
nulo = None                  # NoneType

print(type(nombre))
print(type(edad))
print(type(promedio))
print(type(matriculado))
print(type(nulo))

# Asignar valor a varias variables en una linea
paralelo_a, paralelo_b, paralelo_c = 28, 31, 25
print(paralelo_a)
print(paralelo_b)
print(paralelo_c)

# Asignar el mismo valor a varias variables
paralelo_a = paralelo_b = paralelo_c = 0
print(paralelo_a)
print(paralelo_b)
print(paralelo_c)

# Intercambiar valores
cupos_disponibles, estudiantes_matriculados = 10, 20
print(cupos_disponibles, estudiantes_matriculados)
cupos_disponibles, estudiantes_matriculados = estudiantes_matriculados, cupos_disponibles
print(cupos_disponibles, estudiantes_matriculados)

# Conversiones de nombres
nombre_completo = "Alex Macias"       # Snake_case
nombreCompleto = "Alex Macias"        # NO USAR camelCase
MAX_ESTUDIANTES = 35                  # MAYUSCULAS SOSTENIDA para Constantes
_codigo_interno = "EDU-001"           # para uso interno

# Manejo de enteros
pequeno = 42
negativo = -17
grande = 1_000_000_000_000
enorme = 2**100

print(pequeno)
print(negativo)
print(grande)
print(enorme)

# Bases Numericas
binario = 0b1010
octal = 0o17
hexadecimal = 0xFF

print(binario, octal, hexadecimal)

# Convertir de decimal a otras bases
print(bin(255))
print(oct(255))
print(hex(255))
