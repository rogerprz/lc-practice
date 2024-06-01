/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return prices
  
  let result = 0;
  let min = prices[0]
  
  for (let i = 1; i < prices.length; i++){
    min = Math.min(prices[i], min)
    result = Math.max(result, prices[i]- min)
  }
  
  return result
};





















































// var maxProfit = function(prices) {
//     let result = 0;
//     let min = prices[0];
//     for(let i = 1; i < prices.length; i++) {
//         min = Math.min(prices[i], min);
//         result = Math.max(result, prices[i] - min);
//     }
//     return result;
// };


// MY SOLUTION

// var maxProfit = function(prices) {
//   let maxProfit = 0;
//   let min = prices[0];
  
//   for(let i = 1; i < prices.length; i++) {
//     min = Math.min(prices[i], min);
    
//     let currentProfit = prices[i] - min
//     if (maxProfit < currentProfit) maxProfit = currentProfit
//   }
//   return maxProfit;
// };