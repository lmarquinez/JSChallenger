// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction16A(a, b) {
    if (a.includes(b))
        return b + a;
    else
        return a + b;
}

function myFunction16B(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
}