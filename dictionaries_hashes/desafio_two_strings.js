/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.
Example
These share the common substring .
These do not share a substring.
Function Description
*/

function twoStrings(s1, s2) {
    for (let letter of s1) {
        if (s2.includes(letter)) {
            return 'YES'
        }
    }
    return 'NO'
}

// YES
const s1 = "hello";
const s2 = "world";

// NO
// const s1 ='hi'
// const s2 ='world'
console.log(twoStrings(s1, s2));