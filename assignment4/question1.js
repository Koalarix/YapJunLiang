const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

let maxPrice = 0
for (let prices of amdPrices) {
  if (prices > maxPrice) {
    maxPrice = prices
  }
}
 console.log("AMD 52-week high is " + maxPrice);