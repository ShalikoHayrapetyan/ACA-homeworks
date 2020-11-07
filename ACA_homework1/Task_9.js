/*Write a function that returns an anonymous function, which transforms its input
by adding a particular suffix at the end.*/

function add_suffix(suffix){
  return function(word){
    return word+`${suffix}`
  }
}

let add_ly=add_suffix("ly")
let add_less=add_suffix("less")

console.log(add_ly("total"))
console.log(add_less("fear"))
