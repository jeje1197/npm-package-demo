/*
    A module that provides the basic math operations as functions.
*/

function add(value1, value2) {
    return value1 + value2;
}

function subtract(value1, value2) {
    return value1 - value2;
}

function multiply(value1, value2) {
    return value1 * value2;
}

function divide(value1, value2) {
    return value1 / value2;
}

// Export the functions by using the module.exports object
module.exports = {
    add,
    subtract,
    multiply,
    divide
}