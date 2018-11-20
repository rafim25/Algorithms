class Stack {
    constructor(...items) {
        this.reverse = false;
        this.stack = [...items];
    }

    push(...items) {
        return this.reverse
            ? this.stack.unshift(...items)
            : this.stack.push(...items);
    }

    pop() {
        return this.reverse ? this.stack.shift() : this.stack.pop();
    }
}

const stack = new Stack()

stack.push(1,3);

stack.push(4);

console.log(stack);


stack.reverse = true;
stack.pop();
console.log(stack);
stack.push(6);
console.log(stack);