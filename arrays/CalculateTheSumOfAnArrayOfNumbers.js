// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers

function myFunction1(a) {
    return a.reduce((elem, acc) => elem + acc, 0);
}

function myFunction2(a) {
    let res = 0;
    for (let elem of a)
        res = res + elem;
    return res;
}