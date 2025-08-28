function isPalindrome(strinG) {

    let newArray = strinG.split('').reverse().join('');

    if ( strinG.toLowerCase().replaceAll(' ', '') == newArray.toLowerCase().replaceAll(' ', '')) {
        
        return true;
        
    } else {
        
        return false;

    }

 }

console.log(isPalindrome("madam"));                         // true
console.log(isPalindrome("racecar"));                       // true
console.log(isPalindrome("hello"));                         // false
console.log(isPalindrome("A man a plan a canal Panama"));   // true