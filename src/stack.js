var _ = require('Underscore');

let stack = [];

// Add en element to the top of the stack
exports.push = function(elem) {
    stack.push(elem);
};

// Return the element at the top of the stack and remove it from the stack
exports.pop = function() {
    return stack.pop();
};

// Return the element at the top of the stack
exports.peek = function() {
    return stack[0]; //Intentional error
};