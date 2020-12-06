/* Output the books sorted by the percent in descending order which readStatus is true.*/


const array=[
    { book: "Catcher in the Rye", readStatus: true, percent: 40},
    { book: "Animal Farm", readStatus: true, percent: 20},
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 } ,
    { book: "After Dark", readStatus: true, percent: 70 }
    ];



function output(array) {
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element['readStatus'] === false) {
        array.splice(i, 1)
        i--
    }
}
return array.sort(function(a, b) {
    return b.percent - a.percent
})

}

console.log(output(array))