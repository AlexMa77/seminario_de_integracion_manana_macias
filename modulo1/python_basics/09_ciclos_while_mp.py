contador = 1
while contador <= 5:
    print(f"estudiante registrado: {contador}")
    contador += 1

print("continue")
i = 1
while i <= 5:
    i += 1
    if i == 3:
        continue
    print(f"registro revisado: {i}")

print("break")
i = 1
while i <= 5:
    i += 1
    if i == 3:
        break
    print(f"registro validado: {i}")

numero = int(input("Ingrese codigo de estudiante, 0 para salir: "))
while numero != 0:
    print("Codigo consultado: ", numero)
    numero = int(input("Ingrese codigo de estudiante, 0 para salir: "))

contador = 1
while contador <= 5:
    print(f"matricula: {contador}")
    contador += 1
else:
    print("Fin del ciclo")

contador = 1
while contador <= 5:
    print(f"matricula: {contador}")
    contador += 1
    if contador == 3:
        break
else:
    print("Fin del ciclo")
