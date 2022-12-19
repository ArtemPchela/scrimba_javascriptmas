/**
 * Check if the given string is a correct time representation of the 24-hours clock.
 *
 * Example: For time = "13:58", the output should be validTime(time) = true;
 * Example: For time = "25:51", the output should be validTime(time) = false;
 * Example: For time = "02:76", the output should be validTime(time) = false;
 *
 * Hints:
 * -parsInt()
 * split()
 */

function validTime(str) {
    return Number(str.split(':')[0]) < 24 && Number(str.split(':')[1]) < 60
}

validTime("16:61")
