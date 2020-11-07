function intWithingBounds( num, lower, upper  ){
    
    return Number.isInteger(num) && num>lower && num<upper
}