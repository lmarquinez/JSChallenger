// Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.

function myFunction1(a, b) {
    return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
}

function myFunction2(a, b) {
    return a.getTime() === b.getTime();
}