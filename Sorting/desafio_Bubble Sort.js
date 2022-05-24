function countSwaps(a) {
    //1° loop muda a position do primeiro item 
    //2° loop muda a position do segundo item 
    let p_one;
    let swaps = 0;
    for (p_one in a) {
        for (let p_sec in a) {
            const i = parseInt(p_sec) + parseInt(p_one) + 1;

            if (i <= a.length && a[p_one] > a[i]) {
                let n = a[i];
                a[i] = a[p_one];
                a[p_one] = n;
                swaps++;
            }
        }
    }
    console.log("Array is sorted in " + swaps + " swaps");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a.pop());
}
//expect swaps = 0
// const a = [1,2, 3]
// expect swaps = 3
// const a = [3, 2, 1];
// expect swaps = 5
const a = [4, 2, 3, 1];

countSwaps(a);