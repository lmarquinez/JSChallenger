// Write a function that takes two Sets as arguments. Create the union of the two sets. Return the result. Tipp: try not to switch to Arrays, this would slow down your code

function myFunction1(a, b) {
    const result = new Set(a);
    b.forEach((elem) => result.add(elem));
    return result;
}

function myFunction2(a, b) {
    const res = new Set();
    a.forEach(value => {
        res.add(value);
    });
    b.forEach(value => {
        res.add(value);
    });
    return res;
}

function myFunction3(a, b) {
    return new Set([...a, ...b]);
}