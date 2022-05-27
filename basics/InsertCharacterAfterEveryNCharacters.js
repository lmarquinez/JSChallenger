// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting strin

function myFunction22A(a, b) {
    let res = '';
    let cont = 0;
    for (let i = a.length - 1; i > -1; i--) {
        if (cont === 3) {
            res += b;
            cont = 0;
        }
        res += a[i];
        cont++;
    }
    return String(res.split('').reverse()).replaceAll(',', '');
}

function myFunction22B(a, b) {
    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
}