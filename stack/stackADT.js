class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackADT {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = null;
  }

  push(val) {
    console.log(val);
  }
}

const StackNew = new StackADT();

console.log(StackNew.push(5));
