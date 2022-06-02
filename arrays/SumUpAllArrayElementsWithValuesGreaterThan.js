// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function myFunction17A(a, b) {
    let cont = 0;
    a.forEach((elem) => {
        if (elem > b) {
            cont += elem;
        }
    });
    return cont;
}

function myFunction17B(a, b) {
    return a.reduce((cont, cur) => {
        if (cur > b) return cont + cur;
        return cont;
    }, 0);
}