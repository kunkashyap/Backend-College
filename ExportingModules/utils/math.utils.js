// Creating a reusable Module

//Public Functions => to be exported

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b == 0) {
        throw new Error("Cannot divide by zero");
        
    }
    return a / b;
}


//Exporting the modules
module.exports = { add , subtract , multiply , divide}