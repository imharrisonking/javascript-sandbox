class Stack {
    constructor() {
        this._items = [];
        this._count = 0;
    }

    push(item) {
        this._items[this._count] = item;
        this._count++;
    }

    pop() {
        if (this.isEmpty() === 0) return undefined;

        // Get the last item in the array and reduce the count by 1
        const item = this._items[this._count - 1];
        this._count--;

        // Shift all items to the left by one
        for (let i = this._count; i < this._items.length; i++) {
            this._items[i] = this._items[i + 1];
        }

        // Update the length of the array
        this._items.length = this._count;

        return item;
    }

    peek() {
        if (this.isEmpty()) return 'Empty stack';

        return this._items[this._count - 1];
    }

    length() {
        return this._count;
    }

    isEmpty() {
        return this._count === 0;
    }

    clear() {
        this._items = [];
        this._count = 0;
    }
}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');

stack.pop();

stack.push('Item 4');

stack.clear();

console.log('Top item: ', stack.peek());
console.log('Stack Length: ', stack.length());
