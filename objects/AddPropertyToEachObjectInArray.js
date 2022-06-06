// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

function myFunction16A(arr, str) {
    arr.forEach(elem => {
        elem.continent = str;
    });

    return arr;
}

function myFunction16B(arr, str) {
    return arr.map((obj) => ({ ...obj, continent: str }));
}