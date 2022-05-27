// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function myFunction17A(a) {
    return Math.round(a * 100) / 100;
}

function myFunction17B(a) {
    return Number(a.toFixed(2));
}