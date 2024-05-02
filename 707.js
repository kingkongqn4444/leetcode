class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  let currNode = this.head;
  let i = 0;
  while (i != index) {
    currNode = currNode.next;
    i++;
  }
  return currNode.val;
};

// /**
//  * @param {number} val
//  * @return {void}
//  */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  if (!this.length) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.length) {
    this.addAtHead(val);
  } else {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    const newNode = new Node(val);
    currentNode.next = newNode;
    this.length++;
  }
};

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function (index, val) {};

// /**
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function (index) {};

//   Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtHead(2);
obj.addAtHead(3);
obj.addAtHead(4);
obj.addAtHead(5);
obj.addAtHead(6);
obj.addAtTail(3);
var param_1 = obj.get(6);
// obj.addAtIndex(index, val);
// obj.deleteAtIndex(index);

console.log("============asd=============", param_1);
