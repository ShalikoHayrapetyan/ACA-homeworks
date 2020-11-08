//Write a function that returns true if a hash contains the specified key, and false otherwise

function hasKey(obj,key){
  return   obj.hasOwnProperty(key)
}
console.log(hasKey({a:2,b:3},"a"))