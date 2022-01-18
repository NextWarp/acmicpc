function isPalindrome(text) {
    if (!text || text.length === 1) return true;
    return text[0] === text[text.length - 1] && isPalindrome(text.substring(1, text.length - 1));
}


console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
