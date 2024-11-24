// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

const getthreeLowestPrices = (prices) => prices.sort((a,b) => a -b).slice(0, 3);

let lowestThreePrices = getthreeLowestPrices(amdPrices);

console.log("The three prices are " + lowestThreePrices[0] + ", " + lowestThreePrices[1] + " and " + lowestThreePrices[2]);
