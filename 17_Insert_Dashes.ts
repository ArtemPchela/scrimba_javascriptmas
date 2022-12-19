/**
 * 🤖 Insert Dashes 🤖
 *
 * Transform a given sentence into a new one with dashes between each two consecutive letters.
 *
 * @Example:
 * For inputString = 'aba caba', the output should be
 * insertdashes(inputString) = 'a-b-a c-a-b-a'.
 *
 * @Hint:
 * join()
 * splt()
 * */

function insertDashes(arr) {
    let splitedArr = arr.split(" ");
    let resArr = [];

    /**
     * @while solution
     */
    let i = 0;
    while (i < splitedArr.length) {
        resArr.push(splitedArr[i].split("").join("-"));
        i++;
    }

    /**
     * @for solution
     */

    for (let i = 0; i < splitedArr.length; i++) {
        resArr.push(splitedArr[i].split("").join("-"))
    }

    return resArr.join(" ");
}


console.log(insertDashes("aba caba"));
