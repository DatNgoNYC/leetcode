/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // var lowerCaseString = s.toLowerCase();
    // var cleanedString = lowerCaseString.replace(' ', '').replace(/\W/g, '');
    // var stringArray = cleanedString.split('');

    // for (let i = 0; i < stringArray.length; i++) {
    //     forwardCharacter = stringArray[i];
    //     backwardCharacter = stringArray[stringArray.length - i - 1];

    //     if (forwardCharacter !== backwardCharacter) return false;
    // }

    let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    for (let i = 0, j = cleanedString.length - 1; i <= j; i++, j--) {
        var forwardCharacter = cleanedString.charAt(i);
        var backwardCharacter = cleanedString.charAt(j);
        if (forwardCharacter !== backwardCharacter) return false;
    }

    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama') === true);
console.log(isPalindrome('race a car') === false);
console.log(isPalindrome(' ') === true);
