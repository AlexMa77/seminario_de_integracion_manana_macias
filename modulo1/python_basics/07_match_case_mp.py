print("Match case")
comando = input("Comando academico matricular/retirar/reasignar: ")
match comando:
    case "matricular":
        print("Estudiante matriculado")
    case "retirar":
        print("Matricula retirada")
    case "reasignar":
        print("Estudiante reasignado de paralelo")
    case _:
        print(f"Comando '{comando}' no encontrado")

print("Match condiciones")
nota = 7
match nota:
    case n if n < 0:
        print(f"{n} es una nota invalida")
    case 0:
        print("No presento la evaluacion")
    case n if n % 2 == 0:
        print(f"{n} es una nota par")
    case n:
        print(f"{n} es una nota positiva e impar")
