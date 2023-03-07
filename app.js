const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2,
    "GBP": 0.8, 
}

let JPY = oneEuroIs ["JPY"];
let USD = oneEuroIs ["USD"];
let GBP = oneEuroIs ["GBP"];

function fromDollarToYen(){
    return USD * JPY;
}
function fromEuroToDollar(){
    return 1 * USD
}
function fromYenToPound(){
    return JPY * GBP
}
module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
};