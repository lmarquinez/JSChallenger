// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function myFunction20A(a) {
    let prime = false;
    function isPrime(num) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        };
        return true;
    }
    if (isPrime(a)) {
        return a;
    } else {
        while (!prime) {
            if (isPrime(a)) {
                prime = true;
            } else {
                a++;
            }
        }
        return a;
    }
}

function myFunction20B(a) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }
    let n = a;
    while (!isPrime(n)) n++;
    return n
}