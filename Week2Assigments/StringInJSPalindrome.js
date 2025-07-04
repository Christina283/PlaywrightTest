function isPalindrome(inputString) {

    let chars = inputString.split("");
    var reverseChar = ""
    for (var i = chars.length - 1; i >= 0; i--) {
        reverseChar += chars[i]
    }
    if (reverseChar === inputString)
        return true
    else
        return false
};

let inputString = "madam"

console.log("String %s - isPalindrome? %s", inputString, isPalindrome(inputString))