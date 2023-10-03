const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
const timing = (cb, size) => {
  const start = Date.now();
  for (let i = 0; i < size; i++) {
    cb(i);
  }
  return Date.now() - start;
};

let ll = new LinkedList();
console.log('timings for single linked list addToHead');
for (let size of [10, 100, 1000, 10000]) {
  console.log(timing(ll.addToHead.bind(ll), size));
}

console.log('timings for single linked list addToTail');
for (let size of [10, 100, 1000, 10000]) {
  console.log(timing(ll.addToTail.bind(ll), size));
}

let dll = new DoublyLinkedList();
console.log('timings for double linked list addToHead');
for (let size of [10, 100, 1000, 10000]) {
  console.log(timing(dll.addToHead.bind(dll), size));
}

console.log('timings for double linked list addToTail');
for (let size of [10, 100, 1000, 10000]) {
  console.log(timing(dll.addToTail.bind(dll), size));
}
