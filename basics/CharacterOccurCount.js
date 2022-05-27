// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function myFunction13A(a, b) {
    let cont = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a)
            cont++;
    }
    return cont;
}

function myFunction13B(a, b) {
    return b.split(a).length - 1;
}