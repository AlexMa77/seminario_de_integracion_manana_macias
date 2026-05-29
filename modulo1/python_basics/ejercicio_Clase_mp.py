print("Condicionales if anidados")
anios = input("Cuantos anios tiene matriculado el estudiante: ")
calificacion = input("Promedio de desempeno academico: ")
pension = input("Valor de pension: ")

if int(anios) >= 1:
    if int(calificacion) >= 8:
        if int(pension) < 1000:
            print("Obtuviste beca de 1000")
        elif int(pension) >= 1000:
            print("Obtuviste beca de 100")
    else:
        print("No hay beca")
else:
    print("No cumple anios de antiguedad academica")
