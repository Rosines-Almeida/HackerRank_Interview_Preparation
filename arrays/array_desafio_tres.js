/*
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
*/

function minimumBribes(q) {

    let result;
    var numberArrray = q.length;
    const minimumBribes = 3;
    const arrDiff = [];
    for (var i = 0; numberArrray > i; i++) {
        const diff = q[i] - (i);
        diff >= 0 && arrDiff.push(diff)
        if (diff > minimumBribes) {
            result = 'too'
            break
        } else {
            result = arrDiff.reduce(sumValue)
        }

    }
    console.log(result)
}
function sumValue(arr, num) {
    return arr + num;
}

// var q = [2, 1, 5, 3, 4] //3
// var q = [2 ,5 ,1, 3, 4]//4
// var q = [5, 1, 2, 3, 7, 8, 6, 4] //too
// var q = [1, 2, 5, 3, 7, 8, 6, 4]  //7
minimumBribes(q);