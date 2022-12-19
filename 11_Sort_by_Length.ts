/**
 * Given an array of stringss, sort them in the order of increasing lengths.
 * If two strings have the same length,
 * their relative order must be the same as in the initial array.
 *
 * @Example:
 *
 * For
 * inputArray = ["abc", "", "aaa", "a", "zz"]
 * the output should be
 * sortByLenght(inputArray) = ["", "a", "zz", "abc", "aaa"]
 *
 * Hints
 *
 * sort()
 * */

function sortByLength(strs) {
    return strs.sort((a, b) => a.length - b.length)
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]))

