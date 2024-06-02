var display = document.getElementById('dplay');
Hyphen = '-';
var num = `3 Hyphen 3`
display.innerHTML = 0;
function clearDisplay() {
    display.innerHTML = 0;
}
function appendNumber(num) {
    display.innerHTML += num;
}
function compute() {
    let value = display.innerHTML; // Assuming dispaly is a typo and should be display
    switch (true) {
        case value.includes("÷"):
            const divisionParts = value.split("÷");
            const dividend = parseFloat(divisionParts[0]); 
            const divisor = parseFloat(divisionParts[1]); 
            const divisionResult = dividend / divisor;
            display.innerHTML = divisionResult.toFixed(0);
            break;
        case value.includes("×"):
            const multiplicationParts = value.split("×");
            const multiplicand = parseFloat(multiplicationParts[0]); 
            const multiplier = parseFloat(multiplicationParts[1]); 
            const multiplicationResult = multiplicand * multiplier;
            display.innerHTML = multiplicationResult;
            break;
        case value.includes("-"):
            const subtractionParts = value.split("-");
            const minuend = parseFloat(subtractionParts[0]); 
            const subtrahend = parseFloat(subtractionParts[1]); 
            const subtractionResult = minuend - subtrahend;
            display.innerHTML = subtractionResult;
            break;
        case value.includes("+"):
            const additionParts = value.split("+");
            const addend1 = parseFloat(additionParts[0]); 
            const addend2 = parseFloat(additionParts[1]); 
            const additionResult = addend1 + addend2;
            display.innerHTML = additionResult;
            break;
        default:
           
            break;
    }
}


function name(params) {

}