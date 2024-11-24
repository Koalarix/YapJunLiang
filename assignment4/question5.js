const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

let sumOfClosingPrice = 0;

for (let arr of disneyData){
	let closePrices = parseFloat(arr["close"]);
	sumOfClosingPrice += closePrices;
}

let avgClosingPrice = Math.round((sumOfClosingPrice / disneyData.length)*100)/100;

console.log("Average closing price of Disney is", avgClosingPrice);
