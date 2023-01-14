// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

function myFunction1(a, b) {

    let dif = a.getTime() - b.getTime();
    let res = Math.abs(dif / (1000 * 60 * 60 * 24));

    return res;
}


function myFunction2(a, b) {
    const dif = Math.abs(a - b);
    return dif / 1000 / 60 / 60 / 24
}