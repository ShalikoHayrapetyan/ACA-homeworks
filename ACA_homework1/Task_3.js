/*Given a positive integer. Bring the last digit of the number to the beginning. Print the
new number. If the last digit of the inserted number is 0, number remains the same.*/



function newNumber(num) {
    let newNum=""
    strNum= num+""
    for(let i=strNum.length-1; i>=0; i--){
        if(strNum[i]==0){
           newNum+=strNum.slice(0,i+1)
                return +newNum
                        }
        else{
                newNum+=strNum[i]
                
            }
}
    return +newNum
}
newNumber(1201)


