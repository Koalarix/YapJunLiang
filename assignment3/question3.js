const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

// convert strings to numbers
disneyData['open'] = parseFloat(disneyData['open']);
disneyData['high'] = parseFloat(disneyData['high']);
disneyData['low'] = parseFloat(disneyData['low']);
disneyData['close'] = parseFloat(disneyData['close']);

console.log((disneyData['open'] - disneyData['high'] + disneyData['low'] - disneyData['close']).toFixed(2));