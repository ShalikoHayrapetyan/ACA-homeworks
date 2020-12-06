/*5. Create a function that builds a tree like object given an array with object
 which contains parent and id properties. */

 let array =[
  { parents : null, id : 0 },
  { parents : 0, id : 1 },
  { parents : 0, id : 2 },
  { parents : 1, id : 3 },
  { parents : 1, id : 4 },
  { parents : 2, id : 5 },
  { parents : 4, id : 6 },
]
 
function buildsTree(array, tree = {}, i = 0) {
  if (array.length == i) {
      return tree
  }
  tree[i] = {}
  for (let j = i + 1; j < array.length; j++) {
      if (array[i]['id'] == array[j]['parents']) {

          tree[i][array[j]['id']] = {}
      }
  }
  //??????????????????????
 // return  Some recursive function when (i=i+1 and tree = tree[i]) Or some code   ??????????

}

console.log(buildsTree(array))