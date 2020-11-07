/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
Note: If the input tries to divide by 0, return: "Can't divide by 0!"
*/
function calculator(num1, mathOp, num2){

    let result
    if(num2===0){
      result="Can't divide by 0!"
    }
    else{
        switch(mathOp){
            case "+" : result=num1+num2;
            break;
            case "-" : result=num1-num2;
            break;
            case "*" : result=num1*num2;
            break;
            case "/" : result=num1/num2;
            break;
    
        }
    }
    return result
}

console.log(calculator(5,"+",2))
console.log(calculator(8,"/",0))