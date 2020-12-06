/* 
1. Given an array. Write a recursive function that removes the first element and returns
the given array. (without using arr.unshift(),assign second element to first, third element
to second...)
*/
function recursiveMove(array, i = 0) {
  if (array.length <= 1) return []

  if (i === array.length - 1) {
      array.pop()
      return array
  }
  array[i] = array[i + 1]
  return recursiveMove(array, i + 1)
}

console.log(recursiveMove([1, 2, 3, 4, 'a', [8, 9]]))