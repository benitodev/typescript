# Conceptos de typescript

## Union type (Unión de tipo)
La creación para que en una variable o función acepte más de un tipo de dato(valor). Usamos el operador ``|``  
 let id: number | string = 10; id = "10";
Podemos colocar tantos valores diversos de string o number como queramos. A continuación vemos como limitar los valores exactos permitidos.

### Union type in arrays
const arreglo: (number | string)[] = [1, 2, "hola mundo"];

### Union type in objects
const person: {
    id:number,
    name: string,
    number: bool | string
} = {
    id: 1,
    name: "benitoka",
    number: false,
};


### union type functions
Permite extender las variables y parámetros de las funciones de modo que puedan soportas mas tipos de datos
Es posible utilizarlo en los parametros y en el valor de retorno 
 
const concatOrSum(value1:string | number, value2:string | number):string | number{
    const whatIsIt = typeof (value1 && value2) === "string"
    let response: null
    if(whatIsIt){

    }
}

## Type alias (alias de tipo)
Podemos crear un conjunto de tipos que se referencie en un nombre (variable) y luego usarlo más sintacticamente

type mixedData = string  | number;

const arr: (mixedData)[] = [1, 2, 3, 4, "hi everyone"] 

type weekDays = "Lunes" | "Martes | "Miercoles" | "Jueves" | "Viernes" | "Sabado" | "Domingo

const weekendDays = (days: weekDays): boolean => {
    return weekDays === ("Sabado" | "Domingo") 
}

## Literal types (tipos literales)
Reducen los valores que puede aceptar una variable, haciendo que sean exactos. Para usarlos debemos aplicar la misma sintaxis de las uniones de tipos pero sin aclarar un tipo de dato (string, number, boolean), sino mas bien "Lunes", "Martes", etc.

type StringOrNumber = string | number; //unión de tipos
type PlaceholderOperation = 'sum' | 'concat' // unión de tipos literales

Asignamos en el param placeholder el valor por defecto sum y solo puede recibir sum o concat

function concatOrSumValues(value1:StringOrNumber, value2:StringOrNumber,placeholder:PlaceholderOperation = 'sum'):StringOrNumber {
  let res;
  if(placeholder === 'sum'){
    res = +value1 + +value2
  }else{
    res = value1.toString() +  value2.toString();
  }
  return res;
}

console.log(concatOrSumValues(2,2)); // 4
console.log(concatOrSumValues("2","2", 'concat')); // '22'
console.log(concatOrSumValues("3","3", 'subtract')); // Argument of type '"subtract"' is not assignable to parameter of type 'PlaceholderOperation'

## Type assertions (Afirmaciones de tipos)
 Tal como dice su nombre es afirmar el tipo de algo que sabemos el valor que retorna. Hay que tener cuidado ya que son removidos en tiempo de compilación. NO se genera un null si es incorrecto el dato, podriamos traer problemas de compatibilidad de tipos al código...
 Solo utilizar en caso de saber lo que hacemos, por ejemplo al traer información de un archivo JSON el cual sus tipos ya están definidos. 


## Utility Types (tipos de utilidades)
Proporciona varios tipos de utilidades para facilitar transformaciones o manipular los tipos comunes.

### Pick
Contruye nuevos tipos seleccionando el conjunto de "keys" (propiedades) de tipos. Evitando así propiedades innecesarias o no legibles por el usuario. 
Ejemplo:

type User = {
  name: string,
  age: number,
  level: number
  isMember: boolean,
}

type UserInfo = Pick<User, "name" | "age">

let user: UserInfo = {
  name: "Puck",
  age:32
}

### Omit 
Excluir un campo.

type UserInfo = Omit<User, "isMember">

## Narrowing (estrechamiento)
Técnica usada sobre todo en parámetros de una función. Por medio de validaciones podemos modificar el flujo de la función dependiendo de los tipos de datos (varios) que acepte la función.
La forma más común es utilizando el operador typeof y validaciones para modificar el flujo y evitar bugs

//creamos una tupla de strings
const choices: [string, string] = ['NO', 'YES'];

const processAnswer = (answer: number | boolean): string => {
  if (typeof answer === 'number') {
    console.log(choices[answer]);
  } else if (typeof answer === 'boolean') {
    if (answer) {
      console.log(choices[1]);
    } else {
      console.log(choices[0]);
    }
  }
}
processAnswer(0);       // Prints "NO"
processAnswer(true);    // Prints "YES"

## type predicates (predicados de tipo)
Para tener un control más directo acerca de los tipos en nuestro código necesitamos crear una función que retorne el predicado de tipo.
`function isFish(pet: Fish | Bird): pet is Fish { return(pet as Fish).swim !== undefined;}`

un predicado toma la forma **parámetro es Tipo** (pet is Fish). Si esta función devuelve true, el compilador de TypeScript sabe que la variable probada tiene el tipo que se definió como predicado de tipo.

## Type function
restringir que una variable solo pueda almacenar funciones.
Su único problema es que es muy general y acepta cualquier función como respuesta. 
Podemos solucionar esto declarando una función e indicando la cantidad de parámetros 
y sus tipos de datos y valor de retorno.

## parametros

### Parametro opcional
function getUser(name: string, account: string, phone?: string): string{

}

### Parametro por defecto
function getUser(name: string, account: string, phone: string = "https://placehgolder.com"): string{
  
}

**Orden de los parametros** : 
1. First: mandatory parameters
2. Second: opcional parameters
3. Last: default parameters

## Interfaz
Molde para nuestros datos. Relacionado a la estructura de datos de nuestro software. Serían loss nombres para propiedades personalizables y reutilizables. También podemos declarar propiedades de lectura u opcionales.

interface Persona {
  id:number;
  nombre: string;
  apellido: string;
  edad: number;
  esSoltero: boolean;
}

interface Perro {
  id:number | string;
  nombre: string;
  color: string[];
  raza:string;
  sexo: "Macho" | "Hembra"
}

interface Vehiculo {
  placa:string;
  color: string;
  ruedas: number;
  puertas: number;
  marca: string;
  esNuevo: boolean;
}

const pedro:Persona = {
  id: 1,,
  nombre: "Pedro",
  apellido: "Sanchez",
  edad: "21",
  esSoltero: true,
}

 **Es de forma obligatoria contener todas las propiedades de la interfaz, si no, estaria incumpliendo el "contrato"**

## También tenemos propiedades opcionales

interface Vehiculo {
  placa:string;
  color: string;
  ruedas?: number;
  puertas?: number;
  marca: string;
  esNuevo: boolean;
}

const hilux:Vehiculo = {
  placa: 'HYK-256',
  color: 'rojo',
  marca: 'Toyota',
  esNuevo: true,
} 

## Podemos crear propiedades de solo lectura

interface Perro {
  id:number | string;
  readonly nombre: string;
  color: string[];
  raza:string;
  sexo: "Macho" | "Hembra"
}

// nombre es de solo lectura

const boby:Perro = {
  id: "125-boby",
  nombre:"Boby",
  color: ["cafe","blanco"],
  raza:"cooker",
  sexo: "Macho"
}

boby.raza = "pastor aleman";
console.log(boby)
boby.nombre = "Rufo"

cambiar el valor de la prop.nombre produciría un error.

## Utilizar extends para heredar interfaces

interface Vehiculo {
  placa:string;
  color: string;
  ruedas?: number;
  puertas?: number;
  marca: string;
  esNuevo: boolean;
}

interface Bicicleta extends Vehiculo {
  esMontañera: boolean;
  traccion: number;
}