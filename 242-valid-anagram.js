// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // are length the same? if not return false
    if (s.length !== t.length) return false;
    var s_letter_count_map = new Map();
    var t_letter_count_map = new Map();

    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(i + 97);
        s_letter_count_map.set(letter, 0);
        t_letter_count_map.set(letter, 0);
    }
    
    
        // create a map for each string where keys represent a letter in the alphabet and the value represents how many rimes its occured in this string.
    for (let i = 0; i < s.length; i++) {
        let s_letter = s[i]
        let s_current_count = s_letter_count_map.get(s_letter)
        s_letter_count_map.set(s[i], s_current_count + 1)

        let t_letter = t[i]
        let t_current_count = t_letter_count_map.get(t_letter)
        t_letter_count_map.set(t[i], t_current_count + 1)
    }

    // iterate through the dictionary and if it is an anagram, it should be the same.

    for (let [letter, count] of s_letter_count_map) {
        if (count !== t_letter_count_map.get(letter)) return false;
    }
    return true;
};

console.log(isAnagram('car', 'rat'))
console.log(isAnagram('anagram', 'nagaram'))
