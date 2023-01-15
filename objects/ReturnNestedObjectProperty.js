// Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined

function myFunction1(obj) {
    return obj?.a?.b;
}

function myFunction2(obj) {
    return obj.a && obj.a.b ? obj.a.b : undefined;
}