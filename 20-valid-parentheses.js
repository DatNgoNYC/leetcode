/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let characters = s.split('');

    for (let i = 0; i < s.length / 2; i++) {
        let first_character = characters[2 * i];
        let second_character = characters[2 * i + 1];

        if (
            (first_character === '(' && second_character === ')') ||
            (first_character === '{' && second_character === '}') ||
            (first_character === '[' && second_character === ']')
        ) {
            continue;
        } else {
            return false;
        }
    }

    return true;
};

// ({}{][])
//

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid_2 = function (s) {
    if (s.length / 2 !== 0) {
        return false;
    }

    var characters = s.split('');
    var stack = [];

    for (let i = 0; i < s.length; i++) {
        let current_char = characters[i];
        stack.push(current_char);

        let prev_char = stack[-2];

        if (
            (prev_char === '(' && current_char === ')') ||
            (prev_char === '{' && current_char === '}') ||
            (prev_char === '[' && current_char === ']')
        ) {
            stack.pop();
            stack.pop();
            continue;
        } else {
            continue;
        }
    }

    return stack.length === 0;
};
// attempt 2 doesnt work on edge cases either. aka nested loops

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid_3 = function (s) {
    var stack = [];
    for (let character of s) {
        if (character === '(' || character === '{' || character === '[') {
            stack.push(character);
        } else if (
            character === ')' ||
            character === '}' ||
            character === ']'
        ) {
            let prev_char = stack.pop();

            if (
                (character === ')' && prev_char === '(') ||
                (character === '}' && prev_char === '{') ||
                (character === ']' && prev_char === '[')
            ) {
                continue;
            } else {
                return false;
            }
        }
    }

    return stack.length === 0
};

console.log(isValid_3('()'));
console.log(isValid_3('()[]{}'));
console.log(isValid_3('(]'));
