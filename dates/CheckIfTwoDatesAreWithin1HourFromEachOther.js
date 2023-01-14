// Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.

function myFunction1(a, b) {
    return Math.abs(a - b) / 1000 / 60 <= 60
}

function myFunction2(a, b) {
    let dif = Math.abs(a.getTime() - b.getTime());
    return dif <= 3600000;
}