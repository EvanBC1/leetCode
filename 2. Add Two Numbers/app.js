function ListNode(val) {
  this.val = val;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = new ListNode(null);
  }

  insert(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
}

const linkedList = new LinkedList();
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(2);

const linkedList2 = new LinkedList();
linkedList2.insert(4);
linkedList2.insert(6);
linkedList2.insert(5);

let addTwoNumbers = function(l1, l2) {
  let current = l1.head;
  const linkedArray = [];
  while (current.next) {
    linkedArray.push(current.val);
    current = current.next;
  }
  let num = parseInt(linkedArray.reverse().toString().replace(/,/g,""));

  let current2 = l2.head;
  const linkedArray2 = [];
  while (current2.next) {
    linkedArray2.push(current2.val);
    current2 = current2.next;
  }
  let num2 = parseInt(linkedArray2.reverse().toString().replace(/,/g,""));

  let numArray = Array.from(String(num + num2), Number);

  const linkedList3 = new LinkedList();
  for (let i = 0; i < linkedArray.length; i++) {
    linkedList3.insert(numArray[i])
  }

  return linkedList3;
};
console.log(addTwoNumbers(linkedList, linkedList2));
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
//   You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//   Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

