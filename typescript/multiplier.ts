//union types (type alias) that allows us to use more than one data type in variable or parameters
type Operation = 'multiply' | 'add' | 'divide';
type Result = string | number

//interface to create an estructure

interface MultiplyValues{
    value1: number;
    value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
    if(args.length < 4) throw new Error('Not enough arguments')
    if(args.length > 4) throw new Error('Too many arguments')

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3]) 
        }
    }else{
        throw new Error('Provided values were not numbers')
    }
}


const calculator = (a: number, b: number, op: Operation) : Result =>{
    switch (op) {
        case 'add':
            
            return a + b;
        case 'multiply':
            return a * b;

        case 'divide':
            if(b === 0) throw Error('can not resolved if parameter is 0')
            return a / b;
        default:
            throw new Error('Operation is not multiply, add or divide');
    }
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

try {
    const {value1, value2} = parseArguments(process.argv)
   console.log(calculator(value1, value2, 'multiply'), "we multiplied")  

} catch (err: any) {
    console.log(`Something went wrong, message: ${err.message}`);
}



// type weekDays = "Lunes" | "Martes" | "Miercoles" |
//  "Jueves" | "Viernes" | "Sabado" | "Domingo";

// const weekendDays = (days: weekDays): boolean => {
//     return days === "Sabado" || days === "Domingo" 
// }

// console.log(weekendDays("Martes"))
// console.log("hi")


