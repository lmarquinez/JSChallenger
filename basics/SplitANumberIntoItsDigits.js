// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction18A(a) {
    let numberArr = String(a).split('');
    let res = [];
    for (let i = 0; i < numberArr.length; i++) {
        res[i] = Number(numberArr[i]);
    }
    return res;
}

function myFunction18B(a) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
}