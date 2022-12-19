/** Alternating Caps
 *Write a function that takes in a string of letters
 *and returns a sentence in which every other letter is capitalized.
 *
 *Example input: "I'm so happy it's Monday"
 *Example output: "I'M So hApPy iT'S MoNdAy"
 */

function altCaps(str) {
    return [...str].map((letter, i) => i % 2 ? letter : letter.toUpperCase()).join('');
}

console.log(altCaps("I'm so happy it's Monday"));
