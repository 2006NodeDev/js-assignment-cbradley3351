/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

const Palindrome = (str) => {
    const isPalindrome = str.split('').reverse().join('');  //change string into array to split, array can be reversed, then join array back together with join
    console.log(str===isPalindrome); //checks to see if string is === to the isPalindrome value that was turned into an array, reversed then joined back together
}

Palindrome("ooxxoo"); //calls the Palindrome
Palindrome("luna"); //returns false not a palindrome
Palindrome("kayak"); //true