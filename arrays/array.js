//  Desafio 1
/*
A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.
*/

function rotLeft(a, d) {
    const lastNumbers = a.slice(0, d);
    const numbersRotate = a.splice(d);


    return numbersRotate.concat(lastNumbers);

    // Write your code here
}
const arr = [1, 2, 3, 4, 5];
const rotate = 4;

console.log(rotLeft(arr, rotate))