function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
  let node = {
    value: val,
    next: null
  }
  if(!this.head){
    this.head = node;
  }
  else{
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}

let l1 = new LinkedList();
// add
l1.push(1);
l1.push(2);
l1.push(3);

let l2 = new LinkedList();
// add
l2.push(1);
l2.push(2);
l2.push(3);

console.log(mergeTwoLists(l1, l2));

function ListNode(val) {
     this.val = val;
     this.next = null;
}

function mergeTwoLists (l1, l2) {
  console.log(l1, l2)
  let list = new ListNode()
  let head = list

  while (l1 !== null && l2 !== null) {

    // Select the smallest value from either linked list,
    // then increment that list forward.
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      list.next = new ListNode(l2.val)
      l2 = l2.next
    }

    list = list.next
  }

  // It's possible that one linked list is shorter than the other so we just
  // add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null)
    list.next = l1
  if (l2 !== null)
    list.next = l2

  // return .next because this first element in the linkedlist is empty
  return head.next
};
