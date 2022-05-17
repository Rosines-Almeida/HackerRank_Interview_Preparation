/*
Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
*/

function checkMagazine(magazine, note) {
    const arr = note.every((i, x) => {
        if (magazine.includes(i)) {
            for (var l = 0; l < magazine.length; l++) {
                if (magazine[l] === i) {
                    magazine.splice(l, 1);
                    break
                }
            }
            return true
        }
    });

    arr ? console.log("Yes") : console.log("No");
}

// expectative = Yes
const m = ["give", "me", "one", "grand", "today", "night"];
const n = ["give", "one", "grand", "today"];

// expetative = No
// const m = ["two", "times", "three", "is", "not", "four"];
// const n = ["two", "times", "two", "is", "four"];

//expectative  Yes
// const m = ['h', 'ghq', 'g', 'xxy', 'wdnr', 'anjst', 'xxy', 'wdnr', 'h', 'h', 'anjst', 'wdnr']
// const n = ['h', 'ghq']