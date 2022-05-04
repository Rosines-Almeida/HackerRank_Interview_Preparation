// Desafio 2
/*
2D Array - DS-
An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be 

Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns

int: the maximum hourglass sum
*/
// teste 1
var arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];
// teste 2
// var arr = [
//     [-9 ,-9 ,-9 ,1, 1 ,1],
//     [0 ,-9 ,0 ,4 ,3 ,2],
//     [-9 ,-9 ,-9, 1, 2, 3],
//     [0 ,0 ,8, 6 ,6, 0],
//     [0, 0, 0, -2, 0, 0],
//     [0 ,0 ,1, 2 ,4, 0],
//     ]

//teste 3
// var arr = [
//     [0 ,-4, -6, 0, -7, -6],
//     [-1, -2 ,-6 ,-8 ,-3 ,-1],
//     [-8 ,-4, -2, -8, -8, -6],
//     [-3 ,-1, -2, -5, -7, -4],
//     [-3 ,-5 ,-3 ,-6 ,-6, -6],
//     [-3 ,-6, 0 ,-8 ,-6 ,-7],
//     ]
const sum = [];
function hourglassSum(arr) {
    var rotate = 0;
    var rotateSecond = 1
    for (let i = 0; i < arr.length; i++) {

        arr.forEach((element, index) => {
            const fisrtLine = element.slice(rotate, 3 + rotate);
            if (arr[index + 2] !== undefined) {
                const secondLine = arr[index + 1].slice(rotateSecond, rotateSecond + 1);
                const thirdLine = arr[index + 2].slice(rotate, 3 + rotate);
                let combinations = fisrtLine.concat(secondLine, thirdLine);
                if (combinations.length == 7) {
                    const maxValue = combinations.reduce(somar);
                    sum.push(maxValue)
                }
            }
        });
        rotate++;
        rotateSecond++
    }
    return Math.max(...sum);
}



function somar(arr, num) {
    return arr + num;
}
console.log(hourglassSum(arr));