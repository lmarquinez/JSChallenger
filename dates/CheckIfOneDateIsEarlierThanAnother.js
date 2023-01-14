// Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.

function myFunction1(a, b) {
    return a < b;
}

function myFunction2(a, b) {
    return a.getTime() < b.getTime();
}
