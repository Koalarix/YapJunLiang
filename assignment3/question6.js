const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

//Convert data type
let open = parseFloat(disneyData['open']);
let high = parseFloat(disneyData['high']);
let low = parseFloat(disneyData['low']);
let close = parseFloat(disneyData['close']);
let volume = parseFloat(disneyData['volume']);

//main code

if(close > open) {
	if(volume > 100000) {
		console.log("Strong Bullish")
	} else {
		console.log("Bullish");
	}
}

if(close < open) {
	if(volume > 10000) {
		console.log("Strong Bearish");
	} else {
		console.log("Bearish");
	}
}

if(close === open) {
	console.log("neutral");
}