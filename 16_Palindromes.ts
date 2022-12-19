/**
 * ↔️ Palindromes ↔️ are words that are the same forward or backward. For example,
 * the words "noon" and "kayak" are a palindromes.
 * Write a function to check if a lowerCase string of letters is a palindrome.
 * If the word is palindrome, return true. If it isn't, return false.
 */

function isPalindrome(str) {
    str.toLowerCase() // because case-sensitive language
    return str.split('').reverse().join('') === str
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
