# Conceptos relacionados al estudiar typescript 

## Codigo fuente: 
todo texto legible por un ser humano y redactado en un lenguaje 
de programación determinado. El objectivo de este es crear normas y disposiciones claras para el ordenador 
y que este sea capaz de traducirlas a su propio lenguaje.

## Superconjunto de un lenguaje (typed superset language): 
otro lenguaje totalmente compatible con el primero,
pero además ofrece nuevas funcionalidades.

## analisis de codigo estatico: 
se realiza sin ejecutar el codigo, mediante una serie de 
metodos de analisis que se pueden ejecutar sobre el codigo fuente de una aplicacion para detectar problemas potenciales.

## compilación (compiler): 
proceso de transformar un programa informatico escrito en un 
lenguaje de programacion (codigo fuente), a otro lenguaje de alto, medio o bajo nivel (codigo intermedio o codigo maquina). 

## eliminacion de tipo (type erasure): 
proceso de hacer cumplir las restricciones de tipo solo en tiempo de compilación y descartar informacion de tipo de 
elemento en tiempo de ejecución. (eliminar todos los tipos y anotaciones en tiempo de transpilacion)


## Tipados
-**Lenguaje con tipado estático**: 
el compilador chequea de forma estatica las asignaciones
para verificar que los tipos son compatibles entre si.

-**Lenguaje con tipado dinamico**: las comprobaciones se realizan en tiempo de ejecución (runtime)

TIPADO: https://blog.koalite.com/2018/01/tipados-nominal-y-tipado-estructural/

## SISTEMA DE TIPOS:
- **¿Qué es un tipo?** forma de clasificar valores, entendiendo valores 
en el sentido más amplio de la palabra (variable, constante o función). 
En base a ello podemos establecer que un valor determinado es un int o una función
de int -> string.
Conjunto (potencialmente infinito) formado por los valores que son escencial en el. 
Por ejemplo: el tipo Int estaria formado por todos los números enteros. 
El tipo class Person por todas las posibles instancias que se pueden construir

**Tipado nominal**: 
Dos tipos son compatibles si tienen el mismo nombre 
(independientemente que tengan los mismos elementos o no). Los elementos de 
un conjunto no son compatibles con los del otro.
Limitan el polimorfismo debido que al final el tipo de algo lo marca el nombre 
y no las caracteristicas. Para resolver esto tenemos distintas técnicas de
-**"subtipado nominal"** un ejemplo: la herencia explicita, interfaces, etc.

-**Tipado estructural**: (usado por typescript!)
basado en la estructura de los tipos. Dos tipos son compatibles
si la estructura de sus elementos es compatible. La ventaja es no estar definiendo 
a priori nuestros tipos. No necesitamos nombrar las cosas y crear jerarquias 
de interfaces o clases. Todas nuestras funciones serán capaces de trabajar 
con cualquier tipo de datos siempre que se respete la estructura.  