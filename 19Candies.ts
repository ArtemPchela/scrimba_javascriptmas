/**
 * Candies.
 *
 * n children have got m piece of candy.
 * They want to east as much candy as they can,
 * but each child must eat exactly the same amount of candy as any other child.
 * Determine how many pieces of candy will be eaten by all the children together.
 * Individual pieces of candy cannot be split.
 *
 * @Example:
 *
 * For n = 3 and m = 10, the output should be candies(n, m) = 9
 * Each child will eat 3 pieces. So the answer is 9.
 *
 * @Hint:
 * Math.floor()
 * */

function candies(children, candy) {
    return Math.floor(candy / children) * children
}

/**
 *  or find the remainder of a division
 */

// function candies(children, candy) {
//   return candy - Math.floor(candy % children)
// }

console.log(candies(3, 10));
