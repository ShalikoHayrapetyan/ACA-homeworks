//Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
function multiple(num){
    if(num%3===0 && num%5===0 && num%7===0){
        return `${num} is a multiple of 3, 5 and 7.`
    }
    else if((num%3===0 && num%5===0 )){
        return `${num} is a multiple of 3, and 5.`
    }
    else if((num%3===0 && num%7===0 )){
        return `${num} is a multiple of 3, and 7.`
    }

    else if((num%5===0 && num%7===0 )){
        return `${num} is a multiple of 5, and 7.`
    }
    else if((num%3===0 )){
        return `${num} is a multiple of 3.`
    }
    else if((num%5===0 )){
        return `${num} is a multiple of 5.`
    }
    else if((num%7===0 )){
        return `${num} is a multiple of 7.`
    } else { return `${num} is not a multiple of 3, 5 or 7.`}
    
}
console.log(multiple(21))
console.log(multiple(35))
console.log(multiple(13))
console.log(multiple(420))
console.log(multiple(24))