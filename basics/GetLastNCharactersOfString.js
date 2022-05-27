// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFuction6A(str) {
    const arrayReverse = str.split('').reverse();
    let res = '';
    for (let i = 0; i < 3; i++) {
        res += arrayReverse[i];
    }
    return res;
}

function myFunction6B(str) {
    let res = '';
    for (let i = str.length - 3; i < str.length; i++) {
        res += str[i];
    }
    return res;
}

function myFuction6C(str) {
    return str.slice(-3);
}