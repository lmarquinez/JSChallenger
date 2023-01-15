// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15

function myFunction1(date) {
    const min = date.getMinutes();
    for (let i = 15; i <= 60; i += 15) {
        if (i - min > 0 && min < 45)
            return i;
        else if (min > 45)
            return 0;
    }
}

function myFunction2(date) {
    let quarters = { 0: 15, 1: 30, 2: 45, 3: 60 };
    return quarters[Math.floor(date.getMinutes() / 15)];
}

function myFunction3(date) {
    const quarter = 15 * 60 * 1000;
    const closestQuarter = new Date(Math.round(date / quarter) * quarter);
    const nextQuarter =
        closestQuarter.getTime() < date.getTime()
            ? new Date(closestQuarter.getTime() + quarter)
            : closestQuarter;
    return nextQuarter.getMinutes();
}