// Write a function that takes a Set and a value as arguments. Check if the value is present in the Set.

function myFunction1(set, val) {
    return set.has(val);
}

function myFunction2(set, val) {
    let res = false;
    set.forEach(elem => {
        if (elem === val)
            res = true;
    });
    return res;
}