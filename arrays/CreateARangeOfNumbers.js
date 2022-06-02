// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

function myFunction18A(min, max) {
    let res = [];
    let i = 0;
    let fin = false;
    while (!fin && res[i] !== max) {
        res[i] = min++;
        if (min > max) {
            fin = true;
        } else {
            i++;
        }
    }
    return res;
}

function myFunction18B(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}