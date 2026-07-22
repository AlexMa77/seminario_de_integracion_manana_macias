print("Condicionales simples")
edad = input("Incluye edad del estudiante: ")
if int(edad) >= 18:
    print("Estudiante mayor de edad")

print("Condicionales dos caminos")
promedio = input("Incluye promedio final: ")
if int(promedio) >= 7:
    print("Estudiante aprobado")
else:
    print("Estudiante en recuperacion")

print("Condicionales if anidados")
tiene_matricula = True
pago = 25
curso = "programacion"
if tiene_matricula:
    if pago >= 20:
        if curso == "programacion":
            print("Curso de programacion cuesta $20. Matricula confirmada")
        else:
            print("Curso disponible")
    else:
        print("Pago insuficiente")
else:
    print("No tiene matricula")
