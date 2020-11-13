
/*5. Given an array of integers. All numbers are unique. Find the count of missing
numbers between minimum and maximum elements to make integers sequence.*/ 

function array(arr) {
    let numberOfArrayWithoutMinAdnMax = arr.length - 2
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if (element < min) {
            min = element
        }
        if (element > max) {
            max = element
        };
    }

    let needNumbersCount = max - min - 1 - numberOfArrayWithoutMinAdnMax

    console.log(`Count of missing numbers between minimum and maximum elements ${needNumbersCount} `)
}

array([1, 2, 3, 8, 9, 10, 14])