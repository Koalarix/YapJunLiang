const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below

//Assigning variable names
let low = bacData[0];
let high = bacData[1];
let open = bacData[2];
let close = bacData[3];
let volume = bacData[4];

//Main Script
if(close > open) {
    if(volume > 100000) {
        console.log("Strong Bullish");
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