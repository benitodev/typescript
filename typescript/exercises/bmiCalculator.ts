// BMI weight and height
//body mass (kg) divided by the square of the body height (m) square

const calculate = (height:number, weight:number):string | number => {
    let response = "pass the correct data: first your height, second your weight";
    const heightInMeters = height / 100;
    const bmi:number = weight / (Math.pow(heightInMeters, 2));
    if(bmi <= 18.5){
         response = "you are very underweight"; 
    }else if(bmi <= 24.9){
        response = "Normal healthy weight";
    }else if(bmi <= 29.9){
        response = "High healthy weight";
    }

    return response; 
};

console.log(calculate(177, 48));