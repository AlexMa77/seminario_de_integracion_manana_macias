print("Ciclo for")
cursos = ["matematica", "lenguaje", "programacion", "ingles"]
for curso in cursos:
    print(curso)

print("Recorrer palabras")
for letra in "curso":
    print(letra)

print("Recorrer rango")
for i in range(1, 10, 2):
    print(i)

print("Enumerar lista")
for i in enumerate(cursos):
    print(i)

print("Dos listas a la vez")
nombres = ["Maria", "Jose", "Luis"]
edades = [18, 24]
for nombre, edad in zip(nombres, edades):
    print(nombre, edad)

print("Control del Ciclo")
print("Break")
for i in range(5):
    if i == 6:
        break
    print(i)

print("Continue")
for i in range(5):
    if i == 2:
        continue
    print(i)

print("For anidado")
for i in range(3):
    for j in range(2):
        print(i, j)

print("Lista comprehension forma corta")
notas_cuadradas = [x**2 for x in range(5)]
print(notas_cuadradas)
