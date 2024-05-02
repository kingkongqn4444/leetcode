/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  const listVals = [];
  let current = head;
  while (current) {
    console.log(current);
    listVals.push(current.val);
    current = current.next;
  }
  let left = 0,
    right = listVals.length - 1;
  while (left < right && listVals[left] === listVals[right]) {
    left++;
    right--;
  }
  return left >= right;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true
