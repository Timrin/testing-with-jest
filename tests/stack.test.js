const stack = require('../src/stack');

test('peek on an empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on a stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on a stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("Hello");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});