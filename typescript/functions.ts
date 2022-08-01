//we do not change the behavior 
const filterFriends = (arr: string[]): string[] => arr.filter(person => person === "Carlos" || person === "Gabriel");

// const saludo = () => console.log("hola mundoi");

const persons: string[] = ["Pepito", "Juan", "José", "Gabriela", "Gabriel", "Raúl", "Carlos"];

// let resultado: (array: string[]) => string [];
// resultado = filterFriends;

// resultado = saludo;
console.log(filterFriends(persons));