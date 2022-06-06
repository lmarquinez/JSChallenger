
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

function myFunction17A(a) {
    let res = {};
    for (let i = 0; i < a.length; i++) {
        if (res.hasOwnProperty(a[i])) {
            res[a[i]] = res[a[i]] + 1;
        } else {
            res[a[i]] = 1;
        }
    }
    return res;
}

function myFunction17B(a) {
    return a.reduce((acc, cur) => {
        return { ...acc, [cur]: (acc[cur] || 0) + 1 };
    }, {});
}