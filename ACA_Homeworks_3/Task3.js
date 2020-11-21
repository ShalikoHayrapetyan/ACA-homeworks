/*3. Write a function which finds corresponding object by it’s id and print it. Elsewhere it
should print error message.*/
const frameworks = [{
    id: 1,
    title: "react"
},
{
    id: 2,
    title: "angular"
},
{
    id: 3,
    title: "vue"
}
];

function findById(frameworks, id) {
for (index in frameworks) {
    if (frameworks[index].id === id) {
        return frameworks[index]
    } 
}
return "No Data"
}

console.log(findById(frameworks, 3))