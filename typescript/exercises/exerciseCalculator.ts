
interface Exercise  {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}


const averageExercise = (exercises: number[], target: number): Exercise => {
const periodLength = exercises.length;
const trainingDays = exercises.reduce((week, day) => week + (day > 0 ? 1 : 0), 0);
const totalHours = exercises.reduce((total, hours) => total + hours, 0);

const average = totalHours / periodLength;
const success = average >= target ? true : false;
const rating = average >= target + 0.5 ? 3 : average >= target ? 2 : 1;  
const descriptions = ["bad", "medium", "very good"];
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription: descriptions[rating - 1],
        target,
        average
    };
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseInputs = (args: any[], target: any): Exercise => {
    if(!target || args.length === 0) throw 'missing data';
    const parseArr = args.map(str => Number(str));
    console.log(parseArr);

    return averageExercise(parseArr, target);
};

if(process.argv.length > 2){
    const [, , target, ...arrayToExercise] = process.argv;
    console.log(parseInputs(arrayToExercise, target)); 
}
