/*
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

Note Each toy can be purchased only once.
*/

function maximumToys(prices, k) { 
    prices.sort((a, b) => a - b); 
    let maxToys = []; 
    for (let i in prices) {
      maxToys.push(prices[i]);
      let result = maxToys.reduce(maxToysSum); 
      if (result > k) { 
        maxToys.pop();
        break;
      }
    }
    return maxToys.length;
  }
  
  function maxToysSum(arr, num) { 
    return arr + num;
  }

  // expect 4
  const prices = [1, 12, 5, 111, 200, 1000, 10];
  const k = 50;

  // expect 3
  // const prices = [ 1, 2, 3, 4 ] 
  // const k = 7

  // expect 3
  // const prices = [ 3, 7, 2, 9, 4 ]
  // const k =  15
  
  maximumToys(prices, k);