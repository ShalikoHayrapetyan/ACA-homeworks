/* Given an array of nested arrays.
 Write a recursive function that flattens it. (Hint create function that concats arrays*/
   
    let arr =[1, [3, 4, [1, [15,45]],[7,8]], 10] 
    function flattens(arr, result = []) {
    
        if (arr.length == 0) return result;
        if (Array.isArray(arr[0])) {
            result = result.concat(flattens(arr[0]))
    
        } else {
            result.push(arr[0])
        }
        arr.slice(1)
        return flattens(arr.slice(1), result)
    }
    
    console.log(flattens(arr))