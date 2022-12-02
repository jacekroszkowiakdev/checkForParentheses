// Write a function checking whether the text containing parentheses () {} [] are properly closed.
// Text can contain only parentheses, i.e '[()], {}, {()}'
// Correctly formatted [asdf]” or “([vulgar, not])”
// Incorrect formatted "([)]"

let checkarentheses = (str: string) => {
    let stack: string[] = [];
    for (let i = 0; i < str.length; i++) {
        let leftParenthesis = stack[stack.length - 1];

        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stack.push(str[i]);
        } else if (
            (leftParenthesis === "(" && str[i] === ")") ||
            (leftParenthesis === "{" && str[i] === "}") ||
            (leftParenthesis === "[" && str[i] === "]")
        ) {
            stack.pop();
        } else return false;
    }
    return stack.length ? false : true;
};

console.log(checkarentheses(""));
console.log(checkarentheses("[()]{}{()}"));
console.log(checkarentheses("([)])"));
console.log(checkarentheses("[(]]"));
console.log(checkarentheses("[[["));

// does not support other values including empty space:
console.log(checkarentheses("text"));
console.log(checkarentheses("([vulgar, not]))"));
console.log(checkarentheses("[asdf]"));

const leftBrackets = ["(", "[", "{"];
const rightBrackets = [")", "]", "}"];

const bracketMap = {
    "}": "{",
    "]": "[",
    ")": "(",
};

let checkarentheses_v2 = (str: string) => {
    let stack: string[] = [];

    for (let i = 0; i < str.length; i++) {
        const c = str[i];

        if (leftBrackets.includes(c)) {
            stack.push(c);
        } else if (rightBrackets.includes(c)) {
            if (bracketMap[c] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(checkarentheses_v2(""));
console.log(checkarentheses_v2("[()]{}{()}"));
console.log(checkarentheses_v2("([)])"));
console.log(checkarentheses_v2("[(]]"));
console.log(checkarentheses_v2("[[["));
console.log(checkarentheses_v2("text"));
console.log(checkarentheses_v2("[asdf]"));
// does not support spaces:
console.log(checkarentheses_v2("([vulgar, not]))"));
