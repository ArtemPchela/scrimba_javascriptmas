/**
 * Century from year
 * Given a year, return the century it is in.
 * The first century spans the year 1 up to and the year 100,
 * the second - from the year 101 up to and including teh year 200, etc.
 *
 * @Hint: Math.floor() - function always rounds down and returns the largest integer less than or equal to a given number
 * */

function centuryFromYear(num) {
    return Math.floor((num - 1) / 100) + 1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(1817));
