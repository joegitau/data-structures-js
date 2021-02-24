class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // add element to stack
  add(element) {
    // add the element at index of the items array
    this.items[this.count] = element;
    console.log(`${element} added at ${this.count}`);

    // increase the index of the items array (prevent over-writing the previous element)
    this.count += 1;
    
    // restore the count to previous state
    return this.count - 1;
  }

  // remove upper most element
  pop() {
    // return undefined if count is 0
    if (this.count == 0) return undefined;

    let poppedItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${poppedItem} has been removed. Count is now: ${this.count}`);

    return poppedItem;
  }

  // check top element in stack
  peek() {
    console.log(`Top element is ${this.count - 1}`);
    return this.items[this.count - 1];
  }

  // Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? 'Stack is Empty' : 'Stack has ' + this.length() + ' element(s).');
    return this.count == 0;
  }

  // get the stack length
  length() {
    return this.count;
  }
}

const stack = new Stack();

// Adding elements
stack.add(100);
stack.add(200);

// check top most element
stack.peek();

stack.add(300);

// Removing top most element
stack.pop(); // 300
stack.pop(); // 200

// check if stack is empty
stack.isEmpty()
