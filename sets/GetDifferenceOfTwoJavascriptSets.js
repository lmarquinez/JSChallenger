// Write a function that takes two sets (a and b) as arguments. Get the difference of the sets. In other words, return a set containing all elements that are not in both sets

function myFunction(a, b) {
    return new Set(
        [...a].filter(elem => !b.has(elem)));
}