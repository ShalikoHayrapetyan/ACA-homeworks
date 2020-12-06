/*
6. Write a JavaScript function to get all possible subsets of given length of the given array.
Assume that all elements in the array are unique.
*/


// Lucum@ grvac e miayn erb num = 2 kam 3
function couple(array, num) {
  let result = []
  if (num == 2) {


      for (let i = 0; i < array.length; i++) {

          for (let j = i + 1; j < array.length; j++) {
       

                  result.push([array[i], array[j]])
              
          }
      }
  }
  if (num == 3) {
      for (let i = 0; i < array.length; i++) {

          for (let j = i + 1; j < array.length; j++) {
              for (let k = j + 1; k < array.length; k++) {

                  result.push([array[i], array[j], array[k]])
              }
          }
      }
  }


return result
}


console.log(couple(arr))