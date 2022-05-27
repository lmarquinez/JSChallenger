// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction14A(a) {
    return a % 1 === 0;
}

function myFunction14B(a) {
    return a - Math.floor(a) === 0
}