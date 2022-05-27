// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction21A(x, y) {
    let divisible = false;
    if ((x % y) == 0) {
        return x;
    } else {
        while (!divisible) {
            if ((x % y) == 0) {
                divisible = true;
            } else {
                x++;
            }
        }
        return x;
    }
}

function myFunction21B(x, y) {
    while (x % y !== 0) x++;
    return x;
}