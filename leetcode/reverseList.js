//Reversing a linked list
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const reverseList = head =>{
  let previous = null;
  while(head !== null){
    let current = head;
    head = head.next;
    current.next = previous;
    previous = current;
  }
  return previous;
};

//Test cases
//console.log(reverseList([1,2,3,4,5]));
