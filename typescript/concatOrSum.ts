
type StringOrNumber = string | number; //unión de tipos
type PlaceholderOperation = 'sum' | 'concat'; // unión de tipos literales

//Asignamos en el param placeholder el valor por defecto sum y solo puse recibir sum o concat

function concatOrSumValues(value1:StringOrNumber, value2:StringOrNumber,placeholder:PlaceholderOperation = 'sum'):StringOrNumber {
  let res;
  if(placeholder === 'sum'){
    res = +value1 + +value2;
  }else{
    res = value1.toString() +  value2.toString();
  }
  return res;
}

console.log(concatOrSumValues(2,2)); // 4
console.log(concatOrSumValues("2","2", 'concat')); // '22'
console.log(concatOrSumValues("3","3", 'subtract')); // Argument of type '"subtract"' is not assignable to parameter of type 'PlaceholderOperation'