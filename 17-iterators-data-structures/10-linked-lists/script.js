class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Insert the first node at head
    insertFirst(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    // Insert the last node at tail
    insertLast(value) {
        const node = new Node(value);
        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
        this.length++;
    }

    // Insert at index
    insert(value, index) {
        if (index > this.length) {
            return;
        }

        if (index === 0) {
            return this.insertFirst(value);
        }

        const node = new Node(value);
        let current, previous;
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        node.next = current;
        previous.next = node;
        this.length++;
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                console.log(current.value);
                return current.value;
            }

            count++;
            current = current.next;
        }

        return null;
    }

    // Remove at index
    removeAt(index) {
        if (index > this.length) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this.length--;
    }

    // Print list data
    printListData() {
        let current = this.head;
        let list = '';

        while (current) {
            list += `${current.value} `;
            current = current.next;
        }

        console.log(list);
    }

    // Clear list
    clear() {
        this.head = null;
        this.length = 0;
    }
}

const list = new LinkedList();

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(50);
list.insertLast(10);
list.insert(500, 2);
list.insert(600, 4);

list.printListData();
console.log('Remove at index 2:');
list.removeAt(2);

list.printListData();
list.getAt(0);
list.getAt(2);

console.log('Clear list:');
list.clear();
list.printListData();

// console.log(list);