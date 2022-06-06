// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

function myFunction15A(obj) {
    let res = {};

    Object.keys(obj).forEach(key => {
        console.log(key);
        if (key === 'size')
            res[key] = obj[key] + 'cm';
        else if (key === 'weight')
            res[key] = obj[key] + 'kg';
        else if (key === 'fn' || key === 'ln')
            res[key] = obj[key];
    });

    return res;
}

function myFunction15B(obj) {
    return {
        fn: obj.fn,
        ln: obj.ln,
        ...(obj.size && { size: `${obj.size}cm` }),
        ...(obj.weight && { weight: `${obj.weight}kg` }),
    };
}
