/* 4. Write a function which generates object containing index
 and info from given array*/
 const arr = ['Manchester City', 'Liverpool'];

 function generate(arr) {
     const newArray = []
     for (let i = 0; i < arr.length; i++) {
         newArray.push({
             title: arr[i],
             idx: i
         })
     }
     return newArray
 }
 
 console.log(generate(arr))