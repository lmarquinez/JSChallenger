// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function myFunction10A(obj) {
    delete obj.b;
    return obj;
}

function myFunction10B(obj) {
    delete obj['b'];
    return obj;
}

function myFunction10C(obj) {
    const { b, ...rest } = obj;
    return rest;
}