/**
 * 🧮 Count Vowel Consonant
 * You are given a strings that consists of only lowercase English letters.
 * If vowels ('a', 'i', 'o' and 'u') are given a value of 1 and consonants
 * are given a value of 2, return sum of all the letters in the input string.
 *
 * @Example s = 'abcde', the output should be countVowelConsonant(s) = 8.
 *
 * @Hints:
 * split()
 * reduce()
 * */

function countVowelConsonant(str) {
    return str.split("").reduce((acc, character) => ('aeiou'.indexOf(character) === -1 ? acc + 2 : acc + 1), 0);
}

console.log(countVowelConsonant('abcde'));
