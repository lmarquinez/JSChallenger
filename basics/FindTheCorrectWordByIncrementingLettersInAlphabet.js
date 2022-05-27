// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction23A(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res += String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
    return res;
}

function myFunction23B(str) {
    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt() + 1));
    return correctedArray.join('');
}