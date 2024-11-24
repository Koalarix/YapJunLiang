const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

let sumOfMovingAvg = 0;
 for (let prices of amdPrices){
  sumOfMovingAvg += prices;
 }
let simpleMovingAvg = (sumOfMovingAvg/amdPrices.length).toFixed(2);

let daysCount = 0;
for (let prices of amdPrices){
  if (prices > simpleMovingAvg) {
    daysCount += 1;
  }
}

console.log("Number of days AMD was above the 7-day SMA is:", daysCount);