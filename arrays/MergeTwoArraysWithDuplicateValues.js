// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction17A(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let res = [];
    arr.forEach(elem => {
        if (!res.includes(elem))
            res.push(elem);
    });
    return res.sort((a, b) => a - b);
}

function myFunction17B(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)
}

function myFunction17C(arr1, arr2) {
    return arr1.concat(arr2.filter(function (item) {
        return arr1.indexOf(item) === -1;
    }));
}