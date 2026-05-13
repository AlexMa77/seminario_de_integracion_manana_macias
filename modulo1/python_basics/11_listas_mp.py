print("Listas")
print("Crear listas")
vacia = []
print(vacia)
codigos = [1, 2, 3, 4, 5, 6, 7]
print(codigos)
nombres = ["Juan", "Pedro", "Carlos", "Maria", "Petra", "Juana"]
print(nombres)
mixta = [1, "Matricula", "Activa", True, None, 9.4]
print(mixta)
aninada = [1, [5, 5, [6, 4, 4]], 5, 7]
print(aninada)

print("Acceder a elementos de la lista")
print(nombres[0])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("CRUD en listas")
cursos = ["matematica", "lenguaje", "ingles", "programacion"]
# agregar
cursos.append("historia")
print(cursos)
cursos.insert(1, "fisica")
print(cursos)
cursos.extend(["quimica", "arte"])
# modificar
cursos[0] = "estadistica"
print(cursos)
# eliminar elementos
cursos.remove("programacion")
print(cursos)
eliminado = cursos.pop()
print(cursos)
eliminado = cursos.pop(0)
print(cursos)
del cursos[0]
print(cursos)


print("buscar valores en los elementos de una lista")
print("quimica" in cursos)
print(cursos.index("quimica"))
print(cursos.count("quimica"))

print("ordenar listas")
notas_desordenadas = [5, 2, 9, 1, 5, 6, 34, 9, 0, 1, 2]
print(notas_desordenadas)
notas_desordenadas.sort()
print(notas_desordenadas)
notas_desordenadas.sort(reverse=True)
print(notas_desordenadas)
ordenada = sorted(notas_desordenadas)
print(notas_desordenadas)
print(ordenada)
