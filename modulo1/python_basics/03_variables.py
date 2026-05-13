#Enteros, Cadena de caracteres, Booleanos, None

nombre="Ana Garcia"        #String
edad=19                    #Entero
altura=1.67                #Float
activo=True                #Booleano
nulo=None                  #NoneType

print(type(nombre))
print(type(edad))
print(type(altura))
print(type(activo))
print(type(nulo))

# Asignar valor a varias variables en una linea
a, b, c= 12, 13, 14
print(a)
print(b)
print(c)

#Asignar el mismo valor a varias variables
a = b = c = 0
print(a)
print(b)
print(c)

#Intercambiar valores
x,y= 10,20
print(x,y)
x,y=y,x
print(x,y)

#Conversiones de nombres
nombre_completo="Alex Macias" #Snake_case
nombreCompleto="Alex Macias"  #NO USAR camelCase
MAX_REINTENTOS=3              #MAYUSCULAS SOSTENIDA para Constates
_variable_interna="privada"   #para uso interno

#Manejo de enteros
pequeno=42
negativo=-17
grande=1_000_000_000_000
enorme=2**100

print(pequeno)
print(negativo)
print(grande)
print(enorme)

#Bases  Numéricas
binario=0b1010
octal=0o17
hexadecimal=0xFF

print(binario, octal, hexadecimal)

#Convertir de decimal a otras bases
print(bin(255))
print(oct(255))
print(hex(255))
